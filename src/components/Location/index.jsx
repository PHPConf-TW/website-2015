import '!style!css!less!./Location.less';
import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <section id="venue" className="section-block">
        <div className="row">
          <div className="pure-u-1 pure-u-md-1-2 venue-text">
            <h4>輔仁大學國璽樓</h4>
            <p className="address">新北市新莊區中正路510號 <a className="text-btn" href="https://www.google.com/maps/place/輔仁大學" target="_blank">點我看地圖</a></p>
            <h5>路線指示</h5><a className="text-btn" href="http://www.fju.edu.tw/aboutFju.jsp?labelID=9" target="_blank">官網路線資訊</a>
            <ul>
              <li>輔大校門進入直行至最後端至中美堂，左轉第2棟有玻璃帷幕之新大樓即為國璽樓</li>
              <li>自輔大貴子門進入，右轉第一棟大樓即為國璽樓。(現場將有場務人員舉牌引導方向)</li>
            </ul>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 venue-map">
              <a href="https://www.google.com/maps/place/242台灣新北市新莊區輔仁大學中正路510號" target="_blank"><img src="http://maps.googleapis.com/maps/api/staticmap?center=242台灣新北市新莊區輔仁大學中正路510號&zoom=15&size=400x600&maptype=roadmap&markers=color:blue%7C25.042299,121.6166612&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Ccolor:red%7Clabel:C%7C40.718217,-73.998284&sensor=false" /></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
