(function ($) {
"use strict";

// preloader
function loader() {
	$('#ctn-preloader').addClass('loaded');
	$("#loading").fadeOut(500);
	// Una vez haya terminado el preloader aparezca el scroll

	if ($('#ctn-preloader').hasClass('loaded')) {
		// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
		$('#preloader').delay(900).queue(function () {
			$(this).remove();
		});
	}
}

$(window).on('load', function () {
	loader();
	wowAnimation();
});


// WOW active
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

// isotope
$('.page-active').imagesLoaded(function () {
    var $grid = $('.page-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
			columnWidth: '.grid-sizer'
        }
    })
});


})(jQuery);