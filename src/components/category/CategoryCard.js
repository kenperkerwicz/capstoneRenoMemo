import React, { Component } from "react";


export default class CategoryCard extends Component {


  render () {
    return <div>
      <h5 className="ToDo">To Do:
    </h5>

    <h6> contractor:
    </h6>
    <h6> start date:
    </h6>
    <h6> expected completion date:
    </h6>
    <h6> contact info:
    </h6>
    <br></br>
    <button type="button"
                            className="btn btn-success" onClick={() => {window.alert('hi')}}>edit</button>
    <button type="button"
                            className="btn btn-success"onClick={() => {window.alert('hi')}}>doing</button>
    <button type="button"
                            className="btn btn-success"onClick={() => {window.alert('hi')}}>done</button>

    </div>
  }
}