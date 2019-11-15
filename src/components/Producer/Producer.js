import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import Footer from '../Footer/Footer';

class Producer extends Component {
  render() {


    return (
      <Fragment>
        <Header />
        <Navbar />
        <Footer />
      </Fragment>
    );
  }
}
export default Producer;
