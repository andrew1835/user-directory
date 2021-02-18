import React, { Component } from "react";
import API from "../../utils/API"
import Search from "../Search"
import Table from "../Table"
import SearchResults from "../SearchResults";
import "./style.css";

class Index extends Component {
    state = {
        employees: [],

        // thumbnail: "",
        // first: "",
        // last: "",
        // email: "",

    }


    componentDidMount() {
        this.generatePeople();
    }

    generatePeople = () => {
        API.getRandomPerson()
            .then(res =>
                this.setState({
                    employees: res.data.results,
                    // thumbnail: res.data.results[0].picture.thumbnail,
                    // first: res.data.results[0].name.first,
                    // last: res.data.results[0].name.last,
                    // email: res.data.results[0].email
                }))


            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.firstName);
    };

    searchByFirstName = (event) => {
        event.preventDefault();
        const searchedName = this.state.employees.filter(
            (obj) => obj.name.first === this.state.search
        );
        this.setState({ employees: searchedName });
    };



    render() {
        return (
            <div>

                <Search
                    search={this.searchByFirstName}
                    handleInputChange={this.handleInputChange}
                />

                {this.state.employees.map((employee) => (
                    <Table
                        thumbnail={employee.picture.thumbnail}
                        first={employee.name.first}
                        last={employee.name.last}
                        email={employee.email}
                    />
                ))}

            </div>

        )
    }


}

export default Index