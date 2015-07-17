import '!style!css!less!./Sponsor.less';
import React, { Component } from 'react';

class Sponsor extends Component {

  render() {
    var sponsorsData = {
      diamondSponsor:[
        {
          name:'Microsoft',
          classname:'microsoft',
          logo:'assets/images/sponsor/diamond/microsoft.jpg'
        }
      ],

      goldSponsor:[
        {
          name:'KKBox',
          classname:'kkbox',
          logo:'assets/images/sponsor/gold/kkbox.png'
        },
        {
          name:'捕夢網',
          classname:'pumo',
          logo:'assets/images/sponsor/gold/pumo.png'
        }
      ],

      speicialAppreciate:[
        {
          name:'輔仁大學資訊管理學系',
          classname:'imfju',
          logo:'assets/images/sponsor/appreciate/imfju.png'
        },
        {
          name:'OSSF',
          classname:'ossf',
          logo:'assets/images/sponsor/appreciate/ossf.png'
        },
        {
          name:'創時系統',
          classname:'tronice',
          logo:'assets/images/sponsor/appreciate/Tronice.png'
        }
      ],

      cooperantMedia:[
        {
          name:'新浪',
          classname:'sina',
          logo:'assets/images/sponsor/cooperate/sina.jpg'
        },
        {
          name:'微博',
          classname:'weibo',
          logo:'assets/images/sponsor/cooperate/weibo.jpg'
        },
        {
          name:'TechNews',
          classname:'technews',
          logo:'assets/images/sponsor/cooperate/Technews.logo.png'
        }
      ]
    };

    var SponsorList=React.createClass({
      render: function(){
        var sponsors = this.props.data.map(function(sponsor){
          return <img src={sponsor.logo} className={sponsor.classname} alt={sponsor.name}/>
        });
        return (
            <div className="sponsor">
              <h4>{this.props.type}</h4>
              {sponsors}
            </div>
          )
      }
    });

    return (
      <section id="sponsors">
        <h3>贊助</h3>
        <SponsorList type="鑽石級贊助" data={sponsorsData.diamondSponsor} />
        <hr />
        <SponsorList type="黃金級贊助" data={sponsorsData.goldSponsor} />
        <hr />
        <SponsorList type="特別感謝" data={sponsorsData.speicialAppreciate} />
        <hr />
        <SponsorList type="合作媒體" data={sponsorsData.cooperantMedia} />
    </section>
    );
  };
};

export default Sponsor;
