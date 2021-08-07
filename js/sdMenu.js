/*
2016 01 RWD Course
巨匠電腦鳳山分校 吳蕙方
*/
;(function($){
    //global virable
    var target = $('header'),
        menuElm = $('.menu'),
        opener = $('.menu-opener'),
        targetPos = target.offset().top + (target.height() * 1.3 - $('.menu').height());

    //when virable opener clicked do something
    opener.click(checkStatus);

    function openMenu(){
      menuElm.slideDown(400, 'linear', false);
      opener.addClass('close');
      console.log('menu is open')
    }

    function closeMenu(){
      menuElm.slideUp(400, 'linear', false);
      opener.removeClass('close');
      console.log('menu is close')
      }

    function checkStatus() {
      var o = $('.menu-opener');
      //if virable o, className not is close
      if(!o.is('.close')){
        //match condition, then do something here
        // o.toggleClass('close');
        openMenu();
      }else{
        //not match condition, then do something here
        // o.removerClass('close');
        closeMenu();
      }
    }

    //we hope li a, also could check click even
    menuElm.find('a').click(function(){

      checkStatus();
            //a checkStatus after, when the target at same page,  body scrolling to clicked even a the href's  value.
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
              var target = $(this.hash);
              var posH = $('.menu').height();
       			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top - posH
      				}, 1000);
      				return false;
                  };
                }



    });
    $(window).bind('scroll', function(e){
      if($(window).scrollTop() >= targetPos && opener.hasClass('close')){
        checkStatus();
        return false;
      }
      //return false;
    });

})(jQuery);
