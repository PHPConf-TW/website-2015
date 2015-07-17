import '!style!css!less!./Sponsor.less';
import React, { Component } from 'react';
import imfju from './appreciate/imfju.png';
import tronice from './appreciate/Tronice.png';
import ossf from './appreciate/ossf.png';
import microsoft from './diamond/microsoft.jpg';
import kkbox from './gold/kkbox.png';
import pumo from './gold/pumo.png';
import sina from './cooperate/sina.jpg';
import weibo from './cooperate/weibo.jpg';
import technews from './cooperate/Technews.logo.png';

class Sponsor extends Component {

  render() {
    return (
      <section id="sponsors">
        <h3>贊助</h3>

        <div className="sponsor">
            <h4>鑽石級贊助</h4>
            <img src={microsoft} />
        </div>
        <hr />
        <div className="sponsor">
            <h4>黃金級贊助</h4>
            <img src={kkbox} />
            <img src={pumo} />
        </div>
        <hr />
        <div className="sponsor">
            <h4>特別感謝</h4>
            <img src={ossf} />
            <img src={imfju} className="imfju" />
            <img src={tronice} className="tronice" alt="創時系統" />
        </div>
        <hr />
        <div className="sponsor">
            <h4>合作媒體</h4>
            <img src={sina} />
            <img src={weibo} />
            <img src={technews} />
        </div>
    </section>
    );
  };
};

export default Sponsor;
