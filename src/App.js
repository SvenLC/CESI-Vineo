import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Products/>
      <Footer/>
      
    </div>
  );
}

export default App;
