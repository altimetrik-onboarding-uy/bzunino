import React from 'react';
import Styles from './column.css';
import Card from '../Cards/cards';
import Modales from '../Modal/modal';

class Column extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        column_name: "",
        cards: [],
        key: 0,
        isShowing: false
      };
    };

    componentDidMount(){
    }

    addPipeline = () => {
      this.setState({ key: this.state.key +1 });
      this.setState(state => {
      const cards = state.cards.concat(<Card colum={this.props.id} key={this.state.key} id={this.state.key}/>);

        return {
          cards
        };
      });
        // create an array that will show the quantity of components. 
    };

    deletePipeline = (array, id) =>{
      for( var i = 0; i < array.length; i++){ 
        if ( array[i] === id) {
          array.splice(i, -1);
          i--; 
        }
        
     console.log("en delete: ", this.props.array);
     }
    }

    openModalHandler = () => {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }

  render() {
    console.log("key de colum: ", this.props.id);
    console.log("Columns in column: ", this.props.array);
    return (
        <div className="column row">
            <input type="text" className="form-control column-input col-lg-10 col-md-10 col-10"  onBlur={this.onBlur} placeholder="My tasks" value={this.state.column_name} onChange={(event) => {this.setState({column_name: event.target.value});}}/>
            <button type="button" className="btn btn-light delete-pipeline col-lg-2 col-md-2 col-2" onClick={this.deletePipeline(this.props.array, this.props.id)} > X </button>
            <div className="inside-column">
                {this.state.cards}
                { this.state.isShowing ? <Modales/> : null }
              <button type="button" className="btn btn-light add-cards col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-10 ofsset-1" onClick={this.openModalHandler} >Add card</button>
            </div>
        </div>
    )
  }
}
export default Column;