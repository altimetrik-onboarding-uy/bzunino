import React from 'react';
import Styles from './pipeline.css';
import Column from '../Columns/column';

class Pipeline extends React.Component {
  constructor(props){
    super(props);
    
      this.state={
        pipelines: [],
        key: 0
      };
    };

    componentDidMount(){
    }

    
    addPipeline = () => {
      setTimeout(() => {
        console.log("KEY:",this.state.key);
      this.setState({ key: this.state.key + 1 });
      this.setState(state => {
        const pipelines = state.pipelines.concat(<Column array={this.state.pipelines} key={this.state.key} id={this.state.key}/>);

        return {
          pipelines
        };
      });
      }, 2000);
        // create an array that will show the quantity of components. 
    };


  render() {
    console.log("columns in pip:", this.state.pipelines);
    return (
        <form className="form-pipelines"> 
             {this.state.pipelines}
            <button type="button" className="btn btn-light pipeline col-lg-2 col-md-3 col-11" onClick={this.addPipeline} >Add one pipeline</button>        
        </form>
    )
  }
}
export default Pipeline;