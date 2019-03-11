import React, { Component } from "react"
import { Link } from "react-router-dom"
import download from "./home-512.png"



export default class HomeCard extends Component {
    render() {
        return (
            <div key={this.props.home.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">



                        <div> address: {this.props.home.homeAddress}</div>
                        <div> date of entry: {this.props.home.dateOfEntry}</div>
                        {/* <img src={download} alt="home"className="icon--home" /> */}

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
                            className="btn btn-success">Delete</a>
                            <Link className="nav-link" to={`/homes/${this.props.home.id}`}>Categories to Complete</Link>

                    </h5>
                </div>
            </div>
        )
    }
}