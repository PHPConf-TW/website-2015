import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Title extends Component {
  render() {
    let first;
    let second;
    this.props.data.map((n) => {
      n.location === '國際會議廳' ? first = n : second = n;
    });
    return (
      <tr className="main-title">
        <td className="time right">{this.props.time}</td>
        <td className="content nonborder">
          <div className="pure-u-1 pure-u-md-1-2 one" onClick={this.props.handleClick.bind(null, first, this.props.time)}>
            <div className="author-desktop">{first.speaker}</div>
            <h4 className="arrow_box">{first.title}</h4>

            <div className="author-mobile">{second.speaker}<span className="more">詳細 <i
              className="fa fa-caret-right"></i></span></div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 two" onClick={this.props.handleClick.bind(null, second, this.props.time)}>
            <div className="author-desktop">{second.speaker}</div>
            <h4 className="arrow_box">{second.title}</h4>

            <div className="author-mobile">{second.speaker} <span className="more">詳細 <i
              className="fa fa-caret-right"></i></span></div>
          </div>
        </td>
      </tr>
    );
  }
}

Title.propTypes = {
  data: React.PropTypes.array.isRequired,
  time: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default Title;
