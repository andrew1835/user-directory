import React from "react"
import "./style.css";

function Table(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><img src={props.thumbnail}></img></th>
                        <td>{props.first}</td>
                        <td>{props.last}</td>
                        <td>{props.email}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    );

}


export default Table