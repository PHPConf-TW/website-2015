import '!style!css!less!./Banner.less';
import React, { Component } from 'react';
import BannerImage from './banner.jpg';

class Banner extends Component {
  render() {
    return (
      <section id="banner" style={{backgroundImage: `url('${BannerImage}')`}}>
        <h1><span class="code">&lt;?php echo "</span>PHPConf Taiwan<span class="code">"; // 2014 ?&gt;</span></h1>
        <h2>10月18日 輔仁大學國璽樓</h2>
      </section>
    );
  };
};

export default Banner;
