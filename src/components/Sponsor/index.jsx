import '!style!css!less!./Sponsor.less';
import React, { Component } from 'react';
import SponsorList from './List';
import data from './data';

class Sponsor extends Component {

  render() {
    return (
      <section id="sponsors">
        <h3>贊助</h3>
        <SponsorList type="鑽石級贊助" data={data.diamondSponsor} />
        <hr />
        <SponsorList type="黃金級贊助" data={data.goldSponsor} />
        <hr />
        <SponsorList type="特別感謝" data={data.speicialAppreciate} />
        <hr />
        <SponsorList type="合作媒體" data={data.cooperantMedia} />
      </section>
    );
  };
};

export default Sponsor;
