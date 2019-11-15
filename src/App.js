import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import Producer from './components/Producer/Producer';
import Home from './components/Home/Home';
import Customer from './components/Customer/Customer';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <h1>toto</h1> */}
        <Route path='/' exact component={Home}/>
        <Route path='/Producer' component={Producer}/>
        <Route path='/Customer' component={Customer}/>
      </Switch>
    );
  }
}
export default App;
