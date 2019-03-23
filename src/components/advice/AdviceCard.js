import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import {Card, CardDeck,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

import'./advice.css'


export default class AdviceCard extends Component {
  render () {
    console.log(`articleName`, this.props.a)
    console.log(`advice`, this.props.a.articleName)

    return <React.Fragment >



<Row className="Advi">


      <Col sm="4" >
<Card width="20%"
// className="individualCats"
>


<CardBody>
<div className="cardImageBackgroundColor">
<CardImg  className="cardImageClassName" id="img" src="https://s.hdnux.com/photos/35/63/32/7812764/3/rawImage.jpg" alt="Card image cap"/>
</div>
<CardText className="articleNameClassName">{this.props.a.articleName}
</CardText>
<Button className="articleButton" onClick={() => {
  window.alert('hi')
}}>take me to the article</Button>
</CardBody>
</Card>
</Col>
</Row>
        </React.Fragment>
  }
}