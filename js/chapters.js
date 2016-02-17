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
  // $('.hand').toggleClass('hand write');
});

$('.linkedin, .twitter, .dribbble, .instagram').hover(function(){
  $('.hand').toggleClass('righthand');
});

$('.button').hover(function(){
  $('.hand').toggleClass('victory');
});

$(document).ready(function() {
    $('.gridscores .ipad, .gridscores .apple-watch-container, .awwesome .ipad, .branding picture, .mobile .iphone, .intranet .ipad, .intranet figure, .lily .ipad, .talk figure').addClass("hidden");
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
  $('.gridscores .apple-watch-container').each(function(){
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
