//170417 wj 추가
$(function() {

	//말줄임 추가
	//$(".dotdotdots").dotdotdot();
	//우측 퀵메뉴 D-day영역 롤링
	//1개 이상일때만 호출
	if($('.test_day .slide_day .day_con').length > 1) {
		var slide_day_re = $('.test_day .slide_day').bxSlider({
			slideWidth: 118
		});

		$('.test_day .bx-prev').click(function() {
			ga('send', 'event', '우측 바-시험일정', 'click', '우측 바-시험일정-좌측버튼');
		});

		$('.test_day .bx-next').click(function() {
			ga('send', 'event', '우측 바-시험일정', 'click', '우측 바-시험일정-우측버튼');
		});
	}

	$('#top_bn_area .top_bn_slideup').on('click', function(e) {
		$('#top_bn_area .top_bn').slideUp(300).animate({ opacity: 0, queue: false, duration: 'slow'}, 0, function() {
			$('.quick_group').show();
			if($('.test_day .slide_day .day_con').length > 1) {
				slide_day_re.reloadSlider();
			}
		});
		$("#top_bn_area .top_bar_bn").show();
		$('#top_bn_area .top_bn_slideup').hide();
	});

	/*
	$('#top_bn_area .btn_bar_bn').on('click', function(e) {
		$('#top_bn_area .top_bn').slideDown(300).animate({ opacity: 1, queue: false, duration: 'slow'});
		$('#top_bn_area .top_bn_slideup').show();
		$("#top_bn_area .top_bar_bn").hide();

		$('.quick_group').hide();
	});
	*/
});

/*
$(window).scroll(function(event) {
	if($("#top_bn_area .top_bn").is(":visible") && $(this).scrollTop() > 50) {

		$("html,body").animate({scrollTop:0}, 100, function() {
			$(this).stop(true,true);
			$("#top_bn_area .top_bar_bn").show();
		});


		$("#top_bn_area .top_bn").slideUp(500, function() {
			$(this).stop(true,true);

			$('.quick_group').show();

			var slide_day_re = $('.test_day .slide_day').bxSlider({
				slideWidth: 118
			});
		});
	}
});
*/


//메인 하단 띠배너
$(function() {

	$(window).scroll(function(){
		if($(".btm_banner_limit").length){
			if ($(this).scrollTop() >= $(".btm_banner_limit").offset().top){
				$('.floating_btm').removeClass('fixed');
			}
			else{
				$('.floating_btm').addClass('fixed');
			}
		}
	});
	$('.btn_ban_close').on('click', function () {
		$('.floating_btm').hide();
	});
});


//util
$(function() {
	$(".util_sec li.util_cs, .util_sec li.util_mylect").mouseenter(function() {
		$(this).addClass("on");
	});

	$(".util_sec .util_sec_r > li").mouseleave(function() {
		$(this).removeClass("on");
	});

	//top 우측배너 롤링
	$('.top_sec .top_right_ban ul').bxSlider({
		auto: true,
	});

	$('.top_sec .top_right_ban .bx-prev').click(function() {
		ga('send', 'event', 'GNB', 'click', 'GNB-우측상단 롤링배너_좌측 버튼');
	});

	$('.top_sec .top_right_ban .bx-next').click(function() {
		ga('send', 'event', 'GNB', 'click', 'GNB-우측상단 롤링배너_우측 버튼');
	});
});


//gnb over
$(function() {
	$(".gnb_wrap2 .dap1wrap").mouseenter(function() { //190319 syh 수정 (개선되는 gnb와 구분하기 위해 .gnb_wrap2 클래스 추가)
		$('.dap1wrap').removeClass('on');
		$(this).addClass('on');
		$(this).children('.dap2wrap').show();
		$('.fixed .gnb_outer').removeClass('o_hid');
	});

	$(".dap2list > li").mouseenter(function() {
		$(this).addClass('on');
		$(this).children('.dap3wrap').stop().animate({height:"356px"},600); //170417 wj 수정
	});

	$(".dap2list > li").mouseleave(function() {
		$(this).removeClass('on');
		$(this).children('.dap3wrap').stop().animate({height:"0"},500);
	});

	$(".btn_gnb_cate .all").click(function() {
		$(this).hide();
		$('.btn_gnb_cate .close').show();
		$('.category_all, .mask').show();
	});

	$(".btn_gnb_cate .close").click(function() {
		$(this).hide();
		$('.btn_gnb_cate .all').show();
		$('.category_all, .mask').hide();
	});
});

