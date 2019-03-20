import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"


class NavBar extends Component {
  render () {


    return (

      <nav className="navbar-flex-wrap p-0 shadow" id="navButton">
                <section className="nav nav-pills">
                    <div className="nav-item" id="NavId">
                        <Link className="nav-link" id="linkId" to="/homes">Homes</Link>
                        <Link className="nav-link" id="linkId" to="/homes/10">Categories</Link>
                        
                    </div>
                    </section>
                    </nav>

    )
  }

}

export default NavBar