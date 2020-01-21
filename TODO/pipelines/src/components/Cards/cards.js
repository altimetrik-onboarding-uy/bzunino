import React from 'react';
import Styles from './cards.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class Card extends React.Component {
  constructor(props){
    super(props);

      this.state={
        reShow: false,
        reTask: this.props.task,
        reDec: this.props.description,
        backTask: this.props.taskbackUp,
        backDec: this.props.descBackUp,
        error: false,
        BackUp: false,
        isOpen: false,
      };
      this.escFunction = this.escFunction.bind(this);
    };

    escFunction(event){
      if(event.keyCode === 27) {
        this.BackUp();
      }
    }
    componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.escFunction, false);
    }

    BackUp = () =>{
      this.setState({ BackUp: true });
      this.setState({ reTask: this.state.backTask});
      this.setState({ reDec: this.state.backDec});
      this.setState({ reShow: false });
      this.setState({ BackUp: false });
    }

    changeData = () =>{
      this.setState({ backTask: this.state.reTask });
      this.setState({ backDec: this.state.reDec });
    }

    closeBackUp = () =>{
      this.setState({ BackUp: false });
    }

    reShowModal = () =>{
      this.setState({ reShow: true });
    }

    reCloseModal = () =>{
      if (this.state.reTask !== ""){
        return this.setState({ reShow: false });
      } else{
        return this.setState({ error: true });
      }
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
              </Modal.Title>
              <button className="closeButton" onClick={this.BackUp}>x</button>
            </Modal.Header>
            <Modal.Body>
              <h3>Description: </h3>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.reDec} onChange={(event) => {this.setState({reDec: event.target.value});}}></textarea>
            </Modal.Body>
            <Modal.Footer>
            { this.state.error ? <h1 className="error" >Task field incomplete</h1> : null }
              <Button variant="secondary" onClick={ () => this.props.delete(this.props.id)}>
                Eliminar
              </Button>
              <Button variant="primary" onClick={ () => { this.changeData(); this.reCloseModal(); this.closeBackUp()}}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        :
        null }
          <Button type="button" className="button-card align-middle"  variant="primary" onClick={this.reShowModal}>
            <div className="body-card">
              { this.state.BackUp ? this.props.task : this.state.reTask }
            </div>
          </Button>
      </div>
    )
  }
}
export default Card;