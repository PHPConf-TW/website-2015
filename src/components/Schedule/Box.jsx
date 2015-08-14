import React, { Component } from 'react';

class Box extends Component {

  cancelClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="shadow-box schedule-box-wrapper" onClick={this.props.handleClick.bind(null, {})}>
        <div className="schedule-box" onClick={this.cancelClick}>
          <div className="close-btn" onClick={this.props.handleClick.bind(null, {})}>
            <div className="layer top"></div>
            <div className="layer bottom"></div>
          </div>
          <div className="box-wrapper">
            <div className="schedule-info">
              <h4 className="red">{this.props.data.title}</h4>
              <h5>{this.props.data.speaker}</h5>
              <div className="links"
                   style={{display: (this.props.data.slide_url || this.props.data.youtube_url) ? 'inline' : 'none'}}>
                <ul>
                  <li style={{display: this.props.data.slide_url ? 'inline' : 'none'}}><a
                    href={this.props.data.slide_url} target="_blank">投影片</a></li>
                  <li style={{display: this.props.data.youtube_url ? 'inline' : 'none'}}><a
                    href={this.props.data.youtube_url} target="_blank">Youtube</a></li>
                </ul>
              </div>
            </div>
            <div className="descrip">
              <div className="pos red clearfix">
                <span className="pull-left"><i className="fa fa-clock-o"></i>{this.props.time}</span>
                <span className="pull-right">{this.props.data.location}</span>
              </div>
              {this.props.data.content.map((content, key) => {
                return <p key={key}>{content}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Box.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  time: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Box;
