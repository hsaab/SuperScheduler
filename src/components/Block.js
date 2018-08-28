import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      description: '',
      color: '',
      filled: '',
      day: this.props.day
    };
    this.toggle = this.toggle.bind(this);
  }

  handleChangeTitle(event) {
    event.preventDefault()
    this.setState({
      title: event.target.value });
  }

  handleChangeDesc(event) {
    event.preventDefault()
    this.setState({
      description: event.target.value });
  }

  handleChangeColor(event) {
    event.preventDefault()
    this.setState({
      color: event.target.value });
  }

  handleSubmit(event) {
    const info = Object.values(this.props.info)[0]
    event.preventDefault()
    this.props.addOnClick(info.time, this.props.day, this.state.title, this.state.color, this.state.description);
    this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const info = Object.values(this.props.info)[0];
    return (
      <div className="block">
        {info.filled ? <Button color="red" onClick={this.toggle}>BOOKED</Button> : <Button color="dodgerblue" onClick={this.toggle}>BOOK</Button>}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Appointment</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="title" name="title" id="title" placeholder="Title of appointment." onChange={(event) => this.handleChangeTitle(event)} value={this.state.title}/>
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Input type="text" name="color" id="color" placeholder="Color on calendar" onChange={(event) => this.handleChangeColor(event)} value={this.state.color}/>
            </FormGroup>
            <FormGroup>
              <Label for="title">Description</Label>
              <Input type="textarea" name="text" id="description" placeholder="Describe your appointment." onChange={(event) => this.handleChangeDesc(event)} value={this.state.description}/>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => this.handleSubmit(e)}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Block;
