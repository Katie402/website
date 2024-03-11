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

// 파일 업로드
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

// 자연과 사람들 추가추가
$(function(){
	//일반메뉴
	if($(window).width() > 641){
		$("#gnb, .gnb_box").mouseover(function(){
			$("#header").stop().animate({'height':320},300);
			$("#header").addClass("on");
		}).mouseleave(function(){
			$("#header").stop().animate({'height':100},300);
			$("#header").removeClass("on");
		});
	}else{
		
	}
	$(".gnb_list > li").mouseover(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
	});
	$(".depth_list").mouseover(function(){
			$(this).parent().addClass("on");
		}).mouseleave(function(){
			$(this).parent().removeClass("on");
		});
	
	// 전체메뉴
	$(".menu_slist").slideUp();
	$(".all_box").hide();
	$(".all_btn").click(function(){
		$("html").toggleClass("allgnb_on");
		
		$(this).toggleClass("on");
		$(".all_box, .gnb_box").toggleClass("open").show();
		$("#all_menu").width($(window).width()).height($(window).innerHeight() - 104);
		$(".gnb_list").toggleClass("hide");
		if($("html").hasClass("allgnb_on")){
			$(".menu_detail").show();
			$(".menu_detail > li:nth-child(1) > a").delay( 100 ).animate({"left":"0", "opacity":"1"}, 1000);
			$(".menu_detail > li:nth-child(2) > a").delay( 300 ).animate({"left":"0", "opacity":"1"}, 1000);
			$(".menu_detail > li:nth-child(3) > a").delay( 500 ).animate({"left":"0", "opacity":"1"}, 1000);
			$(".menu_detail > li:nth-child(4) > a").delay( 700 ).animate({"left":"0", "opacity":"1"}, 1000);
			$(".menu_detail > li:nth-child(5) > a").delay( 900 ).animate({"left":"0", "opacity":"1"}, 1000);
		}else{
			
			$(".menu_detail > li > a").delay( 550 ).animate({"left":"-300px", "opacity":"0"}, 100);
			$(".menu_detail > li").removeClass("on");
			$(".menu_detail").hide();
			$(".menu_slist").hide();
			$(".all_box").show().delay( 550 ).fadeOut();
			
		}
		
	});

	$(".menu_detail > li").click(function(){
		$(".menu_detail > li").removeClass("on");
		$(this).addClass("on");
		$(".menu_slist").slideUp();
		$(this).children("ul").delay( 750 ).slideDown(500);
	});
	
	//서브메뉴 슬라이드
	$(".sub_menu").slideUp();
	$(".sub_gnb li").click(function(){
		$(".sub_menu").slideUp();
		$(this).children(".sub_menu").slideToggle();
	});

	//패밀리사이트 오픈오픈
	$(".select_box ul").hide();

	$(".select_box > a").click(function(){
		if($(".select_box ul").css("display") == "block" ){
			$(".select_box ul").hide();
		}else{
			$(".select_box ul").show();
		}
	});

	
});