var product_view = 0;
//gnb fix
/* 190628 syh 삭제 (하단에 중복)
$(window).load(function() {
	var prevPosition = 0;
	$(window).on('scroll', function(event) {
		var initPosition = $(this).scrollTop();
		if ($('.toggle_header .in_box').length > 0 ) {

		} else if(initPosition > prevPosition || initPosition < 174) {
			$('.gnb_wrap').removeClass('fixed');

			$('#gnb_wrap_hidden').css('display','none');

			$('.quick_group').removeClass('fixed2');
			$('.left_cate_quick').removeClass('fixed2');
			$('.gnb_outer').removeClass('o_hid');
		} else if(initPosition < prevPosition) {
			if(product_view) {
			} else {
				$('#gnb_wrap_hidden').css('display','block');
				$('.gnb_wrap').addClass('fixed');
			}

			$('.quick_group').addClass('fixed2');
			$('.left_cate_quick').addClass('fixed2');
			$('.gnb_outer').addClass('o_hid');
			if(initPosition < 2550) {
				$('.left_cate_quick').removeClass('fixed2');
			}
		} else if(initPosition < prevPosition) {
			$('#gnb_wrap_hidden').css('display','block');
			$('.gnb_wrap').addClass('fixed');
			$('.quick_group').addClass('fixed2');
			$('.left_cate_quick').addClass('fixed2');
			$('.gnb_outer').addClass('o_hid');
			if(initPosition < 2550) {
				$('.left_cate_quick').removeClass('fixed2');
			}
		}
		prevPosition = initPosition
	});
});
*/


//상단top메뉴 170811
$(function() {
	$(".top_sec li.util_cs, .top_sec li.util_mylect").mouseenter(function() {
		$(this).addClass("on");
	});

	$(".top_sec .util_sec_r > li").mouseleave(function() {
		$(this).removeClass("on");
	});
});

//gnb over170811
$(function() {
	/*
	$(".btn_gnb_cate2 .all").click(function() {
		$(this).hide();
		$('.btn_gnb_cate2 .close').show();
		$('.category_all2, .mask').show();
	});
	*/

	$(".gnb_menu2 .dep1_2, .gnb_menu2 .dep1_3, .gnb_menu2 .dep1_4, .gnb_menu2 .dep1_5").click(function() {
		if($(this).attr('tab_name') == 'refund') {
			$('.refund').addClass('on');
		} else if($(this).attr('tab_name') == 'freepass') {
			$('.freepass').addClass('on');
		} else if($(this).attr('tab_name') == 'tablet') {
			$('.tablet').addClass('on');
		} else if($(this).attr('tab_name') == 'event') {
			$('.event').addClass('on');
		}

		$('.btn_gnb_cate2 .close').show();
		$('.category_all2, .mask_gnb').show();
	});

	$(".btn_gnb_cate2 .close, .mask").click(function() {
		$(this).hide();
		$('.btn_gnb_cate2 .all').show();
		$('.btn_gnb_cate2 .close').hide();
		$('.category_all2, .mask').hide();

		$('.refund').removeClass('on');
		$('.freepass').removeClass('on');
		$('.tablet').removeClass('on');
		$('.event').removeClass('on');
	});
});

/* 210531 kmh 삭제
$(window).load(function() {
	var prevPosition = 0;
	$(window).on('scroll', function(event) {
		var initPosition = $(this).scrollTop();
		if ($('.toggle_header .in_box').length > 0 ) {
			if($('.toggle_header .in_box').is(':visible') == false ){
				$('.quick_group').removeClass('fixed3');
			}else{
				$('.quick_group').addClass('fixed3');
			}
		}else if(initPosition > prevPosition || initPosition < 121) {
			$('.gnb_wrap3').removeClass('fixed');
			$('.top_inner').css('padding-bottom','0');
			$('#gnb_wrap_hidden').css('display','none');
			$('.quick_group').removeClass('fixed2');
			$('.gnb_outer').removeClass('o_hid');
		} else if(initPosition < prevPosition) {
			if(product_view) {
			} else {
				$('#gnb_wrap_hidden').css('display','block');
				$('.gnb_wrap3').addClass('fixed');
				$('.top_inner').css('padding-bottom','52px');
			}
			$('.quick_group').addClass('fixed2');
			$('.gnb_outer').addClass('o_hid');
		} else if(initPosition < prevPosition) {
			$('#gnb_wrap_hidden').css('display','block');
			$('.gnb_wrap3').addClass('fixed');
			$('.top_inner').css('padding-bottom','52px');
			$('.quick_group').addClass('fixed2');
			$('.gnb_outer').addClass('o_hid');
		}
		prevPosition = initPosition
	});
});
210531 kmh 삭제 */

