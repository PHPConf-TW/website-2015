import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import SpeakerInfo from './Box';

class Speaker extends Component {
  render() {
    const info = this.props.info.map((content) => {
      return <p>{content}</p>;
    });

    return (
      <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
        <div className="avatar">
          <img src={this.props.avatar} />
        </div>
        <div className="speaker-info">
          <h5>{this.props.title}</h5>
          <h4>{this.props.name}</h4>
          <div className="links">
            <ul>
              <li><a href="#" target="_blank">FB</a></li>
              <li><a href="#" target="_blank">相關連結</a></li>
            </ul>
          </div>
          {info}
        </div>
        <SpeakerInfo {...this.props} />
      </div>
    );
  }
}

Speaker.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  info: React.PropTypes.array.isRequired,
};

export default Speaker;
