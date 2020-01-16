import React from 'react';
import Styles from './board.css';
import Pipeline from '../Pipelines/pipeline';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';
import Header from '../Header/header';


class Board extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        pipelines: [],
        key: 0,
        board_name: "",
        color: "rgb(207, 207, 207)",
        showBackground: false,
        showColors: false,
        imagen: "",
      };
    };

    componentDidMount(){
    }

    addPipeline = () => {
      this.setState({ key: this.state.key + 1 });
      this.setState(state => {
        const pipelines = state.pipelines.concat(<Pipeline delete={this.deletePipeline} id={this.state.key} key={this.state.key} />);
        return {
          pipelines
        };
      });
    };

    deletePipeline = (x) =>{
      for (let i = 0; i<this.state.pipelines.length; i++){
        if(this.state.pipelines[i].props.id === x){
          const newlist = [].concat(this.state.pipelines);
          newlist.splice(i, 1);
          this.setState({ pipelines: newlist });
        }
      }
    }

    handleClose = () => this.setState({ showBackground: false});
    handleShow = () => this.setState({ showBackground: true});

    handleClose2 = () => this.setState({ showColors: false});
    handleShow2 = () => this.setState({ showColors: true});

    setImagen = () =>{
      this.setState({imagen: "https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });
    }

    setImagen2 = () =>{
      this.setState({imagen: "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" });
    }

    setImagen3 = () =>{
      this.setState({imagen: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });
    }

    setImagen4 = () =>{
      this.setState({imagen: "https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });
    }

    setColor = () =>{
      this.setState({ color: "red"});
      this.setState({ imagen: ""});
    }

    setColor2 = () =>{
      this.setState({ color: "blue"});
      this.setState({ imagen: ""});
    }

    setColor3 = () =>{
      this.setState({ color: "yellow"});
      this.setState({ imagen: ""});
    }

    setColor4 = () =>{
      this.setState({ color: "green"});
      this.setState({ imagen: ""});
    }

    setColor5 = () =>{
      this.setState({ color: "pink"});
      this.setState({ imagen: ""});
    }

    setColor6 = () =>{
      this.setState({ color: "grey"});
      this.setState({ imagen: ""});
    }

    setColor7 = () =>{
      this.setState({ color: "purple"});
      this.setState({ imagen: ""});
    }

    setColor8 = () =>{
      this.setState({ color: "black"});
      this.setState({ imagen: ""});
    }

    setColor9 = () =>{
      this.setState({ color: "white"});
      this.setState({ imagen: ""});
    }

    setColor10 = () =>{
      this.setState({ color: "orange"});
      this.setState({ imagen: ""});
    }

  render() {
    return (
      <div className="main" style={{ backgroundColor:`${this.state.color}`, backgroundImage:`url(${this.state.imagen})`}}>
        <Header/>
        <div className="board inputs-board row">
                <input type="text" className="form-control board-input col-7 col-md-5 col-lg-5 " placeholder="My board" value={this.state.board_name} onChange={(event) => {this.setState({board_name: event.target.value});}}/>
                <div className="dropdown show">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Button className="dropdown-item" onClick={this.handleShow}>Choose one background</Button>
                    <Button className="dropdown-item" onClick={this.handleShow2}>Choose one color</Button>
                  </div>
                </div>
            { this.state.showBackground ? 
              <>
                <Modal className="modal" show={this.state.showBackground} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h2>Choose one theme: </h2>
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <button className="btn btn-primary image_button background_image" type="submit" onClick={this.setImagen}></button>
                  <button className="btn btn-primary image_button background_image2" type="submit" onClick={this.setImagen2}></button>
                  <button className="btn btn-primary image_button background_image3" type="submit" onClick={this.setImagen3}></button>
                  <button className="btn btn-primary image_button background_image4" type="submit" onClick={this.setImagen4}></button>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            : null}
          { this.state.showColors ? 
            <>
              <Modal className="modal" show={this.state.showColors} onHide={this.handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h2>Choose one color: </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "red" }} onClick={this.setColor} ></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "blue" }} onClick={this.setColor2}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "yellow" }} onClick={this.setColor3}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "green" }} onClick={this.setColor4}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "pink" }} onClick={this.setColor5}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "grey" }} onClick={this.setColor6}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "purple" }} onClick={this.setColor7}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "black" }} onClick={this.setColor8}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "white" }} onClick={this.setColor9}></button>
                  <button type="button" className="btn btn-primary setColor" style={{ backgroundColor: "orange" }} onClick={this.setColor10}></button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          : null}
            <div className="pipeline-board">
              <form className="form-pipelines">
                {this.state.pipelines}
                <button type="button" className="btn btn-light pipeline col-lg-2 col-md-3 col-6" onClick={this.addPipeline}>Add one pipeline</button>  
              </form>
            </div>
        </div>
      </div>
    )
  }
}
export default Board;