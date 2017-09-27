jQuery(document).ready(function($) {
  $('.burger-btn').click(function(event) {
    $('.sidebar').toggleClass('active');
    $('.navigation').toggleClass('active');
    $('.content').toggleClass('active');
  });

  $('.mobile-nav-list-item').click(function(event) {
    localStorage.setItem('clicked-link', event.target.id);
  });

  $('#search-icon').click(function(event) {
    $('.search-box').toggleClass('active');
    $('#search-icon').toggleClass('active');
    $('#search-icon').toggleClass('fa-search');
    $('#search-icon').toggleClass('fa-times');
    $('#search-icon').toggleClass('fa-2x');
  });

  setActiveLink();
});

var setActiveLink = function() {
  var el = (localStorage.getItem('clicked-link'));
  $('#' + el).toggleClass('mobile-nav-list-item-active');
};
