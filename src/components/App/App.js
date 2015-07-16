import '!style!css!less!./App.less';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import About from '../About/About';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Banner/>
        <About/>
        <Footer/>
      </div>
    );
  }
}
