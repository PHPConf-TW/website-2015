/*global $:false, ga:false */

(function(w, d) {
  'use strict';

  var title = document.title;
  var $w = $(w);
  var $g = $('nav');
  var $b = (window.opera) ?
    (document.compatMode === 'CSS1Compat' ? $('html') : $('body')) :
    $('html,body');

  $(function() {
    $g.on('click', function(e) {
      $(window).trigger('hashchange');
    });

    $w.on('hashchange', function (e) {
      var hash = window.location.hash || '#top-section',
        $link = $('a[href="' + hash + '"]'),
        pageId = hash.replace('-section', ''),
        subTitle = $link.text() || '首頁',
        top = $(pageId).offset().top || 0;

      $('nav a').css('border-bottom', '0px');
      $link.css('border-bottom', '1px solid #fff');

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
  });

  $w.scroll(function(event) {
    var scroll = $w.scrollTop();
    // Do something
    if (scroll > 400) {
      $g.addClass('show');
      $('nav img').hide();
      $('#banner').css('margin-top', '400px');
    } else {
      $g.removeClass('show');
      $('nav img').show();
      $('#banner').css('margin-top', '0');
    }
  });
})(window, document);
