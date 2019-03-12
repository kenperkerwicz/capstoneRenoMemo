import React, { Component } from "react";
import CategoryCard from "./CategoryCard"


export default class CategoryList extends Component {





  render () {
    return <div>

{
          // this.props.homes.sort((a,b) => {return b.dateofEntry - a.dateofEntry})


          this.props
          .map(category =>
            <CategoryCard key={home.id} home={home} {...this.props} userId={home.userId}/>
        )
        }

    </div>
  }
}