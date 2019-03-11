import React, { Component } from "react";
import './category.css'
import CategoryList from "./CategoryList"
import CategoryCard from "./CategoryCard"

export default class CategoryForm extends Component {

  state = {
    id: "",
    userId: "",
    catId: "",
    taskName: "",
    contact: "",
    expectedCompDate: "",
    homeId: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  render () {
    return <div className="mainDiv">
      <div className="header">
      <h1>category name goes here</h1>
      <button
            type="submit"
            onClick={() => {window.alert('hi')}}
            className="btn btn-primary"
          >
            add to do note:
          </button>
      </div>
      <br></br>

      <div className="cardDisplay">{<CategoryCard/>}</div>

    </div>

    }


}