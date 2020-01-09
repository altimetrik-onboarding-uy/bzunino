import React from 'react';
import './modal.css';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';

class Modales extends React.Component {
    constructor(props){
      super(props);
  
        this.state={
            show: false,
            setShow: false
        };
      };

        handleClose = () => this.setState({ show: false});
        handleShow = () => this.setState({ show: true});

  
    render() {
      return (
        <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      )
    }
  }
  export default Modales;