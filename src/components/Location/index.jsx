import '!style!css!less!./Location.less';
import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <section id="venue" className="section-block">
        <div className="row">
          <div className="pure-u-1 pure-u-md-1-2 venue-text">
            <h4>輔仁大學國璽樓</h4>
            <p className="address">新北市新莊區中正路510號 <a className="text-btn" href="https://goo.gl/maps/4EjyR" target="_blank">點我看地圖</a></p>
            <h5>路線指示</h5><a className="text-btn" href="http://www.fju.edu.tw/aboutFju.jsp?labelID=9" target="_blank">官網路線資訊</a><a className="text-btn left-btn" href="http://140.136.114.206/blog3/archives/IMG_2639.JPG" target="_blank">建築物照</a>
            <ul>
              <li>輔大校門進入直行至最後端至中美堂，左轉第2棟有玻璃帷幕之新大樓即為國璽樓</li>
              <li>自輔大貴子門進入，右轉第一棟大樓即為國璽樓。(現場將有場務人員舉牌引導方向)</li>
            </ul>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 venue-map">
              <a href="https://goo.gl/maps/4EjyR" target="_blank"><img src="http://maps.google.com/maps/api/staticmap?center=25.0385769,121.4314296&zoom=17&size=500x400&sensor=false&markers=color:red%7Clabel:E%7C25.0385769,121.4314296" /></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
