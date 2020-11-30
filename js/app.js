(function(){
  'use strict';

  new WOW().init();

  var nav = $('.navbar');
  function scrollClass() {
      nav.toggleClass('scrolled', $(window).scrollTop() >= 150);
  }
  $(window).scroll(scrollClass);
  scrollClass();
  
})();
