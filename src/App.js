import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor(props){
  super(props);
  this.state =  { 
      persons: [
      { name: 'Vstol', age: 32},
      { name: 'Cody', age: 29 },
      { name: 'Brian', age: 25 }
    ]
  }
}

  render() {
    return (
      <div className="App">
        <Child name1={this.state.persons[0].name} />
      </div>
    );
  }

}


export default App;
