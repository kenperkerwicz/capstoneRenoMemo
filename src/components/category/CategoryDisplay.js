import React, { Component } from "react";
import './category.css'


export default class CategoryDisplay extends Component {

  render () {
    return <div className="mainDiv">
      <div className="header">
      <h1>category name goes here</h1>
      <h3 className="h3">contact info goes here</h3>
      </div>
      <br></br>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">cards go down here</div>

    </div>

    }


}