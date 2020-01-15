import React from 'react';
import Styles from './pipeline.css';
import Column from '../Columns/column';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';
import Card from '../Cards/cards';


class Pipeline extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        cards: [],
        name: "",
        show: false,
        task: "",
        decription: "",
        error: false,
        id: this.props.id
      };
    }

    componentDidMount(){
    }

    addCard = () => {
      if (this.state.task && this.state.decription !== ""){
        this.setState({ key: this.state.key +1 });
        this.setState(state => {
        const cards = state.cards.concat(<Card cards={this.state.cards} task={this.state.task} description={this.state.decription} column={this.props.id} key={this.state.key} id={this.state.key}/>);
        this.handleClose();
        this.setState({ task: "" });
        this.setState({ description: "" });
          return {
            cards
        };
      });
      }else{
        this.setState({ error: true });
        console.log("Vacio: ",this.state.error);
      }
    };

    handleClose = () => this.setState({ show: false});
    handleShow = () => this.setState({ show: true});
  

  render() {
    return (
        <div className="column row" key={this.props.id} id={this.props.id}>
          <input type="text" className="form-control column-input col-lg-10 col-md-10 col-8"  onBlur={this.onBlur} placeholder="My tasks" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value});}}/>
          <button type="button" className="btn btn-light delete-pipeline col-lg-2 col-md-2 col-3" onClick={(event) =>  this.props.delete(this.props.id)} >X</button>
          <div className="inside-column col-lg-12 col-md-12 col-12">
              {this.state.cards}
              { this.state.show ? 
          <>
            <Modal className="modal" show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h2>Task: </h2>
                  <input type="text" className="modal-input" onChange={(event) => {this.setState({task: event.target.value});}}/>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Description: </h3>
                <input type="text" className="modal-input2" onChange={(event) => {this.setState({decription: event.target.value});}}/>
              </Modal.Body>
              <Modal.Footer>
              { this.state.error ? <h1 className="error" >One of the field is incomplete</h1> : null }
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.addCard}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
            : null }
            <Button className="add-cards col-lg-8 col-md-10 col-10" variant="primary" onClick={this.handleShow}>
                  Add card
            </Button>
          </div>
        </div>
    )
  }
}
export default Pipeline;