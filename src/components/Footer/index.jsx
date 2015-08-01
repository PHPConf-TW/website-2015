import '!style!css!less!./Footer.less';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li><a href="http://phpconf.tw/2014">2014</a></li>
          <li><a href="http://phpconf.tw/2013">2013</a></li>
          <li><a href="http://phpconf.tw/2012">2012</a></li>
          <li><a href="http://phpconf.tw/2011">2011</a></li>
        </ul>
        <a href="mailto:contact@phpconf.tw">contact@phpconf.tw</a>
      </footer>
    );
  }
}

export default Footer;
