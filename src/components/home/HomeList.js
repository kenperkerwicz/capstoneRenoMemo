import React, { Component } from 'react'
import { Link } from "react-router-dom";
 import HomeCard from "./HomeCard";
 import './home.css'
 import {Card,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class HomeList extends Component {
  render () {
    let user = Number(sessionStorage.getItem("credentials"))
      return (
          <React.Fragment>
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
          // this.props.homes.sort((a,b) => {return b.dateofEntry - a.dateofEntry})


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
