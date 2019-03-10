import React, { Component } from "react"
import { Link } from "react-router-dom"



export default class HomeCard extends Component {
    render() {
        return (
            <div key={this.props.home.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">



                        <div> address: {this.props.home.homeAddress}</div>
                        <div> date of entry: {this.props.home.dateOfEntry}</div>


                        {/* <Link className="nav-link" to={`/movies/${this.props.movie.id}`}>Edit</Link> */}
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/homes/${this.props.home.id}/edit`);
                            }}
                        >
                            Edit
                            </button>
                        <a href="#"
                            onClick={() => this.props.deleteHome(this.props.home.id)}
                            className="card-link">Delete</a>
                            
                    </h5>
                </div>
            </div>
        )
    }
}