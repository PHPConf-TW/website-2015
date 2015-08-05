import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import Speakers from './List';
import SpeakerData from 'json!yaml!../../../data/speakers';

class Speaker extends Component {
  render() {
    return (
      <section id="speakers" className="section-block">
        <div className="row">
          <h3>講師</h3>
          <Speakers speakers={SpeakerData} />
        </div>
      </section>
    );
  }
}

export default Speaker;
