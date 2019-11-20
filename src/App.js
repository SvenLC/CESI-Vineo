import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Customer from './components/Customer/Customer';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <h1>toto</h1> */}
        <Route path='/' exact component={Home}/>
        {/* <Route path='/Producer' /> */}
        <Route path='/Customer' component={Customer}/>
      </Switch>
    );
  }
}
export default App;
