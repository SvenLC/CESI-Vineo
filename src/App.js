import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Customer from './components/Customer/Customer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home}/>    
        <Route path='/Customer' component={Customer}/>
        <Route path='/Rouge' component={Customer}/>
        <Route path='/Rose' component={Customer}/>
        <Route path='/Blanc' component={Customer}/>
        <Route path='/Champagne' component={Customer}/>
      </Switch>
    );
  }
}
export default App;
