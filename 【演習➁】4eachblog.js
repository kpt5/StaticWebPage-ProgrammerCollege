    $(document).ready(function () {
      //      $('#slider').bxSlider();
      //      var windowWidth = jQuery(window).width();
      var windowWidth = jQuery('#slider_company').width();
      //      var windowWidth = jQuery('header').width();
      var width = windowWidth / 2;
//      var width = windowWidth;
      $('#slider').bxSlider({
        auto: true,
        //        mode: 'fade',
        //        ↓横スライド方式
        mode: 'horizontal',
        speed: 2000,
        //        slideWidth: デフォルト：0,
        //        slideWidth: 400,
//        slideWidth: width,
      });
    });
