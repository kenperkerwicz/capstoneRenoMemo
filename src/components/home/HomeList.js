import React, { Component } from 'react'
import { Link } from "react-router-dom";
 import HomeCard from "./HomeCard";
 import './home.css'
 import {Card,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';

export default class HomeList extends Component {
  render () {
    let user = Number(sessionStorage.getItem("credentials"))
      return (
          <React.Fragment>

<div className="entireImageDiv">
            <Row>
              {/* <Row id="firstRow">
           <img className="homeImage" id="firstImage"src="https://images.unsplash.com/photo-1527722681152-c019fcfe8858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="home"></img>
            <img className="homeImage"src="https://images.unsplash.com/photo-1414353220870-38cc1d0fbf76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="home"></img>
            </Row> */}
            <img className="homeImage"src="https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="home"></img>
          <img className="homeImage"src="https://images.unsplash.com/photo-1551354907-80361e454f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="home"></img>
           </Row>
            </div>

            <h1 className="homesTitle">Homes.</h1>
              <div
               className="HomeButton"
              >
                  <button type="button"
                  id="AddAHomeButton"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/homes/new")}
                          }>
                      Add a new home.
                  </button>

              </div>

<Row className="homeCardsBackground">

        {
          this.props.homes.filter(mv => mv.userId === user)
          .map(home =>
          <Col sm="4">
            <HomeCard key={home.id} home={home} {...this.props} userId={home.userId}/>
        </Col>
        )
        }

      </Row>
      </React.Fragment>
    )
  }
}
