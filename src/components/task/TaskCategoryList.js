import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard"
import TaskManager from "../../modules/TaskManager"

export default class TaskCategoryList extends Component {


  state = {

    tasks: []

  }
  // componentdid mount

  // get tasks with home id and cat id //

  // set state of tasks //

  // map over tasks and implement taskCatCard //


  componentDidMount() {
    const homeId = this.props.match.params.homeId
    const catId = this.props.match.params.categoryId

    TaskManager.getTasks(homeId, catId).then(tasks =>

      this.setState({
        tasks
      })
    )
  }
  render() {
    console.log(this.props.match.params)
    return <React.Fragment>
      <button
        type="submit"
        className="addToDoButton"
        onClick={() => {
          this.props.history.push("/tasks/new")
        }
        }>
        add task.
          </button>
      {
          this.state.tasks.map(task => console.log(task) ||
        <TaskCategoryCard
          task ={task}
          {...this.props}
        />)

      }




    </React.Fragment>
  }
}