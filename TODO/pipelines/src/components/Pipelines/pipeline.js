import React from 'react';
import Styles from './pipeline.css';
import Modal from 'react-bootstrap/Modal';
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
        description: "",
        taskBackup: "",
        descbackup: "",
        error: false,
        id: this.props.id,
        key: 0
      };
    }

    componentDidMount(){
    }

    addCard = () => {
      if (this.state.task !== ""){
        this.setState({ key: this.state.key +1 });
        this.setState(state => {
        const cards = state.cards.concat(<Card descBackUp={this.state.descbackup} taskbackUp={this.state.taskBackup} delete={this.deleteCard} changeData={this.changeData} cards={this.state.cards} task={this.state.task} description={this.state.description} column={this.props.id} key={this.state.key} id={this.state.key}/>);
          return {
            cards
        };
      }, () => {
        this.handleClose();
        this.setState({ taskBackup: this.state.task });
        this.setState({ descbackup: this.state.description });
        this.setState({ task: "" });
        this.setState({ description: "" });
      });
 
      }else{
        this.setState({ error: true });
      }
    };

    deleteCard = (x) =>{
      for (let i = 0; i<this.state.cards.length; i++){
        if(this.state.cards[i].props.id === x){
          const newlist = [].concat(this.state.cards);
          newlist.splice(i, 1);
          this.setState({ cards: newlist });
        }
      }
    }

    handleClose = () => this.setState({ show: false});
    handleShow = () => this.setState({ show: true});
  

  render() {
    console.log("task: ", this.state.task);
    console.log("task back: ", this.state.taskBackup);
    console.log("desc: ", this.state.description);
    console.log("descBak: ", this.state.descbackup);
    console.log("Card ", this.state.cards);

    return (
      <div className="column row col-lg-3 col-md-6 col-8" key={this.props.id} id={this.props.id}>
        <input type="text" className="form-control column-input col-lg-10 col-md-10 col-8"  onBlur={this.onBlur} placeholder="My tasks" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value});}}/>
        <button type="button" className="btn btn-light delete-pipeline col-lg-2 col-md-2 col-3" onClick={(event) =>  this.props.delete(this.props.id)} >X</button>
        <div className="inside-column col-lg-12 col-md-12 col-12">
          {this.state.cards}
          { this.state.show ? 
            <>
              <Modal className="modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title>
                    <h2>Task:</h2>
                    <input className="form-control form-control-lg" type="text" onChange={(event) => {this.setState({task: event.target.value}); this.setState({ taskBackup: event.target.value})}}></input>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3>Description:</h3>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(event) => {this.setState({description: event.target.value}); this.setState({ descbackup: event.target.value})}}></textarea>
                </Modal.Body>
                <Modal.Footer>
                { this.state.error ? <h1 className="error" >Task field incomplete</h1> : null }
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