import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to the React Router tutorial</h2>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
