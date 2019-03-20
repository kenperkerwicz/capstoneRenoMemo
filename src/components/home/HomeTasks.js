
import React, { Component } from "react"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CategoryDisplay from "../category/CategoryForm"
import CategoryList from "../category/CategoryList"
import TaskManager from "../../modules/TaskManager"


export default class HomeTasks extends Component {

  state = {
    taskId: "",
    id: "",
    categoryId: "",
    taskName: "",
    contact: "",
    expectedCompDate: "",
    homeId: "",
    status: ""


  }

  componentDidMount() {
    TaskManager.getTasks(this.props.match.params.taskId).then(task => {
      console.log(task)
      this.setState({
        taskId: task.taskId,
        categoryId: 1,
        taskName: task.taskName,
        contact: task.contact,
        expectedCompDate: task.expectedCompDate,
        homeId: parseInt(task.homeId),
        statusId: this.statusId
      });
    });
  }

  render() {
    /*
        Using the route parameter, find the animal that the
        user clicked on by looking at the `this.props.animals`
        collection that was passed down from ApplicationViews
    */
    const home = this.props.homes.find(h => h.id === parseInt(this.props.match.params.homeId)) || {}

    return (
      <section
       className="home"
      >
        <div key={home.id}
         className="card"
         >
          <div
          className="card-body"
          >
            <h4 className="card-title">
              {home.homeAddress}
            </h4>
            <h6 className="card-title">{home.name}</h6>
            <a href="#"
              onClick={() => this.props.deleteHome(home.id)
                .then(() => this.props.history.push("/homes"))}

              className="card-link"
              >Delete</a>


           
          </div>
        </div>
      </section>
    )
  }
}
