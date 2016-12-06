import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './routes/Category.js';
import Dashboard  from './routes/Dashboard.js';



import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Backend Grill-App</h2>
        </div>

        <Router history={hashHistory}>
          <Route path='/' component={Dashboard}/>
          <Route path='/category' component={Category}/>
        </Router>
      </div>
    );
  }
}

export default App;
