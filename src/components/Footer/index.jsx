import '!style!css!less!./Footer.less';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="social-wrapper">
          <li className="fb"><a href="https://www.facebook.com/groups/551533458209944/" target="_blank" title="Facebook 社團"><i className="fa fa-facebook"></i></a></li>
          <li className="mail"><a href="mailto:contact@phpconf.tw" title="聯絡我們"><i className="fa fa-envelope-o"></i></a></li>
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
