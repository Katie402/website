


$(document).ready(function(){
	
	var win_w = $(window).width();
	var phone = 500;
	var tablet = 767;
	
	//모바일 푸터 협력사 슬라이드


	//if( win_w <= tablet ){ 
		slider = $('.mo_co_oper').bxSlider({
			minSlides: 1,
			maxSlides: 10,
			slideWidth: 100,
			slideMargin: 10,
			ticker: true,
			tickerHover: true,
			useCSS: false,
			speed: 50000
		});
	//}

	$(window).on('resize', function(){ 
		slider.reloadSlider();
	});

	
	


});