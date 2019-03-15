import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard"
import TaskManager from "../../modules/TaskManager"

export default class TaskCategoryList extends Component {


  state = {
    tasks: []
  }



  // get tasks with home id and cat id //

  // set state of tasks //

  // map over tasks and implement taskCatCard //


   componentDidMount() {

    const newState = {}

     const homeId = this.props.match.params.homeId

     const catId = this.props.match.params.categoryId



    TaskManager.getTasks(homeId , catId).then(tasks => newState.tasks = tasks).then(()=> this.setState(newState)).then( console.log(this.state.tasks)).then(console.log(newState))



   console.log(this.props.tasks)
   console.log('CATEGORY LIST', this.props.tasks)
  console.log(this.props.categories)
    console.log(this.props.tasks)

   }


  render() {

    let homeIdNumb = Number(this.props.match.params.homeId)
    console.log(homeIdNumb)


 return (
<React.Fragment>

   <button
    type="submit"
   className="addToDoButton"
    onClick={() =>
     this.props.history.push("/tasks/new")
     }
     >
    add task.
    </button>

{/* .filter(
      task =>
       task.homeId === this.props.match.params.homeId
       && task.catId === this.props.match.params.categoryId */}


     {
    this.state.tasks
     .map(task =>
       <TaskCategoryCard
         task={task}
       {...this.props}
        taskName={task.taskName}
        catId={task.catId}
        key={this.state.id}
      />
      )
    }
    </React.Fragment>)
}

}
