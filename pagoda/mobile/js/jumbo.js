// 공통 - selectBox
$(".toggleBtn a").click(function(){
	$(this).parent().next(".toggleBox").slideToggle();
	$(this).parent().next(".toggleContBox").slideToggle();
	$(this).parent().toggleClass('on');
});

//이미지 로딩 효과
var effect;
effect = {
	gap : 200,
	call : function(pos){
		var items,
			ex,
			items_top,
			action_top,
			ex_top,
			before_item_top;

		action_top = (pos + $(window).outerHeight()) - effect.gap;

		ex = $('.action');
		items = $('.effect').not(ex);
		if(items.length > 0){
			$.each(items, function(index){
				var this_class;

				items_top = $(this).offset().top;
				this_class = $(this).attr('class');
				ex_top = 0;
				if(this_class.indexOf('type-top') > -1){
					ex_top = -100;
				}else if(this_class.indexOf('type-scale') > -1){
					ex_top = -450;
				}else if(this_class.indexOf('type-bottom') > -1){
					ex_top = 100;
				}

				action_top += ex_top;

				if(action_top >= items_top){
					$(this).addClass('action');
					before_item_top = items_top;
				}
			});
		}
	}
}

$(window).on('scroll load', function(){
	var pos;

	pos = $(this).scrollTop();
	effect.call(pos);
});

//앵커이동
function fnMove(){
	var offset = $('#move-lectureList').offset();
	$('html, body').animate({scrollTop : offset.top - 168}, 500);
}

$(document).ready(function() {

	//탑 비주얼
	$(window).on('load', function(){
		$('.top_visual').addClass('action');
	});

	//점보 커리큘럼 - 숫자 카운터
	var count = 1; //초기화
	var idx = 1; //초기화
	function weekChange(){
		var numTxt = $('.sec_curri .curri_num_box ul li'),
			curriImg = $('.sec_curri .curri_box ul li');

		numTxt.removeClass('on');
		numTxt.eq(count).addClass('on');
		curriImg.removeClass('on');
		curriImg.eq(idx).addClass('on');

		count ++;
		if(count >= numTxt.length) {
			count= 0;
		}
		idx ++;
		if(idx >= curriImg.length) {
			idx= 0;
		}
	}
	setInterval(weekChange, 2000);


	//혜택 - 기본형/관리형 팝업창
	popComm = {
		$dim : $('.campaign_dim'),
		speed : 200,
		dim_call : function(state){
			if(state){
				popComm.$dim.fadeIn(popComm.speed);
			}else{
				popComm.$dim.fadeOut(popComm.speed);
			}
		},
		call : function(id, state){
			var layer, posY;

			layer = $('#' + id);
			if(state){
				popComm.dim_call(true);
				layer.fadeIn(popComm.speed);

				posY = ($(window).scrollTop() + ($(window).outerHeight() / 2)) - 53;
				layer.css('top', posY + 'px');
			}else{
				if($('.campaign_popup').not(':hidden').length < 2){
					popComm.dim_call(false);
				}
				layer.fadeOut(popComm.speed);
			}
		}
	}

	//이벤트 쿠폰
	setInterval(function() { //조명 반복 켜짐
		if ($('.sec_event .event_box').hasClass('on')){ //hover 시 이벤트 return
			return false;
		}
		$('.sec_event .redweek_box .light').toggleClass('on');
		$('.sec_event .redweek_box .light_off').toggleClass('on');
	}, 1000);

	//이벤트 쿠폰팝업 열기
	$('.sec_event .event_box').click(function(){
		$(this).addClass('on');
		$(this).parents().find('.light').addClass('on');
		$(this).parents().find('.light_off').removeClass('on');
		$('.event_dim').addClass('on');
	});

	//이벤트 쿠폰팝업 닫기
	$('.sec_event .event_dim').click(function(){
		$('.event_box, .event_dim').removeClass('on');
		$(this).parents().find('.light').addClass('on');
		$(this).parents().find('.light_off').removeClass('on');
	});

	//강사 라인업
	var tab = $('.sec_lineup .lineup_tab li'),
		box = $('.sec_lineup .lineup_thumbs');

	tab.each(function(idx, item) {
		$(item).click(function(){
			tab.removeClass('on').eq(idx).addClass('on');
			box.removeClass('on').eq(idx).addClass('on');
		});
	});

	//생생후기 - 다이얼 형태
	var dial;
	dial = {
		$wrap : $('.sec_review .dial_nav'),
		$nav : $('.sec_review .dial_nav a'),
		active_num : 3,

		call : function(obj){
			var idx, curr_idx, deg, a_deg;

			dial.$wrap.find('.active').removeClass('active');
			obj.addClass('active');

			idx = obj.closest('li').index();
			curr_idx = idx - dial.active_num;
			a_deg = curr_idx*6;
			deg = (a_deg < 0) ? Math.abs(a_deg) : a_deg * (-1);
			console.log(curr_idx);
			dial.$wrap.css({
				'transform' : 'rotate(' + deg + 'deg)',
			});
			dial.$nav.css({
				'transform' : 'rotate(' + a_deg + 'deg)',
			});
		}
	}
	dial.$nav.on('click', function(){
		dial.call($(this));
		return false;
	});

	//생생후기 - 슬라이더
	var swiperArr = [];
	$(".sec_review .lect_sliderCont").each(function(index,item){
		$(item).addClass("lect_sliderCont" + index);

		if ( $(item).find('.swiper-slide').length > 1 ){
			swiperArr[index] = new Swiper(item, {
				slidesPerView: 2,
				spaceBetween: 7,
				slidesPerGroup : 2,
				fade: true,
				/*allowTouchMove: false,*/
				// autoHeight: true,
				autoplay:{
					delay: 2000,
					disableOnInteraction: false,
				},
				speed: 500,
				loop:true,
				observer: true, //초기화
				observeParents: true, //초기화
				observeSlideChildren:true,
				// pagination: { el: $(item).find('.swiper-pagination').get(0), clickable: true },
				navigation: {
					prevEl: $(item).parents('.lect_sliderWrap').find('.swiper-button-prev').get(0),
					nextEl: $(item).parents('.lect_sliderWrap').find('.swiper-button-next').get(0),
				},
			});
		} else if ( $(item).find('.swiper-slide').length >= 2 ) {
			swiperArr[index] = new Swiper(item, {
				touchRatio: 0,
			});
		}
	});

	// 슬라이드에 마우스 오버시 멈춤 (just in case!)
	// $(".sec_review .lect_sliderCont").each(function(elem, target){
	// 	var swp = target.swiper;
	// 	$(this).hover(function() {
	// 		swp.autoplay.stop();
	// 	}, function() {
	// 		swp.autoplay.start();
	// 	});
	// });

	//탭 클릭 시 슬라이드 열기
	$(".sec_review .dial_nav a").on("click", function(e){
		e.preventDefault();
		swiperArr.forEach(function (item, index) {
			item.autoplay.stop();
		});

		$(".sec_review .dial_nav a").parent("li").removeClass("active");
		$(this).parent().addClass("active");
		var tabIndex = $(this).parent("li").index();
		console.log(`lect_sliderWrap${tabIndex}`)
		$(`.lect_sliderWrap${tabIndex}`).addClass("active").siblings().removeClass("active");

		swiperArr[tabIndex].autoplay.start();
	});

});