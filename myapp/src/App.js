import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Emp from './emp'

class App extends Component {

  state = {
    emps: [
      { id: 101, name: 'Dipak', salary: 5000 },
      { id: 102, name: 'Sush', salary: 6000 },
      { id: 103, name: 'Roy', salary: 7000 },
      { id: 104, name: 'Ham', salary: 8000 },
      { id: 105, name: 'Dan', salary: 9000 }
    ]
  };

  render() {
    return (
      <div>
        <table style={{ width: '500px', color: 'blue' }}>
          <tbody>
            {
              this.state.emps.map((emp) => {
                return (<Emp salary={emp.salary}>{emp.name}</Emp>)
              })
            }
          </tbody>
        </table>
      </div >
    );
  }
}

export default App;
