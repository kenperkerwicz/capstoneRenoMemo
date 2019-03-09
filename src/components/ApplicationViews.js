import React, { Component } from "react"
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "./Dropdown"
import HomeList from "./home/HomeList"
import HomeForm from "./home/HomeForm"
import HomeManager from "../modules/HomeManager"
import HomeEditForm from "./home/HomeEditForm"

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


  componentDidMount() {

  }
  render() {
    return (
       <React.Fragment>
      <Route exact path="/homes" render={(props) => {
          return <HomeList
          {...props}
            // homes={this.state.homes}
            // deleteHome={this.deleteHome}
            // loadHomes={this.getAllHomes}
            // name={this.state.homeName}
            // userId={this.state.userId}
            // dateofEntry={this.state.dateofEntry}

          />
        }} />
         <Route path="/homes/new" render={(props) => {
          return <HomeForm {...props}
           addHome={this.addHome}
            homes={this.state.homes}
             userId={this.state.userId}
          />
        }} />
        <Route
          path="/homes/:homeId(\d+)/edit" render={props => {
            return <HomeEditForm {...props} homees={this.state.homes} updateHome={this.updateHomee} getHomeToEdit={this.getHomeToEdit} edit={this.editHome} />
          }}
        />
       </React.Fragment>
    )

  }

}

export default ApplicationViews