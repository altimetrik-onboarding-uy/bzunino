import React from 'react';
import Styles from './board.css';
import Pipeline from '../Pipelines/pipeline';


class Board extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        board_name: "",
        color: "white"
      };
    };

    componentDidMount(){
    }


  render() {
    console.log("name: ", this.state.board_name);
    return (
        <div className="board"  style={{ backgroundColor:`${this.state.color}` }}>
            <div className="inputs-board row" style={{ backgroundColor:`${this.state.color}` }}>
                <input type="text" className="form-control board-input col-12  col-md-4 col-lg-3 " placeholder="My board" value={this.state.board_name} onChange={(event) => {this.setState({board_name: event.target.value});}}/>
                <input type="text" className="form-control board-input2 col-12  col-md-4 ofsset-md-1 col-lg-4 offset-1"  placeholder="Change the color" onChange={(event) => {this.setState({color: event.target.value});}}/>
            </div>
            <div className="pipeline-board">
              <Pipeline x={this.state.board_name}/>
            </div>
        </div>
    )
  }
}
export default Board;