$(function() {
	//전체 카테고리 2뎁스 오버시 (css3로 변경)
	/*$(".dep2_cate dd.bt_conts").mouseenter(function() {
		$(this).addClass('on');
		$(this).children(".ly_conts").stop().animate({height: "140px" },300).clearQueue();
	});
	$(".dep2_cate dd.bt_conts").mouseleave(function() {
		$(this).removeClass('on');
		$(this).children(".ly_conts").stop().animate({height: "0" },300).clearQueue();
	});*/
});

//left cate menu, right quick menu
$(document).scroll(function() {
	var navi_position = $(window).scrollTop();
	var cateStart = 2650;
	var cateEnd = 5800;
	var quickStart = 200;

	if ($('.toggle_header .in_box').length > 0 ) {
		/*
		if($('.toggle_header .in_box').is(':visible') == false ){
			$('.btn_h-toggle').show();
			$('#container').css('padding-top','');
			$('.quick_group').css('top','');
			$('.quick_group').addClass('fixed3');
			$('.btn_h-toggle button').data("show","yes");
		} else {
			$('.btn_h-toggle').hide();
			$('.quick_group').removeClass('fixed3');
			$('.btn_h-toggle button').data("show","no");
		}
		*/
	}else{
		if(navi_position > cateStart) {
			$('.left_cate_quick').addClass('fixed');
		} else if(navi_position < cateStart) {
			$('.left_cate_quick').removeClass('fixed');
		}

		if(navi_position > cateEnd) {
			$('.left_cate_quick').removeClass('fixed');
		}

		if(navi_position > quickStart) {
			$('.quick_group').addClass('fixed');
		} else if(navi_position < quickStart) {
			$('.quick_group').removeClass('fixed');
		}
	}
});

$(function() {
	//우측 퀵메뉴
	/* 190628 syh 삭제
	$(".btn_quick .open").click(function() {
		$(this).hide();
		$('.quick_group').removeClass('hid');
		$('.quick_group').animate({width:"118px"},100);
		$(".btn_quick .close").show();
	});

	$(".btn_quick .close").click(function() {
		$(this).hide();
		$('.quick_group').addClass('hid');
		$('.quick_group').animate({width:"10px"},100);
		$(".btn_quick .open").show();
	});
	*/

	//190628 syh 추가
	$(".btn_quick").click(function() {
		$(this).toggleClass('open');
		$('.quick_group').toggleClass('hid');
	});

	$(".bt_quick_top").click(function() {
		$('html,body').scrollTop(0)
	});

	$(".quick_group .lect_recent .lect_list li").mouseenter(function() {
		$(this).children(".ly_lect_detail").show();
	});

	$(".quick_group .lect_recent .lect_list li").mouseleave(function() {
		$(this).children(".ly_lect_detail").hide();
	});

	$(".ly_lect_detail .close").click(function() {
		$('.ly_lect_detail').hide();
	});
});

/*$(window).resize(function () {
	var width_size = window.outerWidth;
	if(width_size <= 1024) {
		$('.quick_group').addClass('hid');
	}
})*/


//카테고리별 영역 오버시 버튼
$(function() {
	$(".ly_teach_area .ly_close").click(function() {
		$(this).parent('.ly_teach_area').removeClass('on');
	});

	//메인용
	$(".ly_btn_area li.bt_free").click(function() {
		$(this).parent().siblings(".ly_teach_area").addClass('on');
	});

	$(".main_cate_group").mouseleave(function() {
		$('.ly_teach_area').removeClass('on');
	});

	$(".main_cate_area .main_cate_lect .slidesjs-slide > li").mouseover(function() {
		$(this).siblings().children('.ly_teach_area').removeClass('on');
	});

	//메인용 170508 추가
	$(".lec_btn_area li.bt_free").click(function() {
		$(this).parent().siblings(".ly_teach_area").addClass('on');
	});

	$(".main_cate_group").mouseleave(function() {
		$('.ly_teach_area').removeClass('on');
	});

	//서브용 - 상단 강의영역
	/*
	$(".sub_cate_group .btn_lect_play").click(function() {
		$(this).parent().children(".ly_teach_area").addClass('on');
	});
	*/

	//서브용 - 하단 강의영역
	/*
	$(".list_bx_group .btn_lect_play").click(function() {
		$(this).parent().children(".ly_teach_area").addClass('on');
	});
	*/

	/*$(".sub_cate_group").mouseleave(function() {
		$('.ly_teach_area').removeClass('on');
	});*/
});

