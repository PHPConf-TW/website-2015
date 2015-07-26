import '!style!css!less!./Banner.less';
import React, { Component } from 'react';
import BannerImage from './banner.jpg';

class Banner extends Component {
  render() {
    return (
      <section id="banner" style={{backgroundImage: `url('${BannerImage}')`}}>
      </section>
    );
  };
};

export default Banner;
