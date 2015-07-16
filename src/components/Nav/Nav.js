import '!style!css!less!./Nav.less';
import React, { Component } from 'react';
import Logo from './logo.png';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <img alt='PHPConf Taiwan logo' title='PHPConf Taiwan'  src={Logo} />
        <ul>
          <li><a href='#top-section'>首頁</a></li>
          <li><a href='#signup-section'>報名</a></li>
          <li><a href='#prospect-section'>展望</a></li>
          <li><a href='#speakers-section'>講師</a></li>
          <li><a href='#schedule-section'>議程</a></li>
          <li><a href='#venue-section'>地點</a></li>
          <li><a href='#sponsors-section'>贊助</a></li>
          <li><a href='#about-section'>關於</a></li>
        </ul>
      </nav>
    );
  }
}
