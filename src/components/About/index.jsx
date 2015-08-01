import '!style!css!less!./About.less';
import React, { Component } from 'react';
import AndroidIcon from './android-icon.png';
import AppleIcon from './apple-icon.png';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <h3>關於</h3>
          <p>感謝以下工作人員的幫忙！</p>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><i className="icon-call"></i></div>
            <div>總召</div>
            <div>Johnpupu</div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><i className="icon-record"></i></div>
            <div>記錄</div>
            <div>Daniel丹丹</div>
            <div>
              <ul>
                <li>丞相</li>
                <li>othree</li>
                <li>日京三子</li>
                <li>黃牙牙</li>
                <li>CJOKER</li>
                <li>Duncan</li>
                <li>大助</li>
                <li>HaWay</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><i className="icon-schedule"></i></div>
            <div>議程</div>
            <div>Firch</div>
            <div>
              <ul>
                <li>Vincent</li>
                <li>Rocky</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-general"></i></div></div>
            <div>場務 / 採購 / 行政 / 票務</div>
            <div>Oreo</div>
            <div>
              <ul>
                <li>Stanley</li>
                <li>下午</li>
                <li>Lorraine</li>
                <li>Elvis</li>
                <li>Terry</li>
                <li>蛋糕</li>
                <li>Ricky</li>
                <li>CPH</li>
                <li>pythonet</li>
                <li>蝦蝦</li>
                <li>Mosil</li>
                <li>Bobo</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-support"></i></div></div>
            <div>贊助 / 公關</div>
            <div>Wake</div>
            <div>
              <ul>
                <li>Herb</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-line"></i></div></div>
            <div>線路</div>
            <div>Wake</div>
            <div>
              <ul>
                <li>david</li>
                <li>莫風</li>
                <li>madarame</li>
                <li>波卡Poka</li>
                <li>Starlition</li>
                <li>胖胖</li>
                <li>Peter</li>
                <li>MouseMs</li>
                <li>小明</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-design"></i></div></div>
            <div>設計</div>
            <div>Debby</div>
            <div>
              <ul>
                <li>chu ching</li>
              </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-legal"></i></div></div>
            <div>法律顧問</div>
            <div>強哥</div>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 speaker">
            <div><div><i className="icon-web"></i></div></div>
            <div>網站製作</div>
            <div>Jace Ju</div>
            <div>
              <ul>
                <li>KeaNy</li>
                <li>appleboy</li>
                <li>宅小哇</li>
              </ul>
            </div>
          </div>
          <div className="about-info">
            <div className="about-header"><span>連結</span></div>
            <ul>
              <li><span className="icon facebook-icon"></span> <a href="https://www.facebook.com/groups/551533458209944/" target="_blank">PHPConf Taiwan Facebook 社團</a></li>
            </ul>
            <div className="app-link">
              <a href="https://play.google.com/store/apps/details?id=biz.mosil.phpconf2014" target="_blank"><img src={AndroidIcon} /></a><a href="https://itunes.apple.com/us/app/phpconf-taiwan-2014/id918190667" target="_blank"><img src={AppleIcon} /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
