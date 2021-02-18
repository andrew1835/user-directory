import React, { Component } from "react";
import API from "../../utils/API"
import Search from "../Search"
import Table from "../Table"
import "./style.css";

class Index extends Component {
    state = {

        thumbnail: "",
        first: "",
        last: "",
        email: "",
        search: ""
    }


    componentDidMount() {
        this.generatePeople();
    }

    generatePeople = () => {
        API.getRandomPerson()
            .then(res =>
                this.setState({
                    thumbnail: res.data.results[0].picture.thumbnail,
                    first: res.data.results[0].name.first,
                    last: res.data.results[0].name.last,
                    email: res.data.results[0].email
                }))


            .catch(err => console.log(err));
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <Search />
                <Table
                    thumbnail={this.state.thumbnail}
                    first={this.state.first}
                    last={this.state.last}
                    email={this.state.email}
                />

            </div>

        )
    }


}

export default Index