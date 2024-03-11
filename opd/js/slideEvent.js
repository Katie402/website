//釉뚮옖�� �뚭컻
$(document).ready(function(){
		
	//web
	$('.slider-for').slick({
		autoplay: true,
		slidesToShow: 1,
		arrows: true,
		speed: 500,
		asNavFor: '.slider-nav',
		pauseOnHover: true,
	});

	 $('.slider-nav').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   asNavFor: '.slider-for',
	   dots: true,
	   focusOnSelect: true
	 });


	//mobile
	 $('.multiple-items').slick({
		dots: true,
		autoplay: true
	 });



});