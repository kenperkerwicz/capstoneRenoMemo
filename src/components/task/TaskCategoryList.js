import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard"

export default class TaskCategoryList extends Component {


  render () {
    return <React.Fragment>
      <button
            type="submit"
            className= "addToDoButton"
            onClick={() => {
              this.props.history.push("/tasks/new")}
          }>
            add task.
          </button>
          {
            this.props.tasks
            .map(task =>
          <TaskCategoryCard
           task={this.props.task} {...this.props}

           />)

        }




    </React.Fragment>
  }
}