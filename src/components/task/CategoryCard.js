import React, { Component } from "react";


export default class TaskCategoryCard extends Component {



  ConfirmDelete ()
  {
    let x = window.confirm("Are you sure you want to delete?");
    if (x)
        return true;
    else
      return false;
  }


  render () {
 return (
   <React.Fragment>

   <div className="cardDisplay"> <h1> indivTask Cards</h1>
   <h3>will go here</h3>


   <h5> {this.props.task.taskName}</h5>
    <h6> contractor:
    </h6>
    <h6> start date: {this.props.task.startDate}
    </h6>
    <h6> expected completion date: {this.props.task.expectedCompDate}
    </h6>
    <h6> contact info: {this.props.task.contact}
    </h6>





   <button type="button"
    onClick={() => {this.props.deleteTask(this.props.task.id)}}>ERASE</button>
<button type="button"
   className="btn btn-success"onClick={() => {window.alert('hello DOING')}}>doing</button>
<button type="button"
   className="btn btn-success"onClick={() => {this.ConfirmDelete()}}>done</button>
    </div>

  </React.Fragment>
 )
  }


}