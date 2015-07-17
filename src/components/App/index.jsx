import '!style!css!less!./App.less';
import React, { Component } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Footer from '../Footer';
import About from '../About';
import SignUp from '../SignUp';
import Prospect from '../Prospect';
import Speaker from '../Speaker';
import Schedule from '../Schedule';
import Location from '../Location';
import Sponsor from '../Sponsor';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <SignUp />
        <Prospect />
        <Speaker />
        <Schedule />
        <Location />
        <Sponsor />
        <About />
        <Footer />
      </div>
    );
  };
};

export default App;
