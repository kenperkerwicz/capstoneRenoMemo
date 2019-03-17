import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup, Label, Input
} from 'reactstrap';
import TaskManager from '../../modules/TaskManager';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      task: this.props.task
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // this.setState(prevState => ({
    //   modal: !prevState.modal
    // }));
    this.props.showModal()
  }

  saveEditForm = () => {

   const taskId = this.state.task.id

    TaskManager.put(taskId).then(() => this.props.populateData())

  }

  render() {
    return (
      <div>

        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.props.show} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.task.name}</ModalHeader>

          <ModalBody>
          <FormGroup>
          <Label for="name">Name</Label>
          <Input type="email" name="name" id="name" placeholder={this.state.task.name} />
          <Label for="compDate">Expected Completion Date</Label>
          <Input type="compDate" name="compDate" id="compDate" placeholder={this.state.task.expectedCompDate} />
          <Label for="contact">contact</Label>
          <Input type="contact" name="contact" id="contact" placeholder={this.state.task.contact} />
          <Label type="catId" name="catId" id={this.state.task.catId}></Label>
          <Label type="homeId" name="homeId" id={this.state.task.homeId}></Label>
          <Label type="id" name="id" id={this.state.task.id}></Label>

        </FormGroup>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveEditForm}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;