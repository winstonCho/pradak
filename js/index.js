$(function() {
    $(".container").on("click", function() {
      var that = $(this);
      if (that.hasClass("is-open")) {
        that.removeClass("is-open").addClass("is-closed");
      } else {
        that.removeClass("is-closed").addClass("is-open");
      }
    });

    $('.fullpage').fullpage({
		//options here
		navigation:true,
		navigationPostion: 'right',
        afterLoad: function(anchorLink,index){
            if(index==2){
                addNum();
            }
            if(index==3){
                addNum1();
            }
            if(index==4){
            $('.s4 .s4_box  div  div').addClass('active');
        }else{
            $('.s4 .s4_box  div  div').removeClass('active');
        }
    }
	});

    
var sw=0;
    $('.stage').click(function() {
        if(sw==0){
            sw=1;
            $(this).addClass("is-open");
            $('.gnb').animate({
                right: 0
            });
        }else{
            sw=0;
            $(this).removeClass("is-open");
            $('.gnb').animate({
                right: '-100%'
            });
        }
    });

    $('nav >  ul > li ').click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).find('.sub').stop().slideUp(300);
            $(this).removeClass('active');
        }
        else {
            $(this).find('.sub').stop().slideDown(300);
            $(this).addClass('active');
        }
    });
  
      var swiper = new Swiper(".mySwiper", {
          autoplay: true,
          loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      });

      //숫자올라가기
      function addNum(){
          $('.addNumber span').each(function(){
          $(this).prop('Counter',0).animate({
            Counter:120093279
          },{
              duration:2000,
              step:function(now){
                var num=numberfn(Math.ceil(now));
                $(this).text(num);
              }
          });
        });
      }
      function numberfn(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    function addNum1(){
        $('.addNumber1 span').each(function(){
        $(this).prop('Counter',0).animate({
          Counter:130
        },{
            duration:2000,
            step:function(now){
              var num=numberfn(Math.ceil(now));
              $(this).text(num);
            }
        });
      });
    }
    function numberfn(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  });