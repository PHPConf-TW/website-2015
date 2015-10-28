import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Title extends Component {

  static propTypes = {
    data: React.PropTypes.array.isRequired,
    time: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    let first;
    let firstClass;
    let second;
    let secondClass;
    this.props.data.map((n) => {
      if (n.location === '一樓多功能國際會議廳') {
        first = n;
        n.speaker === '' ? firstClass = 'first-nonspeaker' : firstClass = '';
      } else {
        second = n;
        n.speaker === '' ? secondClass = 'second-nonspeaker' : secondClass = '';
      }
    });

    return (
      <tr className="main-title">
        <td className="time right">{this.props.time}</td>
        <td className="content nonborder">
          <div className="pure-u-1 pure-u-md-1-2 one" onClick={this.props.handleClick.bind(null, first, this.props.time)}>
            <div className={firstClass}>
              <div className="author-desktop">{first.speaker}</div>
              <h4 className="arrow_box">{first.title}</h4>
              <div className="author-mobile-data">
                <a onClick={this.handleClick} style={{display: first.slide_url ? 'inline' : 'none'}} href={first.slide_url}>投影片 <i className="fa fa-slideshare"></i></a>
                <a onClick={this.handleClick} style={{display: first.youtube_url ? 'inline' : 'none'}} href={first.youtube_url} target="_blank">Youtube <i className="fa fa-youtube-play"></i></a>
              </div>
              <div className="author-mobile">{first.speaker}
                <span style={{display: first.title ? 'inline' : 'none'}} className="more">詳細 <i className="fa fa-caret-right"></i></span>
              </div>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 two" onClick={this.props.handleClick.bind(null, second, this.props.time)}>
            <div className={secondClass}>
              <div className="author-desktop">{second.speaker}</div>
              <h4 className="arrow_box">{second.title}</h4>
              <div className="author-mobile-data">
                <a style={{display: second.slide_url ? 'inline' : 'none'}} href={second.slide_url}>投影片 <i className="fa fa-slideshare"></i></a>
                <a style={{display: second.youtube_url ? 'inline' : 'none'}} href={second.youtube_url} target="_blank">Youtube <i className="fa fa-youtube-play"></i></a>
              </div>
              <div className="author-mobile">{second.speaker}
                <span style={{display: second.title ? 'inline' : 'none'}} className="more">詳細 <i className="fa fa-caret-right"></i></span>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default Title;
