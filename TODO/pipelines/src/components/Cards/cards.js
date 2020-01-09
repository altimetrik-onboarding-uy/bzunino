import React from 'react';
import Styles from './cards.css';



class Card extends React.Component {
  constructor(props){
    super(props);

      this.state={
        isShowing: false
      };
    };

  render() {
    console.log(this.state.isShowing);
    return (
      <div className="into-card">
              <button className="button-card">
                {/* Here I need to get the data from the Modal displayed when I press the button. */}</button>
        </div>
    )
  }
}
export default Card;