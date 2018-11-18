import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  btnClick() {
    console.log("button clicked................");
  }
  render() {
    return (
      <div>
        <p>Here is the button</p>
        <button onClick={this.btnClick}>Click Here</button>
      </div>
    );
  }
}

export default App;
