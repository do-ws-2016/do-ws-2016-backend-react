import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './routes/Category.js';
import Dashboard  from './routes/Dashboard.js';
import List  from './routes/List.js';

import MainMenu from './components/Menu.js';


import {Row, Col} from 'antd';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Backend Grill-App</h2>
        </div>
        <MainMenu/>
        <div className="content">
          <Row>
            <Col span={12} offset={6}>
              <Router history={hashHistory}>
                <Route path='/' component={Dashboard}/>
                <Route path='/receipts' component={Category}/>
                <Route path='/list' component={List}/>
              </Router>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
