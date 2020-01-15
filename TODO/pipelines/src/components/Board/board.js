import React from 'react';
import Styles from './board.css';
import Pipeline from '../Pipelines/pipeline';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';


class Board extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        pipelines: [],
        key: 0,
        board_name: "",
        color: "white",
      };
    };

    componentDidMount(){
    }

    addPipeline = () => {
      console.log("KEY: ",this.state.key);
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
          console.log(x);
          console.log("dentro");
          const newlist = [].concat(this.state.pipelines);
          newlist.splice(i, 1);
          this.setState({ pipelines: newlist });
          console.log("array: ", newlist);
        }
        console.log("fuera");
      }
    }

  render() {
    console.log("name: ", this.state.board_name);
    console.log("pipelines: ", this.state.pipelines);
    return (
      <div className="board"  style={{ backgroundColor:`${this.state.color}` }}>
          <div className="inputs-board row" style={{ backgroundColor:`${this.state.color}` }}>
              <input type="text" className="form-control board-input col-6 col-md-3 col-lg-3 " placeholder="My board" value={this.state.board_name} onChange={(event) => {this.setState({board_name: event.target.value});}}/>
              <input type="text" className="form-control board-input2 col-6 col-md-4 ofsset-md-1 col-lg-4 offset-1"  placeholder="Change the color" onChange={(event) => {this.setState({color: event.target.value});}}/>
          </div>
          <div className="pipeline-board">
            <form className="form-pipelines">
              {this.state.pipelines}
              <button type="button" className="btn btn-light pipeline col-lg-2 col-md-3 col-5" onClick={this.addPipeline}>Add one pipeline</button>  
            </form>
          </div>
      </div>
    )
  }
}
export default Board;