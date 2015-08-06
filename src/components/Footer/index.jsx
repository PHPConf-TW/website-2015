import '!style!css!less!./Footer.less';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/groups/551533458209944/" target="_blank">Facebook 社團</a></li>
          <li><a href="mailto:contact@phpconf.tw">聯絡我們</a></li>
        </ul>
        <ul>
          <li><a href="http://phpconf.tw/2014">2014</a></li>
          <li><a href="http://phpconf.tw/2013">2013</a></li>
          <li><a href="http://phpconf.tw/2012">2012</a></li>
          <li><a href="http://phpconf.tw/2011">2011</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
