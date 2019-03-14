import React, { Component } from "react";
import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"



export default class CategoryList extends Component {





  render () {
    return <React.Fragment key={this.props.categories}>

  {  this.props.categories.map(cat =>
<div>
<Link  to={`/homes/${this.props.match.params.homeId}/${cat.id}`}>{cat.categoryName}</Link>
</div>

  )
        // <div>
        //   <Link className="nav-link" to={`/homes/${this.props.home.id}`}
        // <h1 onClick={() => this.props.history.push("/tasks/")}>flooring</h1>
        // <h1>drywall</h1>
        // <h1>roofing</h1>
        // <h1>tile</h1>
        // </div>


        }

        </React.Fragment>
  }
}