/*
$(function() {
	//서브 - 강의리스트 영역 슬라이드
	$(".sub_cate_group .sub_cate_lect").slidesjs({
		height: 750,
		start: 1,
		play: {
			active: false,
			effect: "slide",
			interval: 7000,
			auto: false,
			swap: true,
			pauseOnHover: true,
			restartDelay: 7000
		},
		pagination: {
			active: false,
			effect: "slide"
		},
		navigation: {
			active: true,
			effect: "slide"
		},
		effect: {
			slide: {
				speed: 1000
			},
			fade: {
				speed: 300,
				crossfade: true
			}
		},
		callback: {
			loaded: function(number) {
			}
		}
	});
});
*/

$(function() {
	$('.sub_ban_list').bxSlider({
		slideWidth: 490,
		minSlides: 2,
		maxSlides: 2,
		slideMargin: 33
	});
});

//footer
$(function() {
	$("#footer.foot_area .btn_f_site > a").click(function() {
		$(this).parent().toggleClass('on');
	});

	$("#footer.foot_area .ly_fsite li").click(function() {
		$('.btn_f_site').removeClass('on');
	});
});

$(function() {
	//강의상세 별점 클릭시, 수강후기 이동
	$(".star_area a").click(function() {
		$('html,body').scrollTop($('#ifrmReview').offset().top)
	});
});

$(function() {
	//강의상세 관심강의 팝업
	$(".btn_lect_area .wish").click(function() {
		$(".layer_area.wish, .modal").show();
		$(".layer_area.wish").css("top", Math.max(0, $(window).scrollTop() + 250) + "px");
	});

	$(".layer_area.wish .btn_ly_close").click(function() {
		$(".layer_area.wish, .modal").hide();
	});

	//강의상세 장바구니 팝업
	$(".btn_lect_area .cart").click(function() {
		$(".layer_area.cart, .modal").show();
		$(".layer_area.cart").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});

	$(".layer_area.cart .btn_ly_close").click(function() {
		$(".layer_area.cart, .modal").hide();
	});

	//강의상세 수강신청 팝업
	$(".btn_lect_area .apply").click(function() {
		$(".layer_area.apply, .modal").show();
		$(".layer_area.apply").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});

	$(".layer_area.apply .btn_ly_close").click(function() {
		$(".layer_area.apply, .modal").hide();
	});

	//강의상세 공유하기 팝업
	$(".btn_lect_share").click(function() {
		$(".pop_share").show();
	});

	$(".pop_share .bt_ly_close").click(function() {
		$(".pop_share").hide();
	});

	//첨삭서비스 팝업
	$(".resume_click").click(function() {
		$(".resume_pop").show();
	});

	$(".resume_pop .bt_ly_close").click(function() {
		$(".resume_pop").hide();
	});

	//배송기간 안내 팝업
	$(".delive_info .btn_help").click(function() {
		$(".pop_delive_info").show();
	});

	$(".pop_delive_info .bt_ly_close").click(function() {
		$(".pop_delive_info").hide();
	});

	//카드할부 안내 팝업
	$(".card_info .btn_help").click(function() {
		$(".pop_card_info").show();
	});

	$(".pop_card_info .bt_ly_close").click(function() {
		$(".pop_card_info").hide();
	});

	//<!-- 20170201 카드 할부 팝업 수정 -->
	//카드할부 안내 팝업
	/*
	$(".card_info .btn_help").click(function() {
		$(".pop_halbu").show();
		$(".pop_halbu .box").css("height",$(window).height() / 1.5);
		$(".pop_halbu").css("top", Math.max(0, (($(window).height() - $('.pop_halbu').height()) / 2) + $(window).scrollTop()) + "px");
	});

	$(".pop_halbu .btn_ly_close").click(function() {
		$(".pop_halbu, .modal").hide();
	});

	$('.pop_halbu .card_groups .lists button').mouseenter(function() {
		$('.pop_halbu .card_infos').hide();
		$(this).closest('li').find('.card_infos').slideDown('fast');
	}).mouseleave(function() {
		$('.card_infos').hide();
	});

	$('.installment_info .card_notes button').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next().hide();
		} else {
			$(this).addClass('active');
			$(this).next().show();
		}
	});
	*/
	//<!-- //20170201 카드 할부 팝업 수정 -->

	//할인쿠폰 팝업
	$(".prc_group .btn_sale_coupon").click(function() {
		$(".pop_sale_coupon").show();
	});

	$(".pop_sale_coupon .bt_ly_close").click(function() {
		$(".pop_sale_coupon").hide();
	});

	//즉시할인 팝업
	$(".d_sale .btn_help").click(function() {
		$(".pop_sale_info").show();
	});

	$(".pop_sale_info .bt_ly_close").click(function() {
		$(".pop_sale_info").hide();
	});

	//강의취소 환불안내 팝업
	$(".chk_rule .btn_refund_info, .pay_info_list .bt_info").click(function() {
		$(".layer_area.info, .modal").show();
		$(".layer_area.info").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});

	$(".layer_area.info .btn_ly_close").click(function() {
		$(".layer_area.info, .modal").hide();
	});

	// 전자상거래법 안내 팝업
	$(".chk_rule .btn_ecommerce_info, .pay_info_list .bt_info").click(function() {
		$(".layer_area.ecommerce_info, .modal").show();
		$(".layer_area.ecommerce_info").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});

	$(".layer_area.ecommerce_info .btn_ly_close").click(function() {
		$(".layer_area.ecommerce_info, .modal").hide();
	});



	/** 181123 hyj 추가 */
	//문화비 소득공제 안내 레이어 팝업
	$(".btn_tax_info").click(function() {
		$(".layer_area.tax_info, .modal").show();
		$(".layer_area.tax_info").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});
	$(".layer_area.tax_info .btn_ly_close").click(function() {
		$(".layer_area.tax_info, .modal").hide();
	});

	//교재보기 레이어 팝업
	$(".btn_books").click(function() {
		$(".layer_area.select_book, .modal").show();
		$(".layer_area.select_book").css("top", Math.max(0, $(window).scrollTop() + 150) + "px");
	});
	$(".layer_area.select_book .btn_ly_close").click(function() {
		$(".layer_area.select_book, .modal").hide();
	});
	/** //181123 hyj 추가 */

});

