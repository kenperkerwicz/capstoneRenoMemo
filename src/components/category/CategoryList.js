import React, { Component } from "react";
import CategoryCard from "./CategoryCard"


export default class CategoryList extends Component {





  render () {
    return <React.Fragment>

  {  // this.props.homes.sort((a,b) => {return b.dateofEntry - a.dateofEntry})


        //   this.props.homes
        //   .map(home =>
        //    <CategoryCard key={home.id} home={home} {...this.props} userId={home.userId}/>
        //  )
        <div>
        <h1 onClick={() => this.props.history.push("/tasks/")}>flooring</h1>
        <h1>drywall</h1>
        <h1>roofing</h1>
        <h1>tile</h1>
        </div>


        }

        </React.Fragment>
  }
}