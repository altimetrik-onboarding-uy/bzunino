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
    }

    componentDidMount(){
    }
    
    addPipeline = () => {
      console.log("KEY: ",this.state.key);
      this.setState({ key: this.state.key + 1 });
      this.setState(state => {
      const pipelines = state.pipelines.concat(<Column clickDelete={this.ClickDelete} delete={this.deletePipeline} array={this.state.pipelines} key={this.state.key} id={this.state.key}/>);
        return {
          pipelines
        };
      },() => {  });
    };

    ClickDelete = (key) =>{
      this.deletePipeline(key);
      console.log(key);
    }

    deletePipeline = (x) =>{
      const newlist = [].concat(this.state.pipelines); // Clone array with concat or slice(0)
      newlist.splice(x,1);
      this.setState({ pipelines: newlist });
    }


  render() {
    console.log("pipelines: ", this.state.pipelines);
    return (
      <form className="form-pipelines"> 
            {this.state.pipelines}
          <button type="button" className="btn btn-light pipeline col-lg-2 col-md-3 col-5" onClick={this.addPipeline}>Add one pipeline</button>        
      </form>
    )
  }
}
export default Pipeline;