(function ($) {

    "use strict"
    $(document).ready(function () {

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // magnific popup
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

    });

    $(window).on('scroll', function () {

        // navbar fixed
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

        // scroll top
        var ScrollTop = $('.scroll-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // scroll top 
        $(".scroll-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });       

    });

})(jQuery);
