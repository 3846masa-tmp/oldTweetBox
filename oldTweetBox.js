setTimeout(function fixToPosition() {
  if ($('#timeline > .timeline-tweet-box').length === 1) {
    $('.timeline-tweet-box').appendTo($('.DashboardProfileCard-content'));
    $('.top-timeline-tweet-box-user-image').hide();
    $('.stream-container').css({"border-radius": "4px 4px 0 0", "overflow": "hidden"});
  }
  setTimeout(fixToPosition, 100);
}, 100);
