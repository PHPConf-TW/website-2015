import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import SpeakerInfo from './Box';
import _ from 'lodash';

class Speaker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
          <div className="avatar" onClick={this.handleClick}>
            <img src={this.props.avatar} />
          </div>
          <div className="speaker-info">
            <h5 onClick={this.handleClick}>{this.props.title}</h5>
            <h4 onClick={this.handleClick}>{this.props.name}</h4>
            <div className="links">
              <ul>
                <li><a href="#" target="_blank">FB</a></li>
                <li><a href="#" target="_blank">相關連結</a></li>
              </ul>
            </div>
            <p onClick={this.handleClick}>{_.first(this.props.info)}</p>
          </div>
          { this.state.toggle ? <SpeakerInfo {...this.props} handleClick={this.handleClick} /> : null }
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
