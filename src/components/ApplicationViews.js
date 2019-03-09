import React, { Component } from "react"
import { Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Dropdown from "./Dropdown"

class ApplicationViews extends Component {
  render() {
    return (
       <React.Fragment>
         <h1>Reno Memo</h1>
         <h3>please select a home</h3>
        <Dropdown />

       </React.Fragment>
    )

  }

}

export default ApplicationViews