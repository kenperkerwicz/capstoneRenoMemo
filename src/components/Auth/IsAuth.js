import React, { Component } from "react"
import Login from "./Login"
import UserAccessLayer from "../UserAcessLayer"

class IsAuth extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
          <Login {...this.props} />
        )}
      </React.Fragment>
    )
  }
}

export default IsAuth
