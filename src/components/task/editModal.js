import React from "react";
import {
  Button, Modal, ModalHeader,ModalBody, ModalFooter,
 FormGroup, Label, Input
} from "reactstrap";
import TaskManager from "../../modules/TaskManager";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      task: this.props.task,

      catId: this.props.task.catId,
      name: this.props.task.name,
     contact: this.props.task.contact,
     expectedCompDate: this.props.task.expectedCompDate,
     homeId: this.props.task.homeId,
      status: this.props.task.status,
      id: this.props.task.id,
      cost: this.props.task.cost
    };

    // this.handleFieldChange = this.handleFieldChange.bind(this);
  this.saveEditForm = this.saveEditForm.bind(this);

this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.showModal();
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


componentDidMount =() => {
this.setState(() => {
return {task: this.props.task}
})}


  saveEditForm = evt => {

    evt.preventDefault()
    if (this.state.name === "")
    { window.alert("Please write something");}
      else {
        const editedTask = {

           catId: this.state.catId,
           name: this.state.name,
          contact: this.state.contact,
          expectedCompDate: this.state.expectedCompDate,
          homeId: this.state.homeId,
          status: this.state.status,
          id: this.state.id,
          cost: this.state.cost
        }

         TaskManager.put(editedTask).then(() => this.props.populateData());
         this.props.showModal();
        this.props.clearCosts();
      }
 // code above needs to push history
  };




  render() {
    return (
      <div>
        <Modal

          isOpen={this.props.show}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            toggle={this.toggle}
            value={this.state.name}
            onChange={this.handleFieldChange}
            className="modalTop"
          />

          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />

              <Label for="compDate">Expected Completion Date</Label>
              <Input
                type="text"
                name="compDate"
                onChange={this.handleFieldChange}
                id="expectedCompDate"
                value={this.state.expectedCompDate}
              />

              <Label for="contact">contact</Label>
              <Input
                type="text"
                name="contact"
                onChange={this.handleFieldChange}
                id="contact"
                value={this.state.contact}
              />
              <Label for="cost">cost</Label>
              <Input
                type="text"
                name="cost"
                onChange={this.handleFieldChange}
                id="cost"
                value={this.state.cost}
              />

              <Label
                type="text"
                name="catId"
                id={this.state.task.catId}
                onChange={this.handleFieldChange}
              />
              <Label
                type="text"
                name="homeId"
                id={this.state.homeId}
                onChange={this.handleFieldChange}
              />
              <Label type="id" name="id" id={this.state.id} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" className="SaveEditButton" onClick={this.saveEditForm}>
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
