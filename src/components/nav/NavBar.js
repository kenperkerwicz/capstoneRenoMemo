import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Nav.css"


class NavBar extends Component {
  render () {
    return (
      <nav className="navbar-light flex-wrap light-blue p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/homes">Homes</Link>
                    </li>
                    </ul>
                    </nav>
    )
  }

}

export default NavBar