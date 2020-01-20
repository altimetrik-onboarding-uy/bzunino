import React from 'react';
import './App.css';
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
