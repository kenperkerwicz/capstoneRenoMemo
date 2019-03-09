import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>


          <DropdownItem divider />
          <DropdownItem onClick={() => window.alert('hi')}>West Nashville</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => window.alert('hi')}>Madison</DropdownItem>


        </DropdownMenu>
      </Dropdown>
    );
  }
}