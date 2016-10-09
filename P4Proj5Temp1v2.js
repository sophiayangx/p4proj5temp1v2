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





//var submitButton = $("submit-button")
//submitButton.click(function() {	
//  $("#list-display").getElementbyId("");
//});
//
//function() {
//  document.getElementById("submit-button").click();
//}