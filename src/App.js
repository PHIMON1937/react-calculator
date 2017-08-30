import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './calculator/cal';
class App extends Component {

  constructor(){
    super();
    this.state = {name:" phimon",age : 21};
  }
  onClick(){
    this.setState({name : " love "});
  }
 
  getVal(){
    return "getVal";
  }
  setAge(e){
  const age = e.target.value;
  this.setState({age : age});
 }
  render() {

    const myname = "M";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calculator/>

      </div>
    );
  }
}


export default App;