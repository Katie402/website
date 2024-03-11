/* scroll event*/
$(function(){
	var aniBox = $('.ani_box'); 

	aniBox.each(function(){
	var _this = $(this);

	$(window).scroll(function(){
	  if($(window).width()){
		if($(window).scrollTop() > ( _this.offset().top - $(window).height() + ( $(window).height()/4 )  ) ){
			_this.addClass('active');
		}
	  }
	});

  });

});