import React, { Component } from "react"
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "./Dropdown"
import HomeList from "./home/HomeList"
import HomeForm from "./home/HomeForm"
import HomeManager from "../modules/HomeManager"
import HomeEditForm from "./home/HomeEditForm"
import TaskManager from "../modules/TaskManager"
import CategoryManager from "../modules/CategoryManager"
import HomeTasks from "./home/HomeTasks"
import TaskCategoryForm from "./task/TaskForm";
import CategoryList from "./category/CategoryList"
import TaskCategoryList from "./task/TaskCategoryList"
import TaskForm from "./task/TaskForm"
import ModalExample from "./task/editModal"

class ApplicationViews extends Component {

  state = {
    homes: [],
    categories: [],
    tasks: []
  }

  addHome = home =>
    HomeManager.post(home)
      .then(() => HomeManager.getAll())
      .then(homes =>
        this.setState({
          homes: homes
        })
      );

  deleteHome = (id) => {
    return HomeManager.removeAndList(id)
      .then(homes => this.setState({
        homes: homes
      })
      )
  }

  getAllHomesAgain = () => {
    fetch("http://localhost:8088/Homes")
      .then(r => r.json())
      .then(movies => this.setState({ movies: movies }))
  }

  updateHome = (editedHomeObject) => {
    return HomeManager.put(editedHomeObject)
      .then(() => HomeManager.getAll())
      .then(homes => {
        this.setState({
          homes: homes
        })
      });
  };

  getHomeToEdit = (id) => {
    return HomeManager.get(id).then(home => this.setState({
      home: home
    }))
  }

  editHome = (home) => {
    return HomeManager.updateHome(home).then(() => {
      return HomeManager.getAll()
    }).then(homes => this.setState(
      {
        homes: homes
      }
    ))
  }

  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );





  componentDidMount() {

    const newState = {}

    HomeManager.getAll().then(homes => newState.homes = homes).then(() => TaskManager.getAll())
    .then(tasks => newState.tasks = tasks)
    .then(()=> CategoryManager.getAll())
    .then(categories => newState.categories = categories)
    .then(()=> this.setState(newState))

  }
  render() {
    return (


      <React.Fragment>
        <Route exact path="/homes" render={(props) => {
          return <HomeList
          {...props}
          homes={this.state.homes}
          deleteHome={this.deleteHome}
          loadHomes={this.getAllHomes}
          name={this.state.homeName}
          userId={this.state.userId}
          dateofEntry={this.state.dateofEntry}

          />
        }} />

        <Route exact path="/homes/new" render={(props) => {
          return <HomeForm {...props}
            addHome={this.addHome}
            homes={this.state.homes}
            userId={this.state.userId}
          />
        }} />
        <Route exact
          path="/homes/:homeId(\d+)/edit" render={props => {
            return <HomeEditForm {...props} homes={this.state.homes} updateHome={this.updateHome} getHomeToEdit={this.getHomeToEdit} edit={this.editHome} />

          }}
        />

        <Route exact path="/homes/:homeId(\d+)" render={(props) => {
          return <CategoryList
            {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId={this.state.userId}
            categories={this.state.categories}
            tasks={this.state.tasks}
            key={this.state.categories.id}
            />
        }} />
        <Route exact path="/homes/:homeId(\d+)/:categoryId(\d+)" render={(props) => {
          return <TaskCategoryList
          {...props}
          delete={this.deleteHome}
          homes={this.state.homes}
          userId={this.state.userId}
          categories={this.state.categories}
          tasks={this.state.tasks}
          deleteTask = {this.deleteTask}
          // catId={this.state.catId}
          taskName={this.state.taskName}
          contact={this.state.contact}
          key={this.state.id}

        />
        }} />

        <Route exact path="/category/new" render={(props) => {
          return <TaskCategoryForm
            {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId={this.state.userId}
            name= {this.state.name}
          />
        }} />
        <Route exact path="/category" render={(props) => {
          return <CategoryList
            {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId={this.state.userId}
            categories={this.state.categories}
            names={this.state.names}
            key={this.state.categories.id}
          />
        }} />
        {/* <Route exact path="/tasks" render={(props) => {
          return <TaskCategoryList
            {...props} delete={this.deleteHome} homes={this.state.homes} userId={this.state.userId}
            categories={this.state.categories}
            tasks={this.state.tasks}
            deleteTask = {this.deleteTask}
            categoryId={this.state.categoryId}
          taskName={this.state.taskName}
          contact={this.state.contact}
          expectedCompDate= {this.state.tuesday}


          />
        }} /> */}
        <Route exact path="/tasks/new" render={(props) => {
          return <TaskForm {...props}
            addTask={this.addTask}
           tasks={this.state.tasks}
            userId={this.state.userId}
            names={this.state.names}

          />
        }} />

{/* <Route exact path="/tasks/new" render={(props) => {
          return <TaskForm {...props}
            addTask={this.addTask}
           tasks={this.state.tasks}
            userId={this.state.userId}
            names={this.state.names}

          />
        }} /> */}

<Route
          path="/homes/:taskId(\d+)/edit" render={props => {
            return <ModalExample {...props} tasks={this.state.tasks} updateTask={this.updateMovie} getMovieToEdit={this.getMovieToEdit} edit={this.editMovie} />
          }}
        />

      </React.Fragment>
    )

  }

}

export default ApplicationViews

// <HomeTasks {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId = {this.state.userId}
//                     homeId= {this.state.homeId} task={this.state.taskId}
//                     taskName={this.state.taskName}/>