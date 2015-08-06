import '!style!css!less!./App.less';
import React, { Component } from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Footer from '../Footer';
import About from '../About';
import SignUp from '../SignUp';
import Prospect from '../Prospect';
import Speaker from '../Speaker';
import Schedule from '../Schedule';
import Location from '../Location';
import Sponsor from '../Sponsor';

class App extends Component {

  componentDidMount() {
    const title = document.title;
    const $w = $(window);
    let $b = document.compatMode === 'CSS1Compat' ? $('html') : $('body');
    $b = window.opera ? $b : $('html, body');

    const dispatch = $.event.dispatch || $.event.handle;
    const special = $.event.special;
    const uid = 'D' + (+new Date());

    special.scrollstop = {
      latency: 250,
      setup: function setup(data) {
        const options = $.extend({
          latency: special.scrollstop.latency,
        }, data);

        let timer;
        const handler = function handler(evt) {
          const args = arguments;

          if (timer) {
            clearTimeout(timer);
          }

          timer = setTimeout(() => {
            timer = null;
            evt.type = 'scrollstop';
            dispatch.apply(this, args);
          }, options.latency);
        };

        $(this).bind('scroll', handler).data(uid, handler);
      },
      teardown: () => {
        $(this).unbind('scroll', $(this).data(uid));
      },
    };

    $(() => {
      $w.on('hashchange', function hashchange() {
        const hash = window.location.hash || '#top-section';
        const $link = $('a[href="' + hash + '"]');
        const pageId = hash.replace('-section', '');
        const subTitle = $link.text() || '首頁';
        const top = ($(pageId).offset() && $(pageId).offset().top) || 0;

        $('nav a').removeClass('active');
        $link.addClass('active');

        $b.animate({
          scrollTop: top,
        }, 600, () => {
          $b.scrollTop(top);
        });

        // update title
        document.title = subTitle + ' | ' + title;
        ga('send', 'pageview', {
          'page': 'index.html' + hash,
          'title': document.title,
        });
      }).trigger('hashchange');

      $w.on('scrollstop', () => {
        let idx = 0;
        const stop = $w.scrollTop();
        $.each($('.section-block'), (i, sec) => {
          const sectop = parseInt($(sec).offset().top, 10);
          if (stop >= sectop) {
            idx = i + 1;
          }
        });

        $('nav a').removeClass('active');
        $('nav a').eq(idx).addClass('active');
      }).trigger('scrollstop');
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <SignUp />
        <Prospect />
        <Speaker />
        <Schedule />
        <Location />
        <About />
        <Sponsor />
        <Footer />
      </div>
    );
  }
}

export default App;
