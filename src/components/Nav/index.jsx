import '!style!css!less!./Nav.less';
import React, { Component } from 'react';

class Nav extends Component {

  componentDidMount() {
    $(() => {
      const $nav = $('nav');
      const $hamburger = $nav.find('.hamburger');
      const $menu = $nav.find('ul');

      $hamburger.on('click', () => {
        if ($nav.hasClass('active')) {
          $nav.removeClass('active');
        } else {
          $nav.addClass('active');
        }
      });

      $menu.on('click', () => {
        if ($nav.hasClass('active')) {
          $nav.removeClass('active');
        }
      });
    });
  }

  render() {
    return (
      <nav>
        <div className="row">
          <div className="hamburger">
            <div className="layer top"></div>
            <div className="layer mid"></div>
            <div className="layer bottom"></div>
          </div>
          <div className="logo">PHPConf Taiwan 2015</div>
          <ul>
            <li><a href="#top-section"><div>首頁</div></a></li>
            <li><a href="#signup-section"><div>報名</div></a></li>
            <li><a href="#prospect-section"><div>展望</div></a></li>
            <li><a href="#speakers-section"><div>講師</div></a></li>
            <li><a href="#schedule-section"><div>議程</div></a></li>
            <li><a href="#venue-section"><div>地點</div></a></li>
            <li><a href="#about-section"><div>關於</div></a></li>
            <li><a href="#sponsors-section"><div>贊助</div></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
