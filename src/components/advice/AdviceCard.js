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

<Card width="40%"

className="adviceCards"
>


<CardBody>
<div className="cardImageBackgroundColor">
<CardImg  className="cardImageClassName" id="img"
src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
alt="Card image cap"/>
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