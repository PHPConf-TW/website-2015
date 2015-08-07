import '!style!css!less!./Nav.less';
import React, { Component } from 'react';
import classnames from 'classnames';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const navClass = classnames({active: this.state.active});

    return (
      <nav className={navClass}>
        <div className="row">
          <div className="hamburger" onClick={this.handleActive}>
            <div className="layer top"></div>
            <div className="layer mid"></div>
            <div className="layer bottom"></div>
          </div>
          <div className="logo">PHPConf Taiwan 2015</div>
          <ul onClick={this.handleActive}>
            <li><a href="#top-section"><div>首頁</div></a></li>
            <li><a href="#signup-section"><div>報名</div></a></li>
            <li><a href="#prospect-section"><div>展望</div></a></li>
            <li><a href="#speakers-section"><div>講師</div></a></li>
            <li><a href="#schedule-section"><div>議程</div></a></li>
            <li><a href="#venue-section"><div>地點</div></a></li>
            <li><a href="#sponsors-section"><div>贊助</div></a></li>
            <li><a href="#about-section"><div>關於</div></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
