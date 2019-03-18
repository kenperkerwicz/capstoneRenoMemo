import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard";
import TaskManager from "../../modules/TaskManager";
import ModalExample from "../task/editModal";

export default class TaskCategoryList extends Component {
  state = {
    tasks: [],
    modalTaskId: [],
    show: false,
    currentModalData: {}
  };

  showModal = (e, taskId) => {
    // console.log(e.target.parentNode)
    console.log(`SHOW MODAL`,taskId)
    // console.log(`task.id`, this.task.id)

    if (this.state.show === true) {
      this.setState({
        show: false
      });
    } else {
      this.setState({

        show: true,
        currentModalData: this.state.tasks.find(task => {
          return task.id === taskId;

        })
      });

    }
  };


  // get tasks with home id and cat id //

  populateData = () => {
    const homeId = this.props.match.params.homeId;

    const catId = this.props.match.params.categoryId;

    TaskManager.getTasks(homeId, catId).then(tasks => {
      this.setState({ tasks: tasks, show: false });
    });
  };

  deleteTask = id => {
    return TaskManager.removeAndList(id).then(tasks =>
      this.setState({
        tasks: tasks
      })
    );
  };

  componentDidMount() {

    this.populateData();


  }

  render() {
    // console.log(`STATE TASKS`, this.state.tasks)
    // console.log("TASKS", this.props.tasks);
    // console.log("CATEGORIES", this.props.categories);
    // console.log(`CURRENT MODAL DATA`, this.currentModalData);
   let homeIdNumb = this.props.match.params.homeId;
   let catIdNumb = this.props.match.params.catId;
    // console.log(homeIdNumb)

    return (

      <React.Fragment>
        <button
        homeId ={this.state.homeId}
          type="submit"
          className="addToDoButton"
          onClick={() => this.props.history.push(`/homes/${homeIdNumb}/tasks/new`)}
        >
          add task.
        </button>

        {this.state.show ? (
          <ModalExample
            showModal={this.showModal}
            populateData={this.populateData}
            // key={this.state.task.id}
            handleFieldChange={this.state.handleFieldChange}
            task={this.state.currentModalData}
            show={this.state.show}
          >
            edit
          </ModalExample>
        ) : null}

        {this.state.tasks.map((task, i) => (
          <TaskCategoryCard
            task={task}
            {...this.props}
            taskName={task.taskName}
            catId={task.catId}
            // key={task.id}
            id={i}
            showModal={this.showModal}
            homeId={this.homeId}
            show={this.state.show}
            deleteTask={this.deleteTask}
          />
        ))}
      </React.Fragment>
    );
  }
}
