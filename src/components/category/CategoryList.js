import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import CategoryCard from "./CategoryCard"
import "./category.css"


export default class CategoryList extends Component {





  render () {
    let user = Number(sessionStorage.getItem("credentials"))
    return <React.Fragment >

<button type="button"
                  id="editButton"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/categoryList/new")}
                          }>
                      add a new category.
                  </button>

<div className="entireCatList">
  {  this.props.categories.map(cat =>
<div className="individualCats" >
{/* // {<img src={cat.img} />} */}
<Link
 key={cat.id}  to={`/homes/${this.props.match.params.homeId}/${cat.id}`}>{cat.categoryName}</Link>
</div>
) }
</div>

          {/* {this.props.categories.filter(mv => mv.userId === user)
          .map(category =>
            <CategoryCard key={category.id} category={category} {...this.props} categoryName={category}/>
        )} */}


        </React.Fragment>
  }
}