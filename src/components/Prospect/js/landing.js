//Navigation Bar Shrink on scroll
$(window).scroll(function() {
    parallax();
    var windscroll = $(window).scrollTop();
    if (windscroll >= 600) {
        $('#homeLogo').fadeIn();
        $('#homeNav').css({
            'background-color': '#fff',
            'border-bottom': '1px solid #EC21AC'
        });


    } else {
        $('#homeLogo').fadeOut();
        $('#homeNav').css({
            'background-color': '#transparent',
            'border-bottom': 'none'
        });

    }

}).scroll();

//Parallox Scrolling Controll

function parallax() {
    var scrolled = $(window).scrollTop();
    $('#landing .content').css('opacity', 1 - (scrolled * 0.003));
    $('#prospect').css('margin-right', -(scrolled * 0.5) + 'px');
    $('.article').css('margin-right', (scrolled * 1) + 'px');
}



//Smooth Scrolling
$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 500);
                return false;
            }
        }
    });

});