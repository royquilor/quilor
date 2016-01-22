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