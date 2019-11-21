import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products'
import Footer from '../Footer/Footer';
import ProductSheet from '../Products/Product/ProductSheet/ProductSheet';

class Customer extends Component {
  render() {
    const regex = '\/[0-9]*$';
    let id;
    if (this.props.location.pathname.match(regex)) {
      id = this.props.location.pathname.replace('/', '');
    }

    let screen = <Products />

    if (id) {
      screen = <ProductSheet wineId={id} />
    }
    return (
      <Fragment>
        <Header />
        {screen}
        <Footer />
      </Fragment>
    );
  }
}
export default Customer;
