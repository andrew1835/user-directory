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
        search: ""
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


    render() {
        return (
            <div>
                <Search />
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