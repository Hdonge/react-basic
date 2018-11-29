import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };

    this.updateState = this.updateState.bind(this);
  }

  clearInput() {
    this.setState({ data: '' });
    ReactDOM.findDOMNode(this.refs.myText).focus();
  }

  updateState(e) {
    this.setState({ data: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange={this.updateState} ref="myText" />
        <h4>{this.state.data}</h4>
        <button onClick={this.clearInput.bind(this)}>Clear</button>
      </div>
    );
  }
}

export default App;
