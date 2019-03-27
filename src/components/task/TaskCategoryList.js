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
    categories: [],
    cost: []
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



  newArray = []

  getCosts = () => {

    this.state.tasks.forEach(task => {

 let costNum = Number(task.cost);

this.newArray.push(costNum);

});


let arrayToAdd = this.newArray

console.log(typeof(parseInt(arrayToAdd)))

console.log(this.newArray)

let sum = 0;

 for (var i = 0; i < arrayToAdd.length; i++) {
sum = sum + arrayToAdd[i];
}

console.log(sum)

this.setState({
  cost: sum
})
}



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

 sumValues = () => {

    let num1= Number(document.formcalc.txtnum1.value);
    let num2= Number(document.formcalc.txtnum2.value);
   let  res=num1+num2;
    document.formcalc.txtres.value=res
  }

  componentDidMount() {

    this.populateData();

    // console.log(`categories`, this.state.categories)

   this.getCosts();
  }


  render() {

   let homeIdNumb = this.props.match.params.homeId;
   let catIdNumb = this.props.match.params.categoryId;


    let catName = this.state.categories.categoryName


    // console.log(`costs`, this.state.tasks)


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
           cost={task.cost}
          />
          </Col>
        ))}
         <h2>approx total: </h2>
          <form name="formcalc">
          {/* Number 1 <input type="text" name="txtnum1"
            value={this.cost}
         /><br></br>
          Number 2 <input type="text" name="txtnum2"></input>
           Result: <input type="text" name="txtres"></input> */}

            <input type="button" value="Calculate" onClick={() => this.getCosts()}></input>
          </form>
            <h3>{this.state.cost}</h3>
          <script type="text/javascript">


          </script>
        </Row>
         </Container>


      </React.Fragment>
    );
  }
}
