import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from './components/Header/header';
import Board from './components/Board/board';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
      };
    };

    componentDidMount(){
    }


  render() {
    return (
      <div className="home">
          <Board/>
      </div>
    )
  }
}
export default App;
