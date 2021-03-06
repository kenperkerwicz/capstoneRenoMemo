import React, { Component } from "react"
import { Link } from "react-router-dom"
import download2 from "./eugen.png"


import {Card,
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , Button, Row, Col} from 'reactstrap';



export default class HomeCard extends Component {
    render() {
        return (



            <Card key={this.props.home.id}

            className="cardBodyHomeCard"
            >
                <CardBody
                //  id="cardBodyId"
                >
                    <CardText
                    //  className="card-title"
                    >



                            <CardSubtitle className="editAndDeleteGroup">

                        <CardTitle className="CardTitle"> {this.props.home.homeAddress}</CardTitle>
                        <Button
                            type="button"
                            id="editButton"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/homes/${this.props.home.id}/edit`);
                            }}
                        >
                            Edit
                            </Button>

                        <a href="#"
                        id="deleteButton"
                            onClick={() => this.props.deleteHome(this.props.home.id)}
                            className="btn btn-success">Delete</a>

                            </CardSubtitle>

                        {/* <div> date of entry: {this.props.home.dateOfEntry}</div> */}
                        <h4 className="thingsToDo"
                        ></h4>
                        <Link className=""

to={`/homes/${this.props.home.id}`}> { <img src={download2} alt="home"
className="icon--home"
  /> }</Link>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}