jQuery(document).ready(function($) {
  $('.burger-btn').click(function(event) {
    $('.sidebar').toggleClass('active');
    $('.navigation').toggleClass('active');
    $('.content').toggleClass('active');
  });
});
