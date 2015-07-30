import '!style!css!less!./Prospect.less';
import React, { Component } from 'react';
import classnames from 'classnames';
import Img from './bg.jpg';

class Prospect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
  }

  handleClick = () => {
    this.setState({
      hide: false
    });
  }

  render() {
    let hideClass = classnames({hide: this.state.hide});
    let buttonClass = classnames('text-btn', {hide: !this.state.hide});

    return (
      <section id="prospect">
        <div className="row">
          <h3>展望</h3>
          <article className="clearfix">
            <div className="carousel">
              <img alt='PHPConf Taiwan' title='PHPConf Taiwan' src={Img} />
              <div className="carousel-btn">
                <ul>
                  <li className="active"></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="post">
              <p>歷經三屆的 PHPConf Taiwan ，在每位 PHP 開發者的參與下，主題從  2011 年以 PHP 開發相關工具的介紹來初試啼聲，到 2012 年著重 PHP Framework 的推廣，乃至去年以 PHP  實戰經驗為主的分享，使得我們相信在這三年不斷地挑戰下，各位 PHP 開發者都有很大的成長。</p>
              <p >因此今年我們希望讓將議程廣度擴大，挑戰許多 PHP  開發者平常難以接觸的主題，例如專案管理、 NoSQL 應用與資料庫擴展以及 PHP 網站服務開發心得，讓與會者能得到專案開發與架構上的借鏡。但我們依然會維持過去議程的深度，加入更多  PHP 進階技術，例如官方 PHP 與 Facebook HHVM 兩種引擎在 Extension 上的開發經驗， Framework  的應用技巧等議題。</p>
              <p className={hideClass}>另外 PHP 應用程式的佈署技術，例如 Microsoft Azure 、 Docker  等更是每一位開發者都應該關心的議題。最後我們還邀請到 PHP 核心中國開發成員 Laruence ，分享他在微博上應用 PHP 的開發經驗。想要更深入瞭解 PHP 進階技術，或是如何掌控大型網站架構的朋友，千萬別錯過這些高手們交流的機會。</p>
              <p className={hideClass}>身為台灣最大型的 PHP 研討會，除了議程分享外， PHPConf Taiwan 2014 同時也是企業尋找 PHP 人才的最佳管道；當全台灣 PHP 界的各路英雄好漢都齊聚一堂時，就是各企業秀出手上最棒職務的機會！</p>
              <p className={hideClass}>最後感謝每一家贊助單位的支持，為 PHPConf Taiwan 2014 提供舉辦時所需要的資源與場地。我們將會盡我們一切的努力，來讓今年的 PHPConf Taiwan 更為精采可期！</p>
              <a className={buttonClass} onClick={this.handleClick}>看更多 <i className="fa fa-caret-right"></i></a>
            </div>
          </article>
        </div>
      </section>
    );
  };
};

export default Prospect;
