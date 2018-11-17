import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerText}</h1>
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}

export default App;
