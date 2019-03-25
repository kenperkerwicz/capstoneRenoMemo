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
<h1 className="categories">Categories.</h1>
<div className="catButtonDiv">
<button type="button"
                  id="AddCatButton"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/categoryList/new")}
                          }>
                      add a new category.
                  </button>
                  </div>
<Row className="entireCatList">

  {  this.props.categories.map(cat =>

      <Col sm="4" >
<Card width="10%"
className="individualCats">

<CardBody>

<CardImg
className="rounded" sm="4"
src={cat.img}


/>
<Link
 key={cat.id} className="catName" to={`/homes/${this.props.match.params.homeId}/${cat.id}`}>
 <h3 className="catNameEntry">{cat.categoryName}</h3>
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