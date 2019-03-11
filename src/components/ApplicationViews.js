import React, { Component } from "react"
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "./Dropdown"
import HomeList from "./home/HomeList"
import HomeForm from "./home/HomeForm"
import HomeManager from "../modules/HomeManager"
import HomeEditForm from "./home/HomeEditForm"
import HomeTasks from "./home/HomeTasks"
import CategoryDisplay from "./category/CategoryDisplay";

class ApplicationViews extends Component {

state = {
  homes: []
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



  componentDidMount() {

    const newState = {}

    HomeManager.getAll().then().then(homes => newState.homes = homes).then(() => {
      this.setState(newState)})

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
         <Route path="/homes/new" render={(props) => {
          return <HomeForm {...props}
           addHome={this.addHome}
            homes={this.state.homes}
             userId={this.state.userId}
          />
        }} />
        <Route exact
          path="/homes/:homeId(\d+)/edit" render={props => {
            return <HomeEditForm {...props} homees={this.state.homes} updateHome={this.updateHome} getHomeToEdit={this.getHomeToEdit} edit={this.editHome} />

          }}
        />

              <Route exact path="/homes/:homeId(\d+)" render={(props) => {
                    return <HomeTasks {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId = {this.state.userId}/>
                }} />

                <Route exact path="/homes/category" render={(props) => {
                    return <CategoryDisplay
                    // {...props} deleteHome={this.deleteHome} homes={this.state.homes} userId = {this.state.userId}
                    />
                }} />
       </React.Fragment>
    )

  }

}

export default ApplicationViews