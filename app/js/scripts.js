/**
 * Created by alexrewrew on 09.09.17.
 */

$(document).ready(function () {
    "use strict";

    $('#menu-sub-trigger').click(function () {
        $(this).toggleClass('open');
        $('.nav-secondary').toggleClass('open')
    });

    $('#menu-trigger').click(function () {
        $(this).toggleClass('open');
        $('.nav-panel').slideToggle();
        $('.nav-panel-2').slideToggle();
        if ($('.nav-secondary').hasClass('open')) {

            $('.nav-secondary').removeClass('open');
        }
        if($(this).hasClass('open')) {
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
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
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

    // FULL PAGE PLUGIN
    // $('#fullpage').fullpage();

    // SLICK SLIDER COUNTER
    // $('.slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.slider-counter').text(i + '/' + slick.slideCount);
    // });

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

    // OWL CAROUSEL PLUGIN
    // $(".owl-carousel").owlCarousel();

    // MAGNIFIC POPOUP
    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image'
    // });

    // WOW JS
    // new WOW().init();

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

    // ANCHOR LINKS
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });
});

// !!! RESPONSIVE SCRIPTS !!!

// $(window).on('load resize', function() {
//     'use strict';
//     if (window.matchMedia("(max-width: 767px)").matches) {
//
//     }
//     if (window.matchMedia("(min-width: 768px)").matches) {
//
//     }
// });


