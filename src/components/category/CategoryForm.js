import React, { Component } from "react";
import './category.css'
// import CategoryList from "./CategoryList"
// import CategoryCard from "./CategoryCard"

export default class CategoryForm extends Component {

  state = {
    categoryName: "",
    id: ""

  };


  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewCategory = evt => {
    evt.preventDefault();
    // if (this.state.categoryName === "") {
    //   window.alert("Please select a category");
    // } else {
      const editedCategory = {

      categoryName: this.state.categoryName,
       id: this.state.id


      };

      // Create the home and redirect user to the home list
      this.props
        .addCategory(editedCategory)
        .then(() => this.props.history.push("/homes"));

    // }

  };


  render () {
    return <div className="mainDiv">
      <div className="header">

      <div className="form-group">
            <label htmlFor="homeAddress">category name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="categoryName"
              
            />
          </div>

      <button
            className="btn btn-primary"
            type="submit"
            onClick={this.constructNewCategory}>
            save.

          </button>
      </div>


    </div>

    }


}