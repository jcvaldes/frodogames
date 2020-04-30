
/*========================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name: Wipp-app landing template
Author: ingenious_team
Version: 1.00
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

========================================================================*/
$(function () {
    "use strict";

    // for navbar background color when scrolling
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $("#back-top-btn");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 10) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }

        if ($scrolling > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });


    //animation scroll js
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });


    // navbar js ends here

    // this is for back to top and sticky menu js
     var bc2top = $('#back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1500);
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


     /* -------------------------------------
	          Preloader				
	 	-------------------------------------- */
    $('.preloader').delay(2500).fadeOut(1000);

    // pop-slick js start here
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 1800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<i class="fas fa-long-arrow-alt-left pre"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right nxt"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }
  ]
    });

    
    
   

});