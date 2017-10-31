$(document).ready(function () {
    "use strict";

    $('#menu-sub-trigger').click(function () {
        $(this).toggleClass('open');
        $('.nav-secondary').toggleClass('open')
        $('nav').toggleClass('nav-white');
    });

    $('#menu-trigger').click(function () {
        $(this).toggleClass('open');
        $('.nav-panel').slideToggle();
        $('.nav-panel-2').slideToggle();
        $('body, html').toggleClass('open')
        if ($('.nav-secondary').hasClass('open')) {
            $('.nav-secondary').removeClass('open');
        }
        if ($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) { // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    //CHOSEN
    $(".chosen-select").chosen({disable_search_threshold: 100});
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});


    // MODAAL PLUGIN
    $(".inline").modaal();

    // SLIDER
    $(".slider").slick({
        slide: ".service-container",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    $(".slider-header").slick({
        slide: ".slide",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    $('.slider-special').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $(".slider-big").slick({
        slide: ".order-service",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });


    $(function () {
        $("#accordion").accordion({
            heightStyle: "content"
        });
    });


    // SCROLLING
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('nav.nav-index.nav-transparent').removeClass('nav-transparent')
        }
        else {
            $('nav.nav-index').addClass('nav-transparent')
        }
    });

    $('#button-univer').click(function (e) {
        e.preventDefault();
        $('.university').toggleClass('open');
    })

    $('#tab-change').click(function (e) {
        e.preventDefault();
        $('.tab-about').toggleClass('open');
        $('.tab-map').toggleClass('open');
        $(this).toggleClass('open');
    })

});

// !!! RESPONSIVE SCRIPTS !!!

$(window).on('load resize', function () {
    'use strict';
    if (window.matchMedia("(max-width: 767px)").matches) {
        $("#accordion2").accordion({
            heightStyle: "content",
            collapsible: true
        });
    } else if (window.matchMedia("(min-width: 768px)").matches) {

    }
});


