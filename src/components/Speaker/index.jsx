import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    var speakers = [
      {
        avatar:'http://fakeimg.pl/120x120',
        name:'Brian',
        title:'SBACE.co 軟體開發總監',
        info:[
          'iOS/PHP Developer，目前為 SBACE.co 軟體開發總監。',
          '過去於 CyberLink 擔綱資深工程師，也曾是 5945.tw 技術長暨共同創辦人。',
          '寫過兩本 iOS 開發教學書籍，30歲以前熱愛參加軟體開發競賽和 Hack Day，得過兩次小獎，喜歡 Cafe，鋼琴樂和巧克力飲。'
        ]
      },
      {
        avatar:'http://fakeimg.pl/120x120',
        name:'Joe',
        title:'ProjectUp',
        info:[
          'Joe Chang, PMP，識博管理顧問執行長，也是華人最大的專案部落格 -「專案管理生活思維」的站長。',
          'Joe具備多年企業診斷、專案輔導、流程設計、及EPPM系統導入經驗。從專案成員、PM、PMO主管、CEO都擔任過，非常了解專案各階層角色的困境與心聲。 是台灣少數同時具備Oracle Primavera Portfolio Management Implementation及微軟Project Portfolio Management認證的資深顧問。近七年來連續不間斷的透過部落格，試圖讓專案管理的理念深化到每個人身上。'
        ]
      },
    ];
    var ASpeaker = React.createClass({
    render:function(){
      var info = this.props.speaker.info.map(function(content) {
        return <p>{content}</p>;
      });
      return (
        <div className="speaker">
          <img className="avatar" src={this.props.speaker.avatar} />
          <div className="speaker-info">
            <h4>{this.props.speaker.name}</h4>
            <h5>{this.props.speaker.title}</h5>
            {info}
          </div>
          <hr />
        </div>
      );
    }
  });
  var Speakers = React.createClass({
    render:function(){
      var speakers=this.props.speakers.map(function(speaker){
        return <ASpeaker speaker={speaker} />;
      });
      return (
        <div>
          {speakers}
        </div>
      );
    }
  });
    return (
      <section id="speakers">
        <h3>講師</h3>
        <Speakers speakers={speakers} />
      </section>
    );
  };
};

export default Speaker;
