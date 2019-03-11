import React, { Component } from "react";
import './category.css'
import CategoryCard from "./CategoryCard"

export default class CategoryForm extends Component {

  state = {
    home: "",
    id: "",
    dateOfEntry: "",
    userId: "",
    homeAddress: ""
  };

  render () {
    return <div className="mainDiv">
      <div className="header">
      <h1>category name goes here</h1>
      <h3 className="h3">contact info goes here?</h3>
      </div>
      <br></br>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">cards go down here</div>
      <div className="cardDisplay">{<CategoryCard/>}</div>

    </div>

    }


}