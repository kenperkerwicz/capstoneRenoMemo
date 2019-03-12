import React, { Component } from "react";
import CategoryCard from "./CategoryCard"

export default class CategoryList extends Component {


  render () {
    return <React.Fragment>
      <button
            type="submit"
            className= "addToDoButton"
            onClick={() => {
              this.props.history.push("/homes/category/new")}
          }>
            add to task
          </button>

     {/* {<CategoryCard />} */}

    </React.Fragment>
  }
}