import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';
import Detail from './Detail';

class Content extends Component {

  render() {
    let first;
    let second;
    this.props.data.map((n) => {
      n.location === '國際會議廳' ? first = n : second = n;
    });
    return (
      <tr className="main-content">
        <td className="time right"></td>
        <td className="content">
          <Detail data={first} css="one" />
          <Detail data={second} css="two" />
        </td>
      </tr>
    );
  }
}

Content.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default Content;