$(function() {
	//input focus 시 색상 변화
	 $('.use_form input').focusin(function () {
		 $(this).addClass('active');
	 });

	 $('.use_form input').focusout(function () {
		 $(this).removeClass('active');
	 });
});

$(function() {
	$(".chk_area a").click(function() {
		$(this).toogleClass('on');
	});
});

$(function() {
	//강의 상세 수강카드 - 버튼 클릭시 레이어 노출
	/*
	$(".list_bx_group .lec_btn > ul > li").click(function() {
		$(this).siblings().children('.ly_lect_list').hide();
		$(this).children('.ly_lect_list').toggle();
	});
	*/

	$('.list_bx_group .lec_btn > ul > li > a').on("click",function(e) {
		//e.preventDefault();
		if($(this).data("show") == "no") {
			//닫힘
			$(this).next('.ly_lect_list').hide();
			$(this).data("show","yes");
		} else {
			//열림
			$('.ly_lect_list').hide();
			$(this).next('.ly_lect_list').show();
			$('.list_bx_group .lec_btn > ul > li > a').data("show","yes");
			$(this).data("show","no");
		}
	});

	//다른영역 클릭시 닫힘
	$(document).on('click', function (e) {
		if($(e.target).parents(".ly_lect_list, .list_bx_group .lec_btn").length === 0) {
			$(".ly_lect_list").hide();
			$('.list_bx_group .lec_btn > ul > li > a').data("show","yes");
		}
	});
});

function showOnStudy(param) {
	var lec_category = '';

	if(typeof param != 'undefined') {
		lec_category = param;
	}

	window.open('/course/onstudy?lec_category=' + lec_category, '', 'width=925,height=1031,top=0,left=0, status=no,toolbar=no,scrollbars=yes,resizable=yes,location=no');
}

