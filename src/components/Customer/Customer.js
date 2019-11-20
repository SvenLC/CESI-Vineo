import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products'
import Footer from '../Footer/Footer';

class Customer extends Component {
  render() {


    return (
      <Fragment>
        <Header />
        {/* <Navbar /> */}
        <Products />
        <Footer />
      </Fragment>
    );
  }
}
export default Customer;
