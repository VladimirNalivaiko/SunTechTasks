jQuery(document).ready(function($) {
  $('.burger-btn').click(function(event) {
    $('.sidebar').toggleClass('active');
    $('.navigation').toggleClass('active');
    $('.content').toggleClass('active');
  });

  $('.mobile-nav-list-item').click(function(event) {
    localStorage.setItem('clicked-link', event.target.id);
  });

  setActiveLink();
});

var searchClick = function(event) {
  $('.search-box').toggleClass('active');
  $('#search-icon').toggleClass('active');

  var icon = document.getElementById('search-icon');

  icon.classList.toggle('fa-search');
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-2x');
}

var setActiveLink = function() {
  var el = document.getElementById(localStorage.getItem('clicked-link'));
  if(el !== null){
    el.classList.add('mobile-nav-list-item-active');
  }
};
