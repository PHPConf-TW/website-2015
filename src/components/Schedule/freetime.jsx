import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Freetime extends Component {
  render() {
    return (
      <tr className="sub">
        <td className="time right">{this.props.time}</td>
        <td className="center">{this.props.data.title}</td>
      </tr>
    );
  }
}

Freetime.propTypes = {
  data: React.PropTypes.object.isRequired,
  time: React.PropTypes.string.isRequired,
};

export default Freetime;
