import React, { Component } from "react";
import TaskCategoryCard from "./CategoryCard";
import TaskManager from "../../modules/TaskManager";
import ModalExample from "../task/editModal";
import CategoryManager from "../../modules/CategoryManager";
import {Card, CardDeck, Container,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

export default class TaskCategoryList extends Component {
  state = {
    tasks: [],
    modalTaskId: [],
    show: false,
    currentModalData: {},
    categories: []
  };

  showModal = (e, taskId) => {
    // console.log(e.target.parentNode)
    // console.log(`SHOW MODAL`,taskId)
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

    this.newState = {}

    // TaskManager.getTasks(homeId, catId).then(tasks => {
    //   this.setState({ tasks: tasks, show: false });
    // });

   TaskManager.getTasks(homeId, catId)
    .then(tasks => this.newState.tasks = tasks)
    .then(()=> CategoryManager.get(catId))
    .then(categories => this.newState.categories = categories)
    .then(()=> this.setState(this.newState))

  };

  deleteTask = id => {

    return TaskManager.remove(id).then(() => this.populateData())

  };

  componentDidMount() {

    this.populateData();

    // console.log(`categories`, this.state.categories)
  }

  render() {
    // console.log(`STATE TASKS`, this.state.tasks)
    // console.log("TASKS", this.props.tasks);
    // console.log("CATEGORIES", this.props.categories);
    // console.log(`CURRENT MODAL DATA`, this.currentModalData);
   let homeIdNumb = this.props.match.params.homeId;
   let catIdNumb = this.props.match.params.categoryId;


    let catName = this.state.categories.categoryName





    return (



      <React.Fragment>



        <h2 className="categoryName">{catName}.</h2>

        <button
        //  homeId ={this.state.homeId}
          type="submit"
          className="addToDoButton"
          onClick={() => this.props.history.push(`/homes/${homeIdNumb}/${catIdNumb}/tasks/new`)}
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

<Container id="TaskCategoryCard">
<Row >
        {this.state.tasks.map((task, i) => (
<Col sm="4" >
          <TaskCategoryCard
            task={task}
            {...this.props}
            taskName={task.taskName}
            catId={task.catId}
            // key={task.id}
            id={i}
            showModal={this.showModal}
            // homeId={this.homeId}
            show={this.state.show}
            deleteTask={this.deleteTask}
           categories={this.state.categories}
          />
          </Col>
        ))}
        </Row>
         </Container>
      </React.Fragment>
    );
  }
}
