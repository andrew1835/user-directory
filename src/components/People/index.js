import React, { Component } from "react";
import API from "../../utils/API"
import Search from "../Search"
import Table from "../Table"
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
    };

    searchByFirstName = (event) => {
        event.preventDefault();
        const searchedName = this.state.employees.filter(
            (obj) => obj.name.first === this.state.search
        );
        this.setState({ employees: searchedName });
    };

    sortByLastName = (event) => {
        event.preventDefault();
        const sortedEmployees = this.state.employees.sort((firstPerson, secondPerson) => {
            if (firstPerson.name.last > secondPerson.name.last) {
                return 1;
            } else if (firstPerson.name.last < secondPerson.name.last) {
                return -1;
            } else {
                return 0;
            }
        });
        this.setState({ employees: sortedEmployees });
    }



    render() {
        return (
            <div>

                <Search
                    search={this.searchByFirstName}
                    handleInputChange={this.handleInputChange}
                    sort={this.sortByLastName}

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