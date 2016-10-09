$(window).scroll(function() {
  var scrollYpos = $(document).scrollTop();
  if (scrollYpos > 207) {
    $("#nav").css({
      'top': '15px',
    });
  }else {
    $("#nav").css({
      'top': '207px',
    });
  }
});

var joey = function myFunction() {
  document.getElementById("myCheck").click();
}

var survey = function myFunction() {
  document.getElementById("survey").click();
}