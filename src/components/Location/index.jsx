import '!style!css!less!./Location.less';
import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <section id="venue">
        <h3>地點</h3>
        <div class="venue-info">
          <div class="venue-text">
            <div class="trans">
              <h4>輔仁大學國璽樓</h4>
              <p class="address"><strong>地址：</strong>新北市新莊區中正路510號 (<a href="https://www.google.com/maps/place/輔仁大學" target="_blank">地圖</a>)</p>
              <br />
              <h5>捷運站及公車轉乘班次資訊</h5>
              <p>台北車站捷運站: 513</p>
              <p>台大醫院捷運站: 513</p>
              <p>西門捷運站: 235、513、635、637、藍2</p>
              <p>民權西路捷運站: 636、638、801</p>
              <p>新埔捷運站: 99、802、842、845</p>
              <p>輔大捷運站:<br />
              1. 輔仁大學門口公車站: 藍2、橘21、99、111、235、635、363、637、638、639、663、797、799、801、802、810、842、845、880、883、藍2、1501、1503、1803、5009、5075、5675、9102<br />
              2. 三重客運輔大站: 513<br />
              3. 建國一路輔大站: 299、615、618</p>
              <br />
              <h5>路線指示</h5>
              <p>一、輔大校門進入直行至最後端至中美堂，左轉第2棟有玻璃帷幕之新大樓即為國璽樓</p>
              <p>二、自輔大貴子門進入，右轉第一棟大樓即為國璽樓。</p>
              <p>(現場將有場務人員舉牌引導方向)</p><br />
              <a href="http://www.fju.edu.tw/aboutFju.jsp?labelID=9" target="_blank">官網資訊</a>
            </div>
          </div>
          <div class="venue-map">
              <a href="https://www.google.com/maps/place/242台灣新北市新莊區輔仁大學中正路510號" target="_blank"><img src="http://maps.googleapis.com/maps/api/staticmap?center=242台灣新北市新莊區輔仁大學中正路510號&zoom=15&size=400x600&maptype=roadmap&markers=color:blue%7C25.042299,121.6166612&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Ccolor:red%7Clabel:C%7C40.718217,-73.998284&sensor=false" /></a>
          </div>
          <br clear="both" />
        </div>
      </section>
    );
  };
};

export default Location;
