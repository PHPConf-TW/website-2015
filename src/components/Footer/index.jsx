import '!style!css!less!./Footer.less';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="http://phpconf.tw/2014">2014</a> | <a href="http://phpconf.tw/2013">2013</a> | <a href="http://phpconf.tw/2012">2012</a>  | <a href="http://phpconf.tw/2011">2011</a>
        <br />
        <br />
        <a href="mailto:contact@phpconf.tw">contact@phpconf.tw</a>
      </footer>
    );
  };
};

export default Footer;
