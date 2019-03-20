import React, { Component } from "react";
import ModalExample from "./editModal.js";
import { throws } from "assert";
import {Card,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, } from 'reactstrap';

export default class TaskCategoryCard extends Component {
  render() {
    // let filteredVar = this.props.task
    //  .filter(task =>
    //  task.homeId === homeIdNumb
    // && task.catId === this.props.match.params.categoryId
    //   )
    // console.log(this.props.task)


    // console.log(`Cat card key`, this.props.task.key);
    // console.log(`INDEX`, this.props.id)
    // console.log(`TASK ID`, this.props.task.id)

    return (
      <Card className="fullCatCardList">
        {
          <CardBody
          className="categorycard"
          key={this.props.task.id}>
            {/* { <h2 >TaskName</h2> } */}

            { <CardTitle id="CardTitle">{this.props.task.name}</CardTitle> }


            {/* {<h4>taskId :{this.props.task.id}</h4>
            <h4>catId: {this.props.task.catId}</h4>
            <h4>homeId: {this.props.task.homeId}</h4> } */}

            {<h6> done by: {this.props.task.expectedCompDate}
            </h6>}
            <h6> contact: {this.props.task.contact}
            </h6>

            <div className="buttonGroup">
              <button
                type="button"
                className="btn btn-success"
                id="buttonOne"
                onClick={() => {
                  this.props.deleteTask(this.props.task.id);
                }}
              >
                Delete
              </button>
              <div id={this.props.id} />
              <button
                className="btn btn-success"
                id="buttonTwo"
                onClick={e => {
                  this.props.showModal(e, this.props.task.id);
                }}
              >
                {" "}
                Edit{" "}
              </button>
            </div>
          </CardBody>
        }
      </Card>
    );
  }
}
