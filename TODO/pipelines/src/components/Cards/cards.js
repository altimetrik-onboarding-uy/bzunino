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
        BackUp: false,
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

    BackUp = () =>{
      this.setState({ BackUp: true });
      this.setState({ reTask: this.props.taskbackUp});
      this.setState({ reDec: this.props.descBackUp});
      this.setState({ reShow: false });
      this.setState({ BackUp: false });
    }

  render() {
    console.log("retask: ", this.state.reTask);
    return (
      <div className="into-card" key={this.props.id}>
        { this.state.reShow ? 
        <>
          <Modal className="modal" show={this.state.reShow} onHide={this.reCloseModal}>
            <Modal.Header>
              <Modal.Title>
                <h2>Task: </h2>
                <input className="form-control form-control-lg" type="text" value={this.state.reTask} onChange={(event) => {this.setState({reTask: event.target.value});}}></input>
                <button className="closeButton" onClick={this.BackUp}></button>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Description: </h3>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.reDec} onChange={(event) => {this.setState({reDec: event.target.value});}}></textarea>
            </Modal.Body>
            <Modal.Footer>
            { this.state.error ? <h1 className="error" >One of the field is incomplete</h1> : null }
              <Button variant="secondary" onClick={ () => this.props.delete(this.props.id)}>
                Eliminar
              </Button>
              <Button variant="primary" onClick={ () => {this.props.changeData(this.props.id, this.state.reTask, this.state.reDec); this.reCloseModal();}}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        :
        null }
          <Button type="button" className="button-card align-middle"  variant="primary" onClick={this.reShowModal}>
            <div className="body-card">
              { this.state.BackUp ? this.props.taskbackUp : this.state.reTask }
              {}
            </div>
          </Button>
      </div>
    )
  }
}
export default Card;