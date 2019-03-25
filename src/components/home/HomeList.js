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
            <img className="homeImage"src="https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="home"></img>
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


      <div >
        {
          this.props.homes.filter(mv => mv.userId === user)
          .map(home =>

            <HomeCard key={home.id} home={home} {...this.props} userId={home.userId}/>
        )
        }
      </div>
      
      </React.Fragment>
    )
  }
}
