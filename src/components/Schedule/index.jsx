import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';

class Schedule extends Component {
  render() {
    return (
      <section id="schedule">
        <div className="row">
          <h3>議程</h3>
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th>時間</th>
                <th>
                  <div className="pure-u-1 pure-u-md-1-2 one">國璽樓一樓 多功能國際會議廳</div>
                  <div className="pure-u-1 pure-u-md-1-2 two">國璽樓二樓 國際會議廳</div>
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
              <tr className="main-title">
                <td className="time right">09:30 AM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author">Laruence</div>
                    <h4 className="arrow_box">微博 LAMP 優化之路 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Brian</div>
                    <h4 className="arrow_box">Building High available and scalable website on PHP from Microsoft Azure <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>微博是目前中國最大的社交媒體平台，每天有近100億的訪問請求，2011年微博遭遇爆炸式增長，原有的架構遇到極大的性能挑戰。 兩年來，微博一直在做性能優化和系統改進工作，到目前為止，LAMP系統得到很大的性能提升，首屏時間從2012年初的3秒降低到現在的1.2秒，LAMP服務器數目卻一直在降低。 這其中的到底做了那些優化工作，作為領導這些優化的作者，將為大家一一道來。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>在不斷的演化過程中，提供 Pass & IaaS 服務的 Microsoft Azure 其實不只有整合微軟的技術，也完整支援由 PHP 建構的網路雲端程式。 本議程將介紹如何運用 Microsoft Azure 提供的服務來部屬或重新建置 PHP 網路應用程式，包含資料庫建制與專屬的 API 的使用，使得由 PHP 建制的雲端服務也有絕佳的執行效能以及高度延展性。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="sub">
                <td className="time right">10:40 AM</td>
                <td className="center">休息</td>
              </tr>
              <tr className="main-title">
                <td className="time right">10:50 AM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author">Laruence</div>
                    <h4 className="arrow_box">創意與專案管理的冰與火之爭 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Kiang</div>
                    <h4 className="arrow_box">選舉黃頁開發經驗分享 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>對基層工程師而言，專案管理似乎是某種干擾工作的奇怪流程。 尤其對於創意開發的工作者而言，這兩者似乎是毫不相容的東西？ 很多人普遍認為，創意不能被管理、更不應該被管理。 但實際上，好的專案管理其實是對於創意開發的一項助力，好的專案管理也應該能幫忙案子收斂並提供商業上多面向的協助。 這場內容我們將來探討如何讓冰與火融合，來讓案子更順利的管理要素。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>選舉黃頁主要是希望解決中選會資料混亂以及資料不夠即時問題，主要使用 CakePHP 搭配 MPTT 樹狀結構去實做。</p>
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
                    <div className="author">ReinySong</div>
                    <h4 className="arrow_box">whoscall 的 MongoDB 使用經驗 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">蒼時弦也</div>
                    <h4 className="arrow_box">Framework or Framework Less <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>MongoDB 從前年年底開始陪伴 whoscall 到現在，過程有血有淚，除了分享 MongoDB 的使用經驗外也會分享採用 MongoDB 的重點。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>Framework 可以幫助我們快速的開發網站，但是被「框架」限制住的我們，能夠突破這個框架，做出更多的變化嗎？運用 Composer 讓我們在「套件菜市場」中，尋找適合自己的「零件」然後建構一個能夠對應 Framework 無法適用的簡易型框架。<br />這場演講將會分享怎麼運用 Pux, idiorm/pairs, twig 等套件，組合出 MVC 的架構，卻能夠在需要的時候隨時置換對應各種情況。</p>
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
                    <div className="author">FirchTsai</div>
                    <h4 className="arrow_box">PHP Extension 開發實務 - 補齊 PHP 遺失的 $_PUT 與 $_DELETE <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Jimmy Huang</div>
                    <h4 className="arrow_box">Scalability in Mind - 當老軟體Drupal遇上大架構 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
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
                    <div className="author">SDpower</div>
                    <h4 className="arrow_box">Phalcon 進行式 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Fntsrlike</div>
                    <h4 className="arrow_box">運用 Docker 部署PHP專案 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
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
                    <div className="author">c9s</div>
                    <h4 className="arrow_box">Building Powerful command-line application with PHP <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Ninja</div>
                    <h4 className="arrow_box">HTTP accelerator - Varnish 應用 <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
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
              <tr className="main-title">
                <td className="time right">16:10 PM</td>
                <td className="content nonborder">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <div className="author">Ricky</div>
                    <h4 className="arrow_box">實戰 HHVM Extension <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <div className="author">Nekobe</div>
                    <h4 className="arrow_box">MySQL 的效能救贖：Percona XtraDB Cluster <span className="more">詳細 <i className="fa fa-caret-right"></i></span></h4>
                  </div>
                </td>
              </tr>
              <tr className="main-content">
                <td className="time right"></td>
                <td className="content">
                  <div className="pure-u-1 pure-u-md-1-2 one">
                    <p>HHVM 是 Facebook 開發的一個高效能 PHP 虛擬機用來取代行之有年的 Zend Engine。 但是，在獲得更高效能的同時也意味著原本 PECL 上的大量 Extension 必須一一改寫。 藉由這個議程可以了解到如何透過 HNI 界面，混用 C++ 以及 Hack Lang。<br />在效能以及開發速度上取得平衡，撰寫出屬於自己的 HHVM Extension。</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XT0FXeWU4bzlPY2s">投影片</a>
                      <a href="https://www.youtube.com/watch?v=CSIiF-DQVRc&index=8&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv" target="_blank">Youtube</a>
                    </p>
                  </div>
                  <div className="pure-u-1 pure-u-md-1-2 two">
                    <p>當使用者成長，系統效能不足時，我們能怎麼辦? 瓶頸在 AP Server時，我們可以用 PHP Accelerator，可以多一台 Server 做 DNS Roundrobin 可以改變 httpd 與 php 的架構，可以使用 Proxy 技術....etc<br />那 MySQL 資料庫呢？ 讀寫分離必須改變程式，分析schema最佳化Query曠日費時....</p>
                    <p className="slide">
                      <a href="https://docs.google.com/file/d/0B-59_4gDCY8XeEJ0WkVWWkdtSFk">投影片</a>
                      <a href="https://www.youtube.com/watch?v=eJtDD72wSXY&list=PLI5n7xV4X5qUlAlVnu9aajJeoFDc3mYzv&index=14" target="_blank">Youtube</a>
                    </p>
                  </div>
                </td>
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
