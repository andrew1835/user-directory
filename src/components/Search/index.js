import React from "react"
import "./style.css";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <div className="container">
                    <div className="row">
                        <input
                            onChange={props.handleInputChange}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search For an Employee by First Name"
                            id="search"
                        />
                        <br />
                        <button onClick={props.search} className="btn btn-primary" id="button">
                            Search </button>
                    </div>
                </div>
            </div>
        </form>
    );
}


export default Search