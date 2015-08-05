import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="shadow-box speaker-box-wrapper">
        <div className="speaker-box">
          <div className="close-btn">
            <div className="layer top"></div>
            <div className="layer bottom"></div>
          </div>
          <div className="box-wrapper">
            <div className="speaker-info">
              <div className="avatar">
                <img src="http://fakeimg.pl/250x250" />
              </div>
              <h5>SBACE.co 軟體開發總監</h5>
              <h4>Brian</h4>
              <div className="links">
                <ul>
                  <li><a href="#" target="_blank">FB</a></li>
                  <li><a href="#" target="_blank">相關連結</a></li>
                </ul>
              </div>
            </div>
            <div className="descrip">
              <p>
              iOS/PHP Developer，目前為 SBACE.co 軟體開發總監。<br /><br />過去於 CyberLink 擔綱資深工程師，也曾是 5945.tw 技術長暨共同創辦人。<br /><br />寫過兩本 iOS 開發教學書籍，30歲以前熱愛參加軟體開發競賽和 Hack Day，得過兩次小獎，喜歡 Cafe，鋼琴樂和巧克力飲。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
