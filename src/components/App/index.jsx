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
    let title = document.title;
    let $w = $(window);
    let $b = (window.opera) ?
      (document.compatMode === 'CSS1Compat' ? $('html') : $('body')) :
      $('html,body');

    let dispatch = $.event.dispatch || $.event.handle;
    let special = $.event.special;
    let uid = 'D' + (+new Date());

    special.scrollstop = {
      latency: 250,
      setup: function(data) {
        let options = $.extend({
          latency: special.scrollstop.latency
        }, data);

        let timer;
        let handler = function(evt) {
          let args = arguments;

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
      teardown: function() {
        $(this).unbind('scroll', $(this).data(uid));
      }
    };

    $(function() {
      $w.on('hashchange', function () {
        let hash = window.location.hash || '#top-section';
        let $link = $('a[href="' + hash + '"]');
        let pageId = hash.replace('-section', '');
        let subTitle = $link.text() || '首頁';
        let top = ($(pageId).offset() && $(pageId).offset().top) || 0;

        $('nav a').removeClass('active');
        $link.addClass('active');

        $b.animate({
          scrollTop: top
        }, 600, function () {
          $b.scrollTop(top);
        });

        // update title
        document.title = subTitle + ' | ' + title;
        ga('send', 'pageview', {
          'page': 'index.html' + hash,
          'title': document.title
        });
      }).trigger('hashchange');

      $w.on('scrollstop', function() {
        let idx = 0;
        let stop = $w.scrollTop();
        $.each($('.section-block'), (i, sec) => {
          let sectop = parseInt($(sec).offset().top);
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
