import '!style!css!less!./Prospect.less';
import React, { Component } from 'react';
import classnames from 'classnames';
import Img from './bg.jpg';
import Img4 from './bg4.jpg';
import Img5 from './bg5.jpg';

class Prospect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      active: 0,
      count: 0,
      img: [Img, Img4, Img5],
    };
  }

  handleClick = () => {
    this.setState({
      hide: false,
    });
  }

  setTab = (index) => {
    this.setState({
      active: index,
    });
  }

  changeTab = () => {
    const count = this.state.count + 1;
    this.setState({
      count: count,
      active: count % (this.state.img.length),
    });
  }

  componentDidMount = () => {
    this.timer = setInterval(this.changeTab, 5000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    const hideClass = classnames({
      hide: this.state.hide,
      animated: !this.state.hide,
      fadeInLeft: !this.state.hide,
    });
    const buttonClass = classnames('text-btn', {hide: !this.state.hide});
    return (
      <section id="prospect" className="section-block">
        <div className="row">
          <h3>展望</h3>
          <article className="clearfix">
            <div className="carousel">
              <div className="box">
                {this.state.img.map((content, index) => {
                  const className = classnames({
                    active: index === this.state.active,
                  });
                  return <div key={index} className={className} style={{backgroundImage: `url('${content}')`}}></div>;
                })}
              </div>
              <div className="carousel-btn">
                <ul>
                  {this.state.img.map((content, index) => {
                    const className = classnames({
                      active: index === this.state.active,
                    });
                    return <li key={index} onClick={this.setTab.bind(null, index)} className={className}></li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="post" onClick={this.handleClick}>
              <p>今年是 PHP 重要的一年，PHP 7 的推出將大幅的提昇 PHP 的執行效率，讓 PHP 在更多元的應用場景得以伸展拳腳。</p>
              <p>今年我們將議程聚焦在效能與大型架構上，並請到 PHP 的作者 Rasmus 與 PHP 核心成員的 Laruance 來為我們提供第一手的 PHP 資訊並分享極致效能的議題。同時我們也請到了各界的高手來分享實戰經驗，議程橫跨了 Big Data、水平擴充、軟體架構、ORM、Async I/O  等各種核心領域，想要更深入瞭解 PHP 進階技術，或是如何掌控大型網站架構的朋友，千萬別錯過這些高手們交流的機會。</p>
              <p className={hideClass}>身為台灣最大型的 PHP 研討會，除了議程分享外， PHPConf Taiwan 同時也是企業尋找 PHP 人才的最佳管道；當全台灣 PHP 界的各路英雄好漢都齊聚一堂時，就是各企業秀出手上最棒職務的機會！</p>
              <p className={hideClass}>最後感謝每一家贊助單位的支持，為 PHPConf Taiwan 提供舉辦時所需要的資源與場地。我們將會盡我們一切的努力，讓 PHPConf Taiwan 2015 更精采可期！</p>
              <a className={buttonClass}>看更多 <i className="fa fa-caret-right"></i></a>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Prospect;
