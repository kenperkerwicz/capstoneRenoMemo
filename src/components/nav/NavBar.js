import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"


class NavBar extends Component {
  render () {
    return (
      <nav className="navbar-flex-wrap p-0 shadow" id="navButton" >
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" id="linkId" to="/homes">Homes</Link>
                    </li>

                    </ul>
                    </nav>
    )
  }

}

export default NavBar