import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import {Card, CardDeck,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

import "./contact.css"



// import download1 from "./output-onlinepngtools--RESIZED.png"


export default class ContactList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render () {
    console.log(`Advice List ART NAME`, this.props.advice)
    return (
<div className="contactListBackgroundImg">
      <h1 className="Advice">Contact.</h1>
      <h6>email: kenperkerwicz@gmail.com</h6>
      <h6>linkedIn: kenperkerwicz</h6>

      </div>
    )
  }
}