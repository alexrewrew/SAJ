$(document).ready(function(){"use strict";function e(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function o(o){if(i[o.keyCode])return e(o),!1}function n(){window.addEventListener&&window.addEventListener("DOMMouseScroll",e,!1),window.onwheel=e,window.onmousewheel=document.onmousewheel=e,window.ontouchmove=e,document.onkeydown=o}function s(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",e,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}$("#menu-sub-trigger").click(function(){$(this).toggleClass("open"),$(".nav-secondary").toggleClass("open")}),$("#menu-trigger").click(function(){$(this).toggleClass("open"),$(".nav-panel").slideToggle(),$(".nav-panel-2").slideToggle(),$(".nav-secondary").hasClass("open")&&$(".nav-secondary").removeClass("open"),$(this).hasClass("open")?n():s()});var i={37:1,38:1,39:1,40:1};$(".chosen-select").chosen({disable_search_threshold:100}),$(".inline").modaal(),$(".slider").slick({slide:".service-container",nextArrow:"<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",prevArrow:"<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".slider-header").slick({slide:".slide",nextArrow:"<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",prevArrow:"<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",slidesToShow:1,slidesToScroll:1,dots:!0}),$(".slider-special").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,nextArrow:'<i class="fa fa-angle-right"></i>',prevArrow:'<i class="fa fa-angle-left"></i>',responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".slider-big").slick({slide:".order-service",nextArrow:"<div class='arrow arrow-right'><i class='fa fa-long-arrow-right'></i></div>",prevArrow:"<div class='arrow arrow-left'><i class='fa fa-long-arrow-left'></i></div>",slidesToShow:1,slidesToScroll:1,dots:!1}),$(function(){$("#accordion").accordion({heightStyle:"content"})}),$(window).scroll(function(){$(this).scrollTop()>200?$("nav.nav-index.nav-transparent").removeClass("nav-transparent"):$("nav.nav-index").addClass("nav-transparent")}),$("#button-univer").click(function(e){e.preventDefault(),$(".university").toggleClass("open")}),$("#tab-change").click(function(e){e.preventDefault(),$(".tab-about").toggleClass("open"),$(".tab-map").toggleClass("open"),$(this).toggleClass("open")})});