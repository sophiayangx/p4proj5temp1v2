$(window).scroll(function() {
  var scrollYpos = $(document).scrollTop();
  if (scrollYpos > 290) {
    $("#nav").css({
      'top': '15px',
    });
  }else {
    $("#nav").css({
      'top': '290px',
    });
  }
});