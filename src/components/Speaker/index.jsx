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
          <svg>
            <defs>
              <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
    );
  }
}

export default Speaker;
