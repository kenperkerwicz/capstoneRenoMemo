import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./footer.css"
import {Card,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import download from "./home-512.png"


class Footer extends Component {
  render () {


    return (

      <nav id="footerBody"
      // id="navButton"
      >
      <section
      // className="nav nav-pills"
      >
          <div className="nav-item" id="footerBody">
          <Link className="footerLink" id="" to="/contact">Contact</Link>

          <Link className="footerLink" id="" to="/contact">Task Management</Link>
          <Link className="footerLink" id="" to="/contact">Motivation</Link>
          </div>
          <div className="entirebottomFooter">
          <img id="houseImgFooter" src={download} height="40"></img>
          </div>
          </section>
          </nav>


    )
  }

}

export default Footer