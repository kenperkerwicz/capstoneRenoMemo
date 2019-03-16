import React, { Component } from "react";
import ModalExample from "./editModal.js"
import { throws } from "assert";



export default class TaskCategoryCard extends Component {


  state = {
    show: false,
    id: this.props.task.id
  };

  showModal = (e, taskId) => {
      console.log(e)
      console.log(taskId)
      if (this.state.show === true) {

        this.setState({
          show: true
        });
      } else {
        this.setState({
          show: false
        })
      }

  };



  componentDidMount() {

    // let tasksList = this.props.tasks || []


    // console.log('HOME ID NUMB', homeIdNumb)
    // console.log(this.props.match.params.categoryId)
    // console.table('TASKS IN CAT', this.props.tasks)


    // // console.log('Filtered VAR', filteredVar)
    // console.log('task catId', this.props.task.catId)


  }


  render() {



    // let filteredVar = this.props.task
    //  .filter(task =>
    //  task.homeId === homeIdNumb
    // && task.catId === this.props.match.params.categoryId
    //   )
    // console.log(this.props.task)



    return (

      <React.Fragment>

        {
          <div className="categorycard" key={this.props.task.id}>
            <h2 >TaskName</h2>
            <h4 >{this.props.task.name}</h4>

            <h6> expected completion date: {this.props.task.expectedCompDate}
            </h6>
            {<h6> contact info: {this.props.task.contact}
            </h6>}

            {/* <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                window.alert('hi EDIT button')
              }}
            >
              Edit
                            </button> */}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                window.alert('hi DELETE button')
              }}
            >
              Delete
             </button>
                            <div >
                            <ModalExample
                            showModal ={this.showModal}
                            key={this.props.task.id}
                            name ={this.props.task.name}
                            show={this.state.show}>edit</ModalExample>
                            </div>


            <button onClick={e => {
              this.showModal(e, this.props.task.id);

            }}
            > show Modal </button>
          </div>

        }


      </React.Fragment>
    )
  }


}