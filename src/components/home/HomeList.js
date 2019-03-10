import React, { Component } from 'react'
import { Link } from "react-router-dom";
 import HomeCard from "./HomeCard";
 import './home.css'

export default class HomeList extends Component {
  render () {
    let user = Number(sessionStorage.getItem("credentials"))
      return (
          <React.Fragment>
              <div className="HomeButton">
                  <button type="button"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/homes/new")}
                          }>
                      Add a new home.
                  </button>

              </div>
      <section className="homes">

        {
          // this.props.homes.sort((a,b) => {return b.dateofEntry - a.dateofEntry})


          this.props.homes
          .map(home =>
            <HomeCard key={home.id} home={home} {...this.props} userId={home.userId}/>
        )
        }
      </section>
      </React.Fragment>
    )
  }
}
