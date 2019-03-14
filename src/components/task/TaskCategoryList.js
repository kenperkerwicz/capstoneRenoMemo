import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard"
import TaskManager from "../../modules/TaskManager"

export default class TaskCategoryList extends Component {



  // componentdid mount

  // get tasks with home id and cat id //

  // set state of tasks //

  // map over tasks and implement taskCatCard //


  componentDidMount() {

    const homeId = this.props.match.params.homeId
    const catId = this.props.match.params.categoryId


    console.log(homeId)
    console.log(catId)
    console.log('CATEGORY LIST', this.props.tasks)
  }

  render() {

    return <React.Fragment key={this.props.catId}>
      <button
        type="submit"
        className="addToDoButton"
        onClick={() => {
          this.props.history.push("/tasks/new")
        }
        }>
        add task.
          </button>


        <TaskCategoryCard
          tasks={this.props.tasks}
          {...this.props}
          taskName={this.props.taskName}
          taskCatId={this.props.tasks.catId}
        />



    </React.Fragment>
  }
}