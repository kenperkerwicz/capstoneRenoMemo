import React, { Component } from "react";


export default class TaskCategoryCard extends Component {


 state = {
   filteredVar: []
 }

 componentDidMount() {
  let tasksList = this.props.tasks || []

    let newState = {}

    let filteredVar =  this.props.tasks
    .filter(task => task.homeId === this.props.match.params.homeId && task.catId === this.props.match.params.categoryId)

   newState.filteredVar = filteredVar

   this.setState(newState)


   console.log(this.props.match.params.homeId)

   console.log(tasksList)

  console.log(this.props.match.params.categoryId)

    console.log(this.props.tasks)

  }


    render () {
      return (


   <React.Fragment>

     {

    this.state.filteredVar.map(task =>
<div>
     <h1> indivTask Cards</h1>
   <h3>f</h3>1


    <h5> {this.filteredVar.taskName}</h5>
    <h6> contractor:
     </h6>
     <h6> start date: {task.startDate}
     </h6>
     <h6> expected completion date: {task.expectedCompDate}
     </h6>
     <h6> contact info: {task.contact}
     </h6>


    </div>
    )
   }


</React.Fragment>
)
}


}