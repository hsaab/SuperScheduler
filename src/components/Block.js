import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: ' ',
      description: ' ',
      color: ' ',
      filled: false,
      title: this.props.title
    };
    this.toggle = this.toggle.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   this.setState({
  //     title: NextProps.title
  //   })
  // }
  //
  // shouldComponentUpdate(newProps, newState) {
  //   if(this.state ==! newState) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   this.setState(nextState)
  // }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value });
  }

  handleChangeDesc(event) {
    this.setState({
      description: event.target.value });
  }

  handleChangeColor(event) {
    this.setState({
      color: event.target.value });
  }

  handleSubmit() {
    this.props.addOnClick(this.props.time, this.props.day, this.state.title, this.state.color, this.state.description);
    this.setState({
      title: ' ',
      description: ' ',
      color: "#222",
      modal: !this.state.modal,
      filled: true
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="block">
        {this.state.filled ? <div className="filled">BOOKED</div> : <Button color="dodgerblue" onClick={this.toggle}>BOOK</Button>}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Appointment</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="title" name="title" id="title" placeholder="Title of appointment." onChange={(event) => this.handleChangeTitle(event)} value={this.state.title} />
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Input type="text" name="color" id="color" placeholder="Color on calendar" onChange={(event) => this.handleChangeColor(event)} value={this.state.color} />
            </FormGroup>
            <FormGroup>
              <Label for="title">Description</Label>
              <Input type="textarea" name="text" id="description" placeholder="Describe your appointment." onChange={(event) => this.handleChangeDesc(event)} value={this.state.description} />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleSubmit()}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Block;
