import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductSheet from '../Products/Product/ProductSheet/ProductSheet';
import Products from '../Products/Products';


class Customer extends Component {
  render() {
    const regex = '/[0-9]*$';
    let id;
    if (this.props.location.pathname.match(regex)) {
      id = this.props.location.pathname.replace('/customer', '').replace('/', '');
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
