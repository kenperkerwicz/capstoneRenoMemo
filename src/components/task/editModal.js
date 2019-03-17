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

      catId: "",
      name: "",
      contact: "",
      expectedCompDate: "",
      homeId: "",
      status: "",
      id: ""
    };

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

  saveEditForm = evt => {

    evt.preventDefault()
    if (this.state.task.name === "")
    { window.alert("Please write something");}
      else {
        const editedTask = {
            task: this.props.task
        }

        // const taskId = this.state.task.id;

        TaskManager.put(editedTask).then(() => this.props.populateData());
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
            value={this.state.task.name}
            onChange={this.handleFieldChange}
          />

          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="email"
                name="name"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.task.name}
              />

              <Label for="compDate">Expected Completion Date</Label>
              <Input
                type="compDate"
                name="compDate"
                onChange={this.handleFieldChange}
                id="compDate"
                value={this.state.task.expectedCompDate}
              />

              <Label for="contact">contact</Label>
              <Input
                type="contact"
                name="contact"
                onChange={this.handleFieldChange}
                id="contact"
                value={this.state.task.contact}
              />

              <Label
                type="catId"
                name="catId"
                id={this.state.task.catId}
                onChange={this.handleFieldChange}
              />
              <Label
                type="homeId"
                name="homeId"
                id={this.state.task.homeId}
                onChange={this.handleFieldChange}
              />
              <Label type="id" name="id" id={this.state.task.id} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveEditForm}>
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
