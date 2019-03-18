import React, { Component } from "react";


export default class HomeForm extends Component {
  // Setting the initial state
  state = {
    home: "",
    id: "",
    dateOfEntry: "",
    userId: "",
    homeAddress: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating home  object, and
        invoking the function reference passed from parent component
     */
  constructNewHome = evt => {
    evt.preventDefault();
    if (this.state.homeAddress === "") {
      window.alert("Please select a home");
    } else {
      const home = {
        userId:parseInt(sessionStorage.getItem('credentials')),
        id: this.state.id,
        homeAddress: this.state.homeAddress,
        dateOfEntry:  Math.floor(Date.now() / 1000)


      };

      // Create the home and redirect user to the home list
      this.props
        .addHome(home)
        .then(() => this.props.history.push("/homes"));
    }
  };

  render() {
    return (
      <React.Fragment>

       
        {this.state.dateOfEntry}
        <form className="homeAddress">
          <div className="form-group">
            <label htmlFor="homeAddress">home address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="homeAddress"
              placeholder="number street city state zip"
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="year released">Year Released</label> */}



          </div>
          <button
            type="submit"
            onClick={this.constructNewHome}
            className="btn btn-primary"
          >
            Save Home
          </button>
        </form>
      </React.Fragment>
    );
  }
}