import '!style!css!less!./Speaker.less';
import React from 'react';
import SpeakerInfo from './Box';
import _ from 'lodash';

const Speaker = React.createClass({
  getInitialState() {
    return {toggle: false};
  },
  render() {
    return (
        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
          <div onClick={this.handleClick} className="avatar">
            <img src={this.props.avatar} />
          </div>
          <div onClick={this.handleClick} className="speaker-info">
            <h5>{this.props.title}</h5>
            <h4>{this.props.name}</h4>
            <div className="links">
              <ul>
                <li><a href="#" target="_blank">FB</a></li>
                <li><a href="#" target="_blank">相關連結</a></li>
              </ul>
            </div>
            <p>{_.first(this.props.info)}</p>
          </div>
          <SpeakerInfo {...this.props} show={this.state.toggle} handleClick={this.handleClick} />
        </div>
    );
  },
  handleClick: function handleClick() {
    this.setState({toggle: !this.state.toggle});
  },
  propTypes: {
    avatar: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    info: React.PropTypes.array.isRequired,
  },
});

export default Speaker;
