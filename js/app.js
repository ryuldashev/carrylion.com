(function(){
  'use strict';

  new WOW().init();

  var nav = $('.navbar');
  function scrollClass() {
      nav.toggleClass('scrolled', $(window).scrollTop() >= 150);
  }
  $(window).scroll(scrollClass);
  scrollClass();

  $('.reel-link').each(function(){
      var wHeight = $(window).height();
      var bgobj = $(this);
      var startPercent = 35;

      $(window).scroll(function() {
          var yPos = $(window).scrollTop();
          var actualPercent;

          actualPercent = startPercent + (yPos / wHeight * 100 / 2.5);
          console.log(actualPercent);

          bgobj.css({
              backgroundPosition: '50% ' + actualPercent + '%'
          })
      });
  });
  
})();
