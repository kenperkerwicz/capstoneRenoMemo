import React, { Component } from "react";
import "./category.css";
import TaskCategoryList from "./TaskCategoryList";
import TaskCategoryCard from "./CategoryCard";

export default class TaskForm extends Component {
  state = {
    catId: "",
    name: "",
    contact: "",
    expectedCompDate: "",
    homeId: "",
    status: "",
    id: "",
    cost: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };



  constructNewCard = evt => {
    // const homeId = this.props.match.params.homeId;

    // const catId = this.props.match.params.categoryId;
console.log(`STATE CAT ID`, this.state.catId)

 let paramHomeId = this.props.match.params.homeId
 let paramCatId = this.props.match.params.categoryId

console.log(`PARAM CAT ID`, paramCatId)


    evt.preventDefault();
    if (this.state.taskName === "") {
      window.alert("Please fill in information");
    } else {

      const card = {

        name: this.state.name,
        contact: this.state.contact,
        expectedCompDate: this.state.expectedCompDate,
        id: this.state.id,
        status: this.state.status,
        homeId: Number(this.props.match.params.homeId),
        catId: Number(this.props.match.params.categoryId),
        cost: this.state.cost
      };

      console.log(`CARD`, card)

      // Create the task and redirect user to the task list

      this.props.addTask(card).then(() => this.props.history.push(`/homes/${paramHomeId}/${paramCatId}`));
    }
  };

  render() {
    return (
      <div className="mainDiv">
        <div className="header">
          <div>
            <label>task name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
            />
          </div>

          <div>
            <label>contact information</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="contact"
            />
          </div>
          <div>
            <label>expected completion date</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="expectedCompDate"
            />
          </div>
          <div>
            <label>approx cost $</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="cost"
            />
          </div>

          <div>
            <input
              type="hidden"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="homeId"
              placeholder="homeId"
            />
          </div>

          <button
            type="submit"
            onClick={this.constructNewCard}
            className="btn btn-primary"
            id="SaveTaskForm"
          >
            Save Card.
          </button>
        </div>
      </div>
    );
  }
}
