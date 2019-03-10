
import React, { Component } from "react"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class HomeTasks extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    /*
        Using the route parameter, find the animal that the
        user clicked on by looking at the `this.props.animals`
        collection that was passed down from ApplicationViews
    */
    const home = this.props.homes.find(h => h.id === parseInt(this.props.match.params.homeId)) || {}

    return (
      <section className="home">
        <div key={home.id} className="card">
          <div className="card-body">
            <h4 className="card-title">

              {home.homeAddress}


            </h4>
            <h6 className="card-title">{home.name}</h6>
            <a href="#"
              onClick={() => this.props.deleteHome(home.id)
                .then(() => this.props.history.push("/homes"))}
              className="card-link">Delete</a>


             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>


          <DropdownItem divider />
          <DropdownItem onClick={() => {console.log('hello')} }>flooring</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => window.alert('hi')}>roofing</DropdownItem>


        </DropdownMenu>
      </Dropdown>
          </div>
        </div>
      </section>
    )
  }
}
