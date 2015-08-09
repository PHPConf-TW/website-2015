import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';
import ScheduleData from 'json!yaml!../../../data/schedule';
import Title from './Title';
import Content from './Content';
import Freetime from './Freetime';
import Box from './Box';
import _ from 'lodash';


class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      data: {},
    };
  }

  handleClick = (data) => {
    this.setState({toggle: !this.state.toggle, data: data});
  }

  render() {
    const list = _.map(ScheduleData, (v, k) => {
      return _.isArray(v) ? [<Title key={_.uniqueId()} handleClick={this.handleClick} time={k} data={v}/>,
        <Content key={_.uniqueId()} time={k} data={v}/>] :
        <Freetime key={_.uniqueId()} time={k} data={v}/>;
    });
    return (
      <section id="schedule" className="section-block">
        <div className="row">
          <h3>議程</h3>
          <table className="pure-table pure-table-horizontal">
            <thead>
            <tr>
              <th>時間</th>
              <th>
                <div className="pure-u-1 pure-u-md-1-2 one">國際會議廳</div>
                <div className="pure-u-1 pure-u-md-1-2 two">蘇格拉底廳</div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className="sub">
              <td className="time right">09:00 AM</td>
              <td className="center border">報到</td>
            </tr>
            {list}
            </tbody>
            <tfoot>
            <tr>
              <td colSpan="2">若因不可預測之突發因素，主辦單位保留議程及講師的變更權利。</td>
            </tr>
            </tfoot>
          </table>
        </div>
        { this.state.toggle ? <Box handleClick={this.handleClick} data={this.state.data} /> : null }
      </section>
    );
  }
}

export default Schedule;
