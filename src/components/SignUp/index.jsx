import '!style!css!less!./SignUp.less';
import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <section id="signup" className="section-block">
        <div className="row">
          <h3>報名</h3>
          <p className="text-center">PHPConf Taiwan 2015 報名時間：2015/09/14 中午 12:00 (Taipei/Asia)</p>
          <div className="pure-u-1 text-center signup-btn">
            <a href="" className="pure-button btn" target="_blank">立即報名</a>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
