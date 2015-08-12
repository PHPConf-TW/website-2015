import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';

class Box extends Component {

  cancelClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="shadow-box speaker-box-wrapper" onClick={this.props.handleClick}>
        <div className="speaker-box" onClick={this.cancelClick}>
          <div className="close-btn" onClick={this.props.handleClick}>
            <div className="layer top"></div>
            <div className="layer bottom"></div>
          </div>
          <div className="box-wrapper">
            <div className="speaker-info">
              <div className="avatar">
                <img src={this.props.avatar} />
              </div>
              <h5>{this.props.title}</h5>
              <h4>{this.props.name}</h4>
              <div className="links">
                <ul>
                  <li><a href="#" target="_blank">FB</a></li>
                  <li><a href="#" target="_blank">相關連結</a></li>
                </ul>
              </div>
            </div>
            <div className="descrip">
              {this.props.info.map((content, key) => {
                return <p key={key}>{content}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Box.mixins = [React.addons.PureRenderMixin];

Box.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  info: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default Box;
