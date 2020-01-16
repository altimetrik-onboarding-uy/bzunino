import React from 'react';
import Styles from './header.css';


class Header extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        board_name: ""
      };
    };

    componentDidMount(){
    }


  render() {
    return (
    <nav className="navbar row">
      <img src={require('../../assets/trello.png')} className="logo" alt="logo"/>
      <h1 className="header_title" >Pipelines</h1>
    </nav>
    )
  }
}
export default Header;