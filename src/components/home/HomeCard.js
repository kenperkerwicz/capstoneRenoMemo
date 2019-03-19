import React, { Component } from "react"
import { Link } from "react-router-dom"
import download from "./home-512.png"
import download2 from "./output-onlinepngtools.png"
import download3 from "./output-onlinepngtools--RESIZED.png"
import {Card} from 'reactstrap';



export default class HomeCard extends Component {
    render() {
        return (
            <Card key={this.props.home.id} className="card"
            >
                <div className="card-body"
                //  id="cardBodyId"
                >
                    <h5 className="card-title">





                        <div> {this.props.home.homeAddress}</div>
                        {/* <div> date of entry: {this.props.home.dateOfEntry}</div> */}

                        <Link className=""

to={`/homes/${this.props.home.id}`}> { <img src={download3} alt="home"className="icon--home" /> }</Link>


                        <button
                            type="button"
                            id="editButton"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/homes/${this.props.home.id}/edit`);
                            }}
                        >
                            Edit
                            </button>
                        <a href="#"
                        id="deleteButton"
                            onClick={() => this.props.deleteHome(this.props.home.id)}
                            className="btn btn-success">Delete</a>



                    </h5>
                </div>
            </Card>
        )
    }
}