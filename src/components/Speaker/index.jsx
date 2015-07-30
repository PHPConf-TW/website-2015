import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import SpeakerData from 'json!yaml!../../../data/speakers.yml';

class Speaker extends Component {
  render() {

    let ASpeaker = React.createClass({
      render() {
        let info = this.props.speaker.info.map((content) => {
          return <p>{content}</p>
        });

        return (
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div className="avatar">
              <img src={this.props.speaker.avatar} />
            </div>
            <div className="speaker-info">
              <h5>{this.props.speaker.title}</h5>
              <h4>{this.props.speaker.name}</h4>
              {info}
            </div>
          </div>
        )
      }
    });

    let Speakers = React.createClass({
      render() {
        let speakers = this.props.speakers.map((speaker) => {
          return <ASpeaker speaker={speaker} />;
        });

        return (
          <div>
            {speakers}
          </div>
        )
      }
    });

    return (
      <section id="speakers">
        <div className="row">
          <h3>講師</h3>
          <Speakers speakers={SpeakerData} />
        </div>
      </section>
    );
  };
};

export default Speaker;
