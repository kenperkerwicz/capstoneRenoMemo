import React, { Component } from "react";
import './category.css'
import TaskCategoryList from "./TaskCategoryList"
import TaskCategoryCard from "./CategoryCard"

export default class CategoryForm extends Component {

  state = {
    catId: "",
    name: "",
    contact: "",
    expectedCompDate: "",
    homeId: "",
    status: "",
    id: ""
  };


  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewCard = evt => {
    evt.preventDefault();
    if (this.state.taskName === "") {
      window.alert("Please fill in information");
    } else {
      const card = {
        // userId:parseInt(sessionStorage.getItem('credentials')),
        // id: this.state.id,
        // homeAddress: this.state.homeAddress,
        // dateOfEntry:  Math.floor(Date.now() / 1000)

      id: this.state.id,
    userId: parseInt(sessionStorage.getItem('credentials')),
    catId: this.state.catId,
    name: this.state.name,
    contact: this.state.contact,
    expectedCompDate: this.state.expectedCompDate,
    homeId: this.state.homeId

      };

      // Create the home and redirect user to the home list

      this.props
        .addTask(card)
        .then(() => this.props.history.push("/tasks"));
    }
  };


  render () {
    return <div className="mainDiv">


      <div className="header">
      <div>
      <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="TaskName"
            />
      </div>

            <div>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="contact"
              placeholder="contact"
            />
             </div>
       <div>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="expectedCompDate"
              placeholder="expectedCompDate"
            />
        </div>




              <button
            type="submit"
            onClick={this.constructNewCard}
            className="btn btn-primary"
          >
            Save Card.
          </button>
      </div>

    </div>

    }


}