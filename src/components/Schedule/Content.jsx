import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';
import _ from 'lodash';

class Content extends Component {
  render() {
    let first;
    let second;
    _.forEach(this.props.data, (n) => {
      n.location === '國際會議廳' ? first = n : second = n;
    });
    return (
      <tr className="main-content">
        <td className="time right"></td>
        <td className="content">
          <div className="pure-u-1 pure-u-md-1-2 two">
            {_.map(first.content, (content, index) => {
              return <p key={index}>{content}</p>;
            })}
            <p style={{display: (first.slide || first.youtube_url) ? 'inline' : 'none'}} className="slide">
              <a style={{display: first.slide ? 'inline' : 'none'}} href={first.slide_url}>投影片</a>
              <a style={{display: first.youtube_url ? 'inline' : 'none'}} href={first.youtube_url} target="_blank">Youtube</a>
            </p>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 two">
            {_.map(second.content, (content, index) => {
              return <p key={index}>{content}</p>;
            })}
            <p style={{display: (second.slide || second.youtube_url) ? 'inline' : 'none'}} className="slide">
              <a style={{display: second.slide ? 'inline' : 'none'}} href={second.slide_url}>投影片</a>
              <a style={{display: second.youtube_url ? 'inline' : 'none'}} href={second.youtube_url} target="_blank">Youtube</a>
            </p>
          </div>
        </td>
      </tr>
    );
  }
}

Content.propTypes = {
  data: React.PropTypes.array.isRequired,
  time: React.PropTypes.string.isRequired,
};

export default Content;
