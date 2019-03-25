import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import {Card, CardDeck,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
  import AdviceCard from './AdviceCard'

import'./advice.css'


// import download1 from "./output-onlinepngtools--RESIZED.png"


export default class AdviceList extends Component {



  render () {
    console.log(`Advice List ART NAME`, this.props.advice)
    return (
<div>
      <h1 className="Advice">Advice.</h1>
      <Row>
     {
       this.props.advice.map((advice) =>
<Col sm="4">
<AdviceCard
articleName={this.articleName}
a={advice}
/>
</Col> )  }
      </Row>
      </div>
    )
  }
}