import React, { Component } from "react"
import HomeManager from "../../modules/HomeManager"

export default class HomeEditForm extends Component {
    // Set initial state
    state = {
    home: "",
    id: "",
    dateOfEntry: "",
    homeAddress: "",
    userId: parseInt(sessionStorage.getItem("credentials"))
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingHome = evt => {
      evt.preventDefault()

      if (this.state.homeName === "") {
        window.alert("Please select a Home");
      } else {
        const editedHome = {

          id: this.props.match.params.homeId,
          home: this.state.home,
          dateOfEntry: this.state.dateOfEntry,
          homeAddress: this.state.homeAddress,
          userId: parseInt(sessionStorage.getItem("credentials")) };

    this.props.updateHome(editedHome)
    .then(() => this.props.history.push("/homes"))

    }
  }

    componentDidMount() {

     HomeManager.get(this.props.match.params.homeId)
      .then(home => {
        console.log(home)
        this.setState({
          // movieName: movie.movieName,
          // leadActor: movie.leadActor,
          // userId: movie.userId,
          // yearReleased: movie.yearReleased,
          // id: movie.id,
          // dateofEntry: movie.dateofEntry
          id: home.homeId,
          home: home.home,
          dateOfEntry: home.dateOfEntry,
          homeAddress: home.homeAddress,
          userId: parseInt(sessionStorage.getItem("credentials"))

        });
      });

    }


    render() {
      return (
        <React.Fragment>
          <form className="homeForm">
            <div className="form-group">
              <label htmlFor="homeAddress">home address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="homeAddress"
                value = {this.state.homeAddress}
              />
            </div>




            <button
              type="submit"
              onClick={this.updateExistingHome}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}