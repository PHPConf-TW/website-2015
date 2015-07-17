import '!style!css!less!./App.less';
import React, { Component } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Footer from '../Footer';
import About from '../About';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
        <Footer />
      </div>
    );
  };
};

export default App;
