jQuery(function( $ ){ 

	//상단 해더 메뉴
	var container = $( '#header .full_menu' );

	$('#gnb .gnb_list > li, #header .full_menu').mouseover(function() {
		if (container.hasClass('on')) {
			return;
		}
		$('.dim').stop().fadeIn();
		container.stop().slideDown();
		
	})

	.mouseout(function(){
		if (container.hasClass('on')) {
			return;
		}
		$('.dim').stop().fadeOut();
		container.stop().slideUp();
		
	})


	// quick
	$('#quick').css('right','0');
	$('.quick_btn').addClass('close');
	$('.quick_btn').click(function(){
		if($('.quick_btn').hasClass('close')){
			$('.quick_btn').removeClass('close');
			$('#quick').animate({'right':'-120px'}, 300);
			return false;
		}else{
			$('.quick_btn').addClass('close');
			$('#quick').animate({'right':0}, 300);
			return false;
		}
	});

	// top
	$('.top_btn').click(function(){
		$('html, body').animate({scrollTop : 0}, 500);
		return false;
	});

	//패밀리 사이트
	$('.family_site > a').click(function(){
		$('.family_site > ul').slideToggle('fast');
	});


	//이미지팝업창
	$('.img_popup .ico_closed').on('click', function(){
		$('.img_popup').fadeOut();
	});
	
});

