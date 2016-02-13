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


$('.mail').hover(function(){
  $('.hand').toggleClass('write');
  // $('.hand').toggleClass('hand write');
});

$('.linkedin, .twitter, .dribbble, .instagram').hover(function(){
  $('.hand').toggleClass('righthand');
});

$('.button').hover(function(){
  $('.hand').toggleClass('victory');
});

count = 0

$('document').ready(function(){
	
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://player.vimeo.com'],iframe[src^='https://player.vimeo.com'],iframe[src^='//player.vimeo.com'], iframe[src^='http://www.youtube.com, iframe[src^='https://www.youtube.com'],iframe[src^='//www.youtube.com']"),

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