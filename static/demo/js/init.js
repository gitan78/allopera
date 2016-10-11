window.onload = function()
{
	// GALLERIA MASONRY
	var $container = $('#masonry-grid');
    $container.masonry({
      columnWidth: '.item',
      itemSelector: '.item',
 });
}
$(document).ready(function() {
    $('.modal-trigger').leanModal();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('select').material_select();
    $('.materialboxed').materialbox();
    $(".dropdown-button").dropdown();
	// PRELOADER
	setTimeout(function() {
		$('body').addClass('loaded');
	}, 1500);
});
//SCROLLTO GSAP
$(function() {
	var section1Btn = document.getElementById("section1Btn");
	var para = $(".parallax");
	section1Btn.onclick = function() {
		TweenLite.to(window, 1, {
			scrollTo : {
			    autoAlpha:1,
				offsetY : 70,
                ease: Expo.easeIn,
				y:"#section1",
			}
		});
	}
});
//FADE PARALLASSE E SEZIONE INTRO
$(window).scroll(function() {
    var top = $(window).scrollTop();
    var para = $(".parallax");
    var sect = $("#section1");
    var nav = $("#test");
    var side = $(".side-nav");
/*	if (top >= 120) {
	TweenLite.to(side, 1, {
	top:"-15px",
	});
	}
	if (top <= 120) {
	TweenLite.to(side, 1, {
	top:"0",
	});
	}
    if (top <= 120) {
	TweenLite.to(nav, 0.5, {
	scaleY : 1,
	autoAlpha:1,
	transformOrigin: "center top"
	});
    }
	if (top >= 120) {
	TweenLite.to(nav, 0.8, {
	scaleY : 0.8,
	autoAlpha:0.8,
	transformOrigin: "center top",
	});
	}
    if (top <= 800) {
	TweenLite.to(sect, 1, {
	autoAlpha : 0
	});
        }
    if (top >= 921) {
	TweenLite.to(sect, 2, {
	autoAlpha : 1
	});
        }*/
    if (top <= 640) {
	TweenLite.to(para, 2.5, {
	autoAlpha : 1
	});
        }
    if (top >= 641) {
	TweenLite.to(para, 2.5, {
	autoAlpha : 0
	});
    }
    });
// ANIMAZIONI GSAP
(function($) {
	// ANIMAZIONI BASE TWEENLITE
	var body = $(".body");
	TweenLite.to(body, 3.5, {
		autoAlpha : 1
	});
	var pages = $(".pages");
	TweenLite.to(pages, 3.5, {
		delay : 1.5,
		autoAlpha : 1
	});
	var logo_preloader = $("#logo-preloader");
	TweenLite.to(logo_preloader, 2.2, {
		y : 150,
		autoAlpha : 1
	});
		var introbtn = $("#introbtn");
	TweenLite.to(introbtn, 2.2, {
		delay : 3.2,
		y : 120,
		autoAlpha : 1
	});
	var intro = $("#intro");
	TweenLite.to(intro, 3.7, {
		delay : 1.7,
		y : 150,
		autoAlpha : 1
	});
	var intro = $("#navi");
	TweenLite.to(navi, 3.5, {
		delay : 2.5,
		autoAlpha : 1
	});
// HOVER MENU
    $(".nav-items").hover(over, out);
    function over(){
      TweenMax.to(this, 0.1, {backgroundColor:"#ef5350"})
      TweenMax.to($(this).find("span"), 0.3, {color:"white", scale:3, delay:0.1})
    }
    function out(){
      TweenMax.to(this, 0.3, {backgroundColor:"white"})
      TweenMax.to($(this).find("span"), 0.3, {color:"#525b5c", scale:1, x:0, overwrite:"all"})
    }
})(jQuery);
// HOVER GALLERIA HOME E PERSONE
    var boxes = document.querySelectorAll('.box');

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.height = boxes[i].offsetWidth + 'px';
      boxes[i].addEventListener("mouseenter", function(e) {
        TweenMax.to(e.target.querySelector('img'), 1, {
          scale: "1.15"
        });
      });
      boxes[i].addEventListener("mouseleave", function(e) {
        TweenMax.to(e.target.querySelector('img'), 1, {
          scale: "1"
        });
      });
}

