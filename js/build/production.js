jQuery(function ($) { // Document Ready (important!)

  // Get the video element that we wish to control
  var iframe = document.getElementById('thevideo');

  // Initialize Froogaloop (linked .js.min file) on the captured video
  var player = $f(iframe);

  // When a link with a class of "timecode" is clicked, capture the event
  $('.timecode').on('click', function (e) {
    // Prevent the default link (typically a hash) from executing
    e.preventDefault();
    // Get the location value from the HTML5 data parameter
    var seekVal = $(this).attr('data-seek');
    // Using Froogaloop, trigger the SeekTo method using the captured value
    player.api('seekTo', seekVal);
  });

});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// The hand

$('.mail').hover(function(){
  $('.hand').toggleClass('write');
  $('.hand i').toggleClass('bounceIn animated');
});

$('.linkedin, .twitter, .dribbble, .instagram').hover(function(){
  $('.hand').toggleClass('righthand');
});

$('.button').hover(function(){
  $('.hand').toggleClass('victory');
});

$(document).ready(function() {
    $('.gridscores .ipad, .gridscores .iwatch, .awwesome .ipad, .branding picture, .mobile .iphone, .intranet .ipad, .intranet figure, .lily .ipad, .talk figure').addClass("hidden");
});

// Animation

var myEfficientFn = debounce(function() {
	// All the taxing stuff you do

$(window).scroll(function() {

  var topOfWindow = $(window).scrollTop();
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  $('gridscores .ipad').each(function(e) {
      if(!isMobile) {
          e.preventDefault();
          $(this).addClass("fadeInLeft");
      }
  });

  $('.gridscores .ipad').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInLeft");
    }
  });
  $('.gridscores .iwatch').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInLeft");
    }
  });
  $('.awwesome .ipad').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInUp");
    }
  });
  $('.branding picture').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+900) {
      $(this).addClass("fadeIn");
    }
  });
  $('.mobile .iphone').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+900) {
      $(this).addClass("fadeInLeft");
    }
  });
  $('.intranet .ipad').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInRight");
    }
  });
  $('.intranet figure').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });
  $('.lily .ipad').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeInLeft");
    }
  });
  $('.talk figure').each(function(){
  var imagePos = $(this).offset().top;
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });
});

}, 100);

window.addEventListener('scroll', myEfficientFn);

count = 0

$('document').ready(function(){

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='//player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com']");

	// The element that is fluid width
	$fluidEl = $("article");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
		.data('aspectRatio', this.height / this.width)
		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

		var newWidth = $fluidEl.width();

		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

		var $el = $(this);
		$el
			.width(newWidth)
			.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();
});
