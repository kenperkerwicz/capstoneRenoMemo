import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"
// import renovation from "../Auth/renovation.jpg"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (

      <form className="loginForm"
      id="loginBackground">

      {/* <img src={renovation} className="icon--reno" /> */}

        <h1 className="h1 mb-3 font-weight-bold " id="Welcome">Welcome to RenoMemo.</h1>
       <h3 className="h3 mb-3 font-weight-bold"> </h3>
        <label htmlFor="inputUsername"
        ></label>
        <input
        className="inputUsername"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`Username`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword"
         ></label>
        <input
        className="inputPassword"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`Password`}
          required=""
        />
        <button type="submit"
        className="btn btn-success"
        id="loginButtonOne"
        onClick={this.handleLogin}>
          Sign in
        </button>
        <button type="submit"
        className="btn btn-success"
        id="loginButtonTwo"
        onClick={this.handleRegister}>
          Register
        </button>
      </form>
    )
  }
}