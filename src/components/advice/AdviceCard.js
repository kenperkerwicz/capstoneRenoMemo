import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import {Card, CardDeck,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
  import download from "../footer/home-512.png"

import'./advice.css'


export default class AdviceCard extends Component {


  render () {





    console.log(`articleName`, this.props.a)
    console.log(`advice`, this.props.a.articleName)

    return <React.Fragment >

<Card width="40%"

className="adviceCards"
>


<CardBody>
<div className="cardImageBackgroundColor">
<img id="houseImgFooter" src={download} height="70"></img>
</div>
<CardText className="articleNameClassName">{this.props.a.articleName}
</CardText>
<Button className="articleButton" onClick={() => {
 window.alert(this.props.a.link)
}}>take me to the article</Button>
</CardBody>
</Card>


        </React.Fragment>
  }
}