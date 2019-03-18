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

      // catId: "",
      // name: "",
      // contact: "",
      // expectedCompDate: "",
      // homeId: "",
      // status: "",
      // id: ""
    };

    console.log(this.state.task)

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

  // componentDidMount(){
  //   TaskManager.getTasks().then(task => {
  //     this.setState({
  //       catId: task.catId,
  //     name: task.name,
  //     contact: task.contact,
  //     expectedCompDate: task.expectedCompDate,
  //     homeId: task.homeId,
  //     status: task.status,
  //     id: task.id
  //     })
  //   })
  // }





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
                type="text"
                name="name"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.task.name}
              />

              <Label for="compDate">Expected Completion Date</Label>
              <Input
                type="text"
                name="compDate"
                onChange={this.handleFieldChange}
                id=" expectedCompDate"
                value={this.state.task.expectedCompDate}
              />

              <Label for="contact">contact</Label>
              <Input
                type="text"
                name="contact"
                onChange={this.handleFieldChange}
                id="contact"
                value={this.state.task.contact}
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
