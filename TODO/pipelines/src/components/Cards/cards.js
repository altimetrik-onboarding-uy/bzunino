import React from 'react';
import Styles from './cards.css';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';



class Card extends React.Component {
  constructor(props){
    super(props);

      this.state={
        isShowing: false,
        reShow: false,
        reTask: this.props.task,
        reDec: this.props.description,
        error: false,
      };
    };

    reShowModal = () =>{
      this.setState({ reShow: true });
    }

    changeData = () =>{
      if (this.state.Dec && this.state.Task !== ""){
        return console.log("llegue hasta la funcion");
      }else{
        return this.setState({ error:  true });
      }
    }
    reCloseModal = () =>{ this.setState({ reShow: false });}

  render() {
    console.log("Key de card in column: ", this.props.column);
    console.log("reTasK: ", this.state.reTask);
    console.log("reDec: ", this.state.reDec);
    console.log("error: ", this.props.error);
    return (
      <div className="into-card">
        { this.state.reShow ? 
        <>
          <Modal className="modal" show={this.state.reShow} onHide={this.reCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h2>Task: </h2>
                <input type="text" className="modal-input" value={this.state.reTask} onChange={(event) => {this.setState({reTask: event.target.value});}}/>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Description: </h3>
              <input type="text" className="modal-input2"  value={this.state.reDec} onChange={(event) => {this.setState({reDec: event.target.value});}}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.reCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.changeData}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        :
        null }
          <Button type="button" className="button-card"  variant="primary" onClick={this.reShowModal}>
            <div className="header-card">
              {this.props.task}
            </div>
            <div className="body-card">
              {this.props.description}
            </div>
          </Button>
      </div>
    )
  }
}
export default Card;