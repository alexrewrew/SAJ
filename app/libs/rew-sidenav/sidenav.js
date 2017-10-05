$(window).on("load resize",function(){
    "use strict";
    if (window.matchMedia("(max-width: 767px)").matches) {
        $("nav").prependTo("body");
        $(".nav-panel").prependTo("body");
    } else {
        $("nav").prependTo("header");
        $(".nav-panel").appendTo("nav .container .row");
    }
});

$(document).ready(function () {
    "use strict";
    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("body").toggleClass("open");

        if($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    $("main").click(function () {
        if ($('body').hasClass("open")) {
            $('body').toggleClass("open");
            $("#menu-trigger").toggleClass("open");
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

    if (window.matchMedia("(max-width: 767px)").matches) {

        $(".menu li a").click(function () {
            $("body").toggleClass("open");
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        });

    }
});