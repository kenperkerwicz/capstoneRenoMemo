import React, { Component } from "react";
// import CategoryCard from "./CategoryCard"
import { Link } from "react-router-dom"
import CategoryCard from "./CategoryCard"
import "./category.css"
import {Card, CardDeck,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


// import download1 from "./output-onlinepngtools--RESIZED.png"


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
<h3 className="categories">Categories</h3>
<Row className="entireCatList">
  {  this.props.categories.map(cat =>

      <Col sm="4" >
<Card width="10%"
className="individualCats"

>

<CardBody>
{/* <div
>
</div> */}
<CardImg  className="col-xs-3 col-sm-1 rounded" src={cat.img}/>
<Link
 key={cat.id} className="catName" to={`/homes/${this.props.match.params.homeId}/${cat.id}`}>
 <h3>{cat.categoryName}</h3>
 </Link></CardBody>
</Card>
</Col>

) }
</Row>

          {/* {this.props.categories.filter(mv => mv.userId === user)
          .map(category =>
            <CategoryCard key={category.id} category={category} {...this.props} categoryName={category}/>
        )} */}


        </React.Fragment>
  }
}