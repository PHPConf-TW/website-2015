import '!style!css!less!./About.less';
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <h3>關於</h3>

        <div className="about-staff">

          <div className="about-header"><span>工作人員</span></div>

          <div className="staff">
            <h4>總召</h4>

            <p>Johnpupu</p>

            <br />

            <h4>記錄</h4>

            <p><strong>組長</strong></p>
            <p>Daniel丹丹</p>

            <p><strong>組員</strong></p>
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

            <br />

            <h4>議程</h4>

            <p><strong>組長</strong></p>
            <p>Firch</p>

            <p><strong>組員</strong></p>
            <ul>
              <li>Vincent</li>
              <li>Rocky</li>
            </ul>
          </div>

          <div className="staff">
            <h4>場務 / 採購 / 行政 / 票務</h4>

            <p><strong>組長</strong></p>
            <p>Oreo</p>

            <p><strong>場務組員</strong></p>
            <ul>
              <li>Stanley</li>
              <li>下午</li>
              <li>Lorraine</li>
              <li>Elvis</li>
              <li>Terry</li>
              <li>蛋糕</li>
            </ul>

            <p><strong>採購組員</strong></p>
            <ul>
              <li>Ricky</li>
            </ul>

            <p><strong>行政組員</strong></p>
            <ul>
              <li>CPH</li>
              <li>pythonet</li>
              <li>蝦蝦</li>
            </ul>

            <p><strong>票務組員</strong></p>
            <ul>
              <li>Mosil</li>
              <li>Bobo</li>
            </ul>
          </div>

          <div className="staff">
            <h4>贊助 / 公關</h4>

            <p><strong>組長</strong></p>
            <p>Wake</p>

            <p><strong>組員</strong></p>
            <ul>
              <li>Herb</li>
            </ul>
          </div>

          <div className="staff">
            <h4>線路</h4>
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

          <div className="staff">
            <h4>設計</h4>

            <p><strong>組長</strong></p>
            <p>Debby</p>

            <p><strong>組員</strong></p>
            <ul>
              <li>chu ching</li>
            </ul>
          </div>

          <div className="staff">
            <h4>法律顧問</h4>

            <p>強哥</p>
          </div>

          <div className="staff">
            <h4>APP製作</h4>
            <ul>
              <li>Firch</li>
              <li>Neko</li>
              <li>Mosil</li>
              <li>Vincent</li>
            </ul>
          </div>

          <div className="staff">
            <h4>網站製作</h4>
            <p><strong>組長</strong></p>
            <p>Jace Ju</p>

            <p><strong>組員</strong></p>
            <ul>
              <li>KeaNy</li>
              <li>appleboy</li>
              <li>宅小哇</li>
            </ul>
          </div>
        </div>
        <br clear="both" />
        <div className="about-info">
          <div className="about-header"><span>連結</span></div>
          <ul>
            <li><span className="icon facebook-icon"></span> <a href="https://www.facebook.com/groups/551533458209944/" target="_blank">PHPConf Taiwan Facebook 社團</a></li>
          </ul>
          <div className="app-link">
            <a href="https://play.google.com/store/apps/details?id=biz.mosil.phpconf2014" target="_blank"><img src={ require('./android-icon.png') } /></a><a href="https://itunes.apple.com/us/app/phpconf-taiwan-2014/id918190667" target="_blank"><img src={ require('./apple-icon.png') } /></a>
          </div>
        </div>
      </section>
    );
  }
}
