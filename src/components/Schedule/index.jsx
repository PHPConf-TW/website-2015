import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Schedule extends Component {
  render() {
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
              <tr className="sub">
                <td className="time right">09:20 AM</td>
                <td className="center nonborder">開幕</td>
              </tr>
              <tr className="sub">
                <td className="time right">09:30 AM</td>
                <td className="center nonborder">Rasmus</td>
              </tr>
              <tr className="sub">
                <td className="time right">10:40 AM</td>
                <td className="center nonborder">休息</td>
              </tr>
              <tr className="main-title">
                <td className="time right">10:50 AM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author-desktop">c9s</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">c9s<span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author-desktop">Ricky</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">Ricky <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>敬請期待</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>敬請期待</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">11:30 AM</td>
                <td className="center">午餐</td>
              </tr>
              <tr className="main-title">
                <td className="time right">12:30 PM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author-desktop">林志傑 (fukuball)</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">林志傑 (fukuball) <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author-desktop">江明宗 (Kiang)</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">江明宗 (Kiang) <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>敬請期待</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>敬請期待</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">13:20 PM</td>
                <td className="center">休息</td>
              </tr>
              <tr className="main-title">
                <td className="time right">13:30 PM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author-desktop">Ant</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">Ant <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author-desktop">聖佑</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">聖佑 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>以 EPV 實例帶領會眾瞭解 PHP Extension 的開發動機、架構與成果。並延伸探討 PHP Extension 應用於產品中的實務案例。<br />EPV : Extra Predefined Variables for PHP，用來補齊 PHP 遺失的 $_PUT 與 $_DELETE</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>Drupal 本來僅針對 Single Server Hosting ，如何在現今擴展性的需求不斷提高下，逐步調適演進？本主題將由 Drupal 的演進陣痛，談談 PHP 專案開發時如何為 Scalibility 預做準備。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">14:10 PM</td>
                <td className="center">休息</td>
              </tr>
              <tr className="main-title">
                <td className="time right">14:20 PM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author-desktop">尤川豪</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">尤川豪 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author-desktop">SteveLo (SDpower)</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">SteveLo (SDpower) <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>使用phpalcon framework開發該如何上手以及架構與使用。 內容包含使用方式ORM, Template Engine (Volt),DI ,Events Management ,Encryption ,HTTP Request ,Response ,Cookies。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>Docker是這一年來虛擬化環境的新秀，以LXC技術展現輕量型虛擬化，並且擁有自動建構、版本控制的特性，配合Docker hub平台，讓我們能夠快速部署伺服器環境與專案。而這個連Google、Red Hat都很是重視的LXC管理工具，該如何運用在PHP的專案上呢？就讓我們一探究竟吧！</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">15:00 PM</td>
                <td className="center">下午茶</td>
              </tr>
              <tr className="main-title">
                <td className="time right">15:30 PM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author-desktop">Fntsrlike</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">Fntsrlike <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author-desktop">楊泓曆</div>
                    <h4 className="arrow_box">講師努力生產中</h4>
                    <div className="author-mobile">楊泓曆 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></div>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>CLIFramework is a command-line application framework, for building flexiable, simple command-line applications.</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>在大型網站上，透過 Varnish 機制加速網頁伺服器回應速度的實際應用場景，包含 cache 應用，多 domain 轉址及手機來源判斷機制等相關應用</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">16:00 PM</td>
                <td className="center">休息</td>
              </tr>
              <tr className="sub">
                <td className="time right">16:10 PM</td>
                <td className="center nonborder">Laruence</td>
              </tr>
              <tr className="sub">
                <td className="time right">16:50 PM</td>
                <td className="center">閉幕</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">若因不可預測之突發因素，主辦單位保留議程及講師的變更權利。</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    );
  }
}

export default Schedule;
