$(document).scroll(function() {
  var offsetY = $(document).scrollTop();
  stickyHeaderAnimate(offsetY);
  stickyImageAnimate(offsetY);
});

function stickyHeaderAnimate(offset) {
  if (offset > 80) { // Approximate height of main header
    $('.stickyHeader').addClass('shown');
  } else {
    $('.stickyHeader').removeClass('shown');
  }
}

function stickyImageAnimate(offset) {
  if (offset > 500) {
    $('.stickyImage').addClass('shown');
  } else {
    $('.stickyImage').removeClass('shown');
  }
}
