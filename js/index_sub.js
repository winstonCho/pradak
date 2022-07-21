$(function(){
    var win_width=$(window).width();
    if(win_width>1024){
        $('header nav > ul li').hover(function(){
            $(this).find('.sub').stop().fadeIn();
        },function(){
            $(this).find('.sub').stop().fadeOut();
        });

    }else{
        $('.mobile_nav .mobile_nav_in nav> ul > li ').click(function(){
            if($(this).attr('class') != 'active'){
                $('.mobile_nav .mobile_nav_in nav > ul > li ').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav .mobile_nav_in nav > ul > li .sub').stop().slideUp();
                $(this).find('.sub').stop().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        $('header .hbg ').click(function(){
            $('header .mobile_nav ').animate({
                right:0
            });
        });
        $('header .mobile_close ').click(function(){
            $('header .mobile_nav ').animate({
                right:('-100%')
            });
        });
       
    }

    $('.contents li').on('mouseenter',function(){
        var $child = $(this).find('.li_bg');
        var duration=0.5;
        var delay=0.1;
        TweenMax.to($child, duration, {
            scaleY:1.5, ease:Expo.easeOut
        });
        TweenMax.to($child, duration, {
            scaleX:1.2, scaleY:1, ease:Back.easeOut,
            easeParms:[3], delay:delay
        });
        TweenMax.to($child, duration*1.25, {
            scaleX:1, scaleY:1, ease:Back.easeOut,
            easeParms:[6], delay:delay*3
        });
    });

 
      // top버튼 클릭하면 맨 위로 이동하게 하기
    
    $(".top").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
      setInterval(header_color,1);
      function header_color(){
          if($('body').hasClass('fp-viewing-0')===true){
              $('header').removeClass('active');
          }else{
              $('header').addClass('active');
          }
      }
});