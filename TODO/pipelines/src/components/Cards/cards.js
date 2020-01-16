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

    reCloseModal = () =>{
      if (this.state.reTask && this.state.reDec !== ""){
        return this.setState({ reShow: false });
      } else{
        return this.setState({ error: true });
      }
    }

  render() {
    console.log("Key de card in column: ", this.props.column);
    console.log("reTasK: ", this.state.reTask);
    console.log("reDec: ", this.state.reDec);
    console.log("error: ", this.props.error);
    return (
      <div className="into-card" key={this.props.id}>
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
            { this.state.error ? <h1 className="error" >One of the field is incomplete</h1> : null }
              <Button variant="secondary" onClick={this.reCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={ () => {this.props.changeData(this.props.id, this.state.reTask, this.state.reDec); this.reCloseModal(); }}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        :
        null }
          <Button type="button" className="button-card"  variant="primary" onClick={this.reShowModal}>
            <div className="header-card">
              {this.state.reTask}
            </div>
            <div className="body-card">
              {this.state.reDec}
            </div>
          </Button>
      </div>
    )
  }
}
export default Card;