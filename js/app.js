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

          bgobj.css({
              backgroundPosition: '50% ' + actualPercent + '%'
          })
      });

      $('.reel-text').on('mouseenter', function() {
          console.log('enter');
          $(this).html('<i class="fa fa-play wow fadeIn"></i>');
      })
      $('.reel-text').on('mouseleave', function() {
          console.log('leave');
          $(this).html('<span class="wow fadeIn scaled">REEL</span>');
      })
  });
  
})();
