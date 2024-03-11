function responsive(){

   var $wh = $(window).width();


   if ($wh <= 640)
   {
	  $("body").removeClass("web");
      $("body").addClass("mobile");
	  $("#main_company .slick-dots").css( "top" , $(".company_slide .fl img").height() - 50 );
	  $("#main_product .container").height($(".product_text").height() + 67 + $(".product_slider").height() + 90);
   }else{
      $("body").removeClass("mobile");
	  $("body").addClass("web");
   }
}
$(function(){
   $( window ).load(function() {
      responsive();
   });
   $( window ).resize(function() {
      responsive();
   });
});

// �뚯씪 �낅줈��
$(document).ready(function () {
    var uploadFile = $('.fileBox .uploadBtn');
    uploadFile.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileName').val(filename);
    });

});

// �ㅻ튌�� 異붽�異붽�
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > $('#header').height()){
			if($('#header').hasClass('scroll')){

			}else{
				$('#header').addClass('scroll');
			}
		}else{
			$('#header').removeClass('scroll');
		}
	});

	$('.all_menu').slideUp();
	if($(window).width() > 1007){
		$('.all_btn').click(function(){
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				$('.all_menu').slideUp();
				$('.depth02').removeClass('all');
			}else{
				$(this).addClass('on')
				$('.all_menu').slideDown();
				$('.depth02').addClass('all');
				$('#header .depth02 > li a').mouseover(function(){
					$(this).parent('li').parent('ul').prev('a').prev('a').addClass('on');
				}).mouseout(function(){
					$(this).parent('li').parent('ul').prev('a').prev('a').removeClass('on');
				});
			}
		});
	}else{
		$('#header nav').height($(window).innerHeight() - 60);
		$('#header nav, #header nav > ul > li .depth02').slideUp();
		$('.all_btn').click(function(){
			if($(this).hasClass('on')){
				$('.model').removeClass('on');
				$(this).removeClass('on');
				$('#header nav').slideUp();
			}else{
				$('.model').addClass('on');
				$(this).addClass('on');
				$('#header nav').slideDown();
			}
		});
		$('#header nav > ul > li a').click(function(){
			if($(this).hasClass('on')){
				$('#header nav > ul > li a').removeClass('on');
				$('#header nav > ul > li .depth02').slideUp();
			}else{
				$('#header nav > ul > li a').removeClass('on');
				$('#header nav > ul > li .depth02').slideUp();
				$(this).addClass('on');
				$(this).next('ul').slideDown();
			}
		});
	}

	if($(window).width() > 1007){
		$('.slider_position').height($('.menu_slider').height() + 60);
	}else if($(window).width() < 1008 && $(window).width() > 600){
		$('.slider_position, .menu_slider').height($('.menu_slider').height() + 100);
	}else if($(window).width() < 401){
		$('.slider_position, .menu_slider').height($('.menu_slider').height() + 220);
	}else{
		$('.slider_position, .menu_slider').height($('.menu_slider').height() + 180);
	}
	$('.menu_thema li a').removeClass('on');
	$('.menu_thema li:first-child a').addClass('on');
	$('.mm_slider').removeClass('on');
	
	$('#menu00').addClass('on');

	$('.menu_thema li a').click(function(){
		$('.menu_thema li a').removeClass('on');
		$(this).addClass('on');
		$('.mm_slider').removeClass('on');
		$($(this).attr('href')).addClass('on');
		return false;
	});
});
