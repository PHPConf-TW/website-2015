import '!style!css!less!./SignUp.less';
import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <section id="signup">
        <div className="row">
            <h3>報名</h3>
            <p className="text-center">PHPConf 2015 報名日期有兩個時段，注意時間趕快來報名唷 ^.^ ~ (我是假文案)</p>
            <div className="pure-u-1 pure-u-md-1-2 f-date">
                <div>2014年9月18日 20:00</div>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 l-date">
                <div>2014年9月24日 20:00</div>
            </div>
            <div className="pure-u-1 text-center signup-btn">
                <a href="" className="pure-button btn main-btn" target="_blank">前往報名</a>
            </div>
        </div>
      </section>
    );
  };
};

export default SignUp;