//빠른 수강신청 팝업
$(function() {
	var $tabItems = $('.dep1_tab li');
	$tabItems.click(function() {
		$tabItems.removeClass('active');
		$(this).addClass('active');
		var index = $tabItems.index($(this));
		$('.list_group > div').hide().eq(index).show();
	}).eq(0).click();

	$(".list_sel .dep2 > li > a").click(function() {
		if($(this).parent().parent().parent().hasClass('subj')) {
			$(this).parent().siblings().removeClass('active');
			$(this).parent().toggleClass('active');
		} else {
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	$(".list_sel.subj .dep3 > li > a").click(function() {
		$(this).parent().parent().parent().siblings().children().children().removeClass('active');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
	});
});

//푸터 슬라이드 170322
$(document).ready(function(){
  $('.pagoda_awards').bxSlider({
	slideWidth: 210,
	minSlides: 4,
	maxSlides: 4,
	moveSlides: 1,
	slideMargin: 10
  });
});

/*
2017-11-24 김민혁
넥스트토익 추가
*/
var c_slide,
	slide_obj,
	nav,
	hover_bg_data;

c_slide = {
	speed : 500,
	course : 'next',
	ease : 'easeOutCubic',
	course_check : function(btn){
		var btn_class,
			btn_course;

		btn_class = btn.attr('class');
		if(btn_class.indexOf('next') > -1){
			btn_course = 'next';
		}else{
			btn_course = 'prev';
		}

		return btn_course;
	},
	init : function(obj, obj_wrap){
		var slide_wrap,
			slide_list_wrap,
			slide_items,
			slide_w;

		c_slide.course = c_slide.course_check(obj);
		slide_wrap = obj.closest('.nexto_items_wrap');
		slide_list_wrap = slide_wrap.find('.nexto_items_list');
		slide_items = slide_list_wrap.find('.item');
		slide_w = slide_items.eq(0).outerWidth();

		if(!slide_list_wrap.is(':animated')){
			if(c_slide.course == 'next'){
				slide_list_wrap.stop().animate({left:-slide_w},{duration:c_slide.speed, easing:c_slide.ease,complete:function(){
					$(this)
					.css('left','0')
					.find('.item:first').appendTo(slide_list_wrap);
				}});
			}else{
				slide_list_wrap
				.css('left',-slide_w+'px')
				.find('.item:last').prependTo(slide_list_wrap);

				slide_list_wrap.stop().animate({left:0},{duration:c_slide.speed, easing:c_slide.ease});
			}
		}
	}
}

$(document).ready(function(){
	slide_obj = $('.nexto_items_wrap');
	nav = slide_obj.find('.nav button');

	nav.bind('click',function(){
		c_slide.init($(this));
		return false;
	});

	// 관리자에서 넘어오는 bg컬러값 마우스오버 반영
	hover_bg_data = {
		trigger : $('.nexto_items_list .subject'),
		init : function(obj, state){
			var bg_color;

			bg_color = obj.attr('data-color');
			if(state == 'over'){
				obj.css({
					'background-color':bg_color
				});
			}else{
				obj.css({
					'background-color':'#fff'
				});
			}
		}
	}

	hover_bg_data.trigger.hover(
	function(){
		hover_bg_data.init($(this), 'over');
	},
	function(){
		hover_bg_data.init($(this)), 'out';
	});
});

/********* 190319 syh 접근성개선 ***********/
//gnb
// common_gnb.js 로 분리


/* 230530 syh 홍보배너 (선생님소개, 무료특강, 교재/상품권 공통) */
$(function() {
	var subMidSlide, subMSliders;

	subMidSlide = {
		$wrap : $('.sub_ban_slide ul'),
		$items : $('.sub_ban_slide li'),
		opt : {
			mode : 'fade',
			autoHover: true,
			speed: 500,
			auto: true,
			pause: 5000,
			controls : false,
			pager: true
		},
		call : function(slideObj){
			subMSliders = slideObj.bxSlider(subMidSlide.opt);
		}
	}

	if(subMidSlide.$items.length > 1){
		subMidSlide.call(subMidSlide.$wrap);
	}
});

/* 240130 pny 강의카드 공통(올인원패스, 영어회화패스, 중국어전강좌패스, 일본어전강좌패스 공통) */
$(function() {
	var bxCardSlide;

	bxCardSlide  = {
		slider : [],
		item : [
			$('.slide_card_box ul'), //강의카드
		],
		opt : [
			{mode:'fade',pager:false,speed:600,controls:true,auto:true,pause:3000,autoHover:true,infiniteLoop:true,},
		],
		set : function(){
			$.each(bxCardSlide.item, function(index){
				bxCardSlide.slider[index] = bxCardSlide.item[index].bxSlider(bxCardSlide.opt[index]);
			});
		}
	}
	if(bxCardSlide.item.length > 0){
		bxCardSlide.set();
	}
});