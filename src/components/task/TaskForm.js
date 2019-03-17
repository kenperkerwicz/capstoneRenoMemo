import React, { Component } from "react";
import "./category.css";
import TaskCategoryList from "./TaskCategoryList";
import TaskCategoryCard from "./CategoryCard";

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
    const homeId = this.props.match.params.homeId;

    const catId = this.props.match.params.categoryId;

    evt.preventDefault();
    if (this.state.taskName === "") {
      window.alert("Please fill in information");
    } else {
      const card = {
        id: this.state.id,
        userId: parseInt(sessionStorage.getItem("credentials")),
        catId: this.state.catId,
        name: this.state.name,
        contact: this.state.contact,
        expectedCompDate: this.state.expectedCompDate,
        homeId: this.state.homeId
      };

      // Create the task and redirect user to the task list

      this.props.addTask(card).then(() => this.props.history.push(`/homes/`));
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
            <input
              type="hidden"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="homeId"
              placeholder="homeId"
            />
          </div>

          <div>
            <input
              type="hidden"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="catId"
              placeholder="catId"
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
    );
  }
}
