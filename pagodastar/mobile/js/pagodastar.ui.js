if(typeof pagodastarUI !== 'object') {
	var pagodastarUI = {};
	var handler = function(e) { e.preventDefault();}


}

pagodastarUI = (function() {
	'use strict';

	var pagodastarUI = {
			/**
			 * 공통
			 */
			common: {
				init: function() {
					//기기체크
					var currentOS;
					var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
					if(mobile) {
						var userAgent = navigator.userAgent.toLowerCase();
						if(userAgent.search("android") > -1) {
							currentOS = "android";
						} else if((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)) {
							currentOS = "ios";
						} else {
							currentOS = "";
						}
					} else {
						// 모바일이 아닐 때
						currentOS = "web";
					}
					$('html').addClass("pgds-" + currentOS);

					//header높이만큼
					var headerH = $('.pgds-header').height();
					$('.pgds-content').css('margin-top', headerH);

					if($('#pgds-header').length > 0) {
						//스크롤 위,아래
						$('#pgds-header').headroom({
							offset:headerH,
							tolerance : {
								up : 0,
								down : 0
							},
							onTop : function () {
								$('.pgds-footer .move_top, #new_freepass .compare_prds.step1').removeClass('fixed');

								//재구매이벤트추가
								if($('#div_layer_popup2018031201').length > 0) {
									/* 190320 kmh 하단 고정 메뉴바가 없어지면서 bottom:50 -> bottom:0 으로 변경 */
									$(".float_wrap").css({position: "fixed", bottom:0});
									$(".float_wrap a").show();
								}
							},
							//scroll up
							onPin : function() {
								$('.pgds-footer .move_top, .move_top_solo .move_top').removeClass('fixed');
								//$('.pgds-footer .move_top, .move_top_solo .move_top, #new_freepass .compare_prds.step1').addClass('fixed');

								//재구매이벤트추가
								if($('#div_layer_popup2018031201').length > 0) {
									$(".float_wrap").css({position: "static"});
									$(".float_wrap a").hide();
								}
							},
							//scroll down
							onUnpin : function() {
								$('.pgds-footer .move_top, .move_top_solo .move_top, #new_freepass .compare_prds.step1').addClass('fixed');

								//재구매이벤트추가
								if($('#div_layer_popup2018031201').length > 0) {
									$(".float_wrap").css({position: "static"});
									$(".float_wrap a").hide();
								}

							},
							//scroll bottom
							onBottom : function() {
								$('.pgds-footer .move_top, #new_freepass .compare_prds.step1').removeClass('fixed');

								//재구매이벤트추가
								if($('#div_layer_popup2018031201').length > 0) {
									$(".float_wrap").css({position: "static"});
									$(".float_wrap a").hide();
								}
							},
							//scroll not bottom
							onNotBottom : function() {
							}
						});
					}

					//위로 이동
					$('#move_top').click(function() {
						$('html, body').animate({ scrollTop: 0 }, 'fast');
						return false;
					});


					/*********** 200825 syh 추가 *********/
					//좌측 네비영역
					var navi, swip, swip_obj, gnb_layer_change;
					navi = {
						$button : $('#pgds-header .gnb-button, #pgds-navigation2 .nav-close'),
						$wrap : $('#pgds-navigation2'),
						speed : 200,
						layout : function(state){
							if(state){
								navi.$wrap.addClass('open');
								$('body').addClass('nav-mode');
							}else{
								navi.$wrap.removeClass('open');
								$('body').removeClass('nav-mode');
							}
						},
					}
					navi.$button.on('click', function(e){
						navi.layout($(e.target).is('.gnb-button'));
						return false;
					});
					$('.nav_menu_list > li > a').click(function() {
						if ($(this).next().hasClass('nav_sub_group'))
						{
							$('.nav_sub_group').stop().slideUp(300);
							$(this).parent('li').siblings().removeClass('on');
							$(this).next('.nav_sub_group').stop().slideToggle(300);
							$(this).parent('li').toggleClass('on');
						}
					});

					//메인 상단배너
					if($('#mainTopban').length > 0) {
						var keyVisual = new Swiper('#mainTopban .swiper-container', {
							observer: true,
							observeParents: true,
							nextButton: '#mainTopban .swiper-next',
							prevButton: '#mainTopban .swiper-prev',
							autoplay: false,
							autoplayDisableOnInteraction: false,
							pagination:'#mainTopban .slider_pagination'
						});
						var totalSlides = $('#mainTopban .slider_pagination span').length;
						$('#mainTopban .number_pager .total').html(totalSlides);
						keyVisual.on('slideChangeEnd', function(instance) {
							var currentCount = (instance.activeIndex) % (totalSlides) + 1;
							if(currentCount === 0) {
								$('#mainTopban .number_pager .current').html(totalSlides);
							} else {
								$('#mainTopban .number_pager .current').html(currentCount);
							}
						});
					}

					//메인 인기강의
					/* 200918 syh 삭제
					var lectureMv = new Swiper('.lecture_mv .swiper-container', {
						paginationClickable: true,
						slidesPerView:'auto',
					}); */

					//메인 중간배너
					if($('#mainMidBan').length > 0) {
						var bannerArea = new Swiper('#mainMidBan .swiper-container', {
							 pagination:'#mainMidBan .slider_pagination'
						});
						var totalSlides2 = $('#mainMidBan .slider_pagination span').length;
						$('#mainMidBan .number_pager .total').html(totalSlides2);
						bannerArea.on('slideChangeEnd', function(instance) {
							var currentCount2 = (instance.activeIndex) % (totalSlides2) + 1;
							if(currentCount2 === 0) {
								$('#mainMidBan .number_pager .current').html(totalSlides2);
							} else {
								$('#mainMidBan .number_pager .current').html(currentCount2);
							}
						});
					}

					//메인 스타강사
					/* 200918 syh 삭제
					var teacherList = new Swiper('.teacher_list .swiper-container', {
						paginationClickable: true,
						slidesPerView:'auto',
					}); */

					//메인 수강후기
					var BestRvSlide = new Swiper('.best_rv_slide.swiper-container', {
						nextButton: '.best_rv_slide .swiper-next',
						prevButton: '.best_rv_slide .swiper-prev',
						spaceBetween:10,
					});

					//메인 공지사항
					var mainNotice = new Swiper('.main_notice .swiper-container', {
						direction: 'vertical',
						autoplay: 2000,
						autoplayDisableOnInteraction: false,
						loop: true,
					});

					//메인 하단배너
					var botBanner = new Swiper('.main_bot_banner .swiper-container', {
						slidesPerView: 'auto',
						centeredSlides: true,
						spaceBetween: 12,
					});
					/*********** //200825 syh 추가 *********/


					//키 비주얼
					if($('#key_visual').length > 0) {
						var keyVisual = new Swiper('.key_visual .swiper-container', {
							observer: true,
							observeParents: true,
							nextButton: '.key_visual .swiper-next',
							prevButton: '.key_visual .swiper-prev',
							autoplay: false,
							autoplayDisableOnInteraction: false,
							pagination:'.key_visual .slider_pagination'
						});
						var totalSlides = $('.key_visual .slider_pagination span').length;
						$('.key_visual .number_pager .total').html(totalSlides);
						keyVisual.on('slideChangeEnd', function(instance) {
							var currentCount = (instance.activeIndex) % (totalSlides) + 1;
							if(currentCount === 0) {
								$('.key_visual .number_pager .current').html(totalSlides);
							} else {
								$('.key_visual .number_pager .current').html(currentCount);
							}
						});
					}

					//카테고리 메뉴
					/*
					if($('.main_cate_menus').length > 0) {
						var nav = $('.main_cate_menus'), cateMenuTop = $('.pgds-header').height() + $('.key_visual').height(), sections = $('.card_section');

						$('.card_tabs').find('a').on('click', function () {
							var $el = $(this), id = $el.attr('href');
							var index = $('.card_tabs').find('a').index($(this));
							$('html, body').animate({scrollTop: $(id).offset().top - 60}, 'fast');
							return false;
						});

						//스크롤시
						$(document).on('orientationchange load scroll', function () {
							var currentPos = $(this).scrollTop(), cateMenuBtm= $('.main_cate_menus').outerHeight() + cateMenuTop;

							if(currentPos >= cateMenuTop && currentPos < cateMenuBtm) {
								$('.card_tabs').addClass('fixed');
								$('.gnbs').hide();
							} else {
								$('.card_tabs').removeClass('fixed');
								$('.gnbs').show();
							}

							$(sections).each(function(i) {
								var top = $(this).offset().top - 60,
									bottom = top + $(this).outerHeight();
								if(currentPos >= top && currentPos <= bottom) {
									$('.card_tabs').find('a').removeClass('active');
									$(sections).removeClass('active');
									$(this).addClass('active');
									$('.card_tabs').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
								}
							});
						});
					}
					*/

					//무료특강
					if($('.main_free_lecture').length > 0) {
						var freeLecture = new Swiper('.main_free_lecture .swiper-container', {
							observer: true,
							observeParents: true,
							nextButton: '.main_free_lecture .swiper-next',
							prevButton: '.main_free_lecture .swiper-prev',
							pagination:'.main_free_lecture .slider_pagination',
							paginationClickable: true,
							slidesPerView:'auto'
						});
					}

					//수강후기 170508 추가
					if($('.main_review_lecture').length > 0) {
						var sukangLecture = new Swiper('.main_review_lecture .swiper-container', {
							observer: true,
							observeParents: true,
							nextButton: '.main_review_lecture .swiper-next',
							prevButton: '.main_review_lecture .swiper-prev',
							pagination:'.main_review_lecture .slider_pagination',
							paginationClickable: true,
							slidesPerView:'auto'
						});
					}

					//기획전/이벤트
					if($('#lect_banners').length > 0) {
						var bannerSwiper = new Swiper('#lect_banners .swiper-container', {
							observer: true,
							observeParents: true,
							autoplay: 5000,
							autoplayDisableOnInteraction: false,
							pagination:'#lect_banners .slider_pagination'
						});
						var totalSlides = $('#lect_banners .slider_pagination span').length;
						$('#lect_banners .number_pager .total').html(totalSlides);
						bannerSwiper.on('slideChangeEnd', function(instance) {
							var currentCount = (instance.activeIndex) % (totalSlides) + 1;
							if(currentCount === 0) {
									$('#lect_banners .number_pager .current').html(totalSlides);
							} else {
									$('#lect_banners .number_pager .current').html(currentCount);
							}
						});
					}

					//메인 강사 소개 개편
					if($('.main_tutor_section').length > 0) {

						var tutorlistswipe = new Swiper('.tutor_list .swiper-container', {
							slidesPerView : 3.5,
							spaceBetween: 5,
						});

						/*
						tutor_mv_slide = new Swiper('.lect_mv .swiper-container', {
							slidesPerView: 'auto',
							spaceBetween: 10,
						 });
						 */


					}


					//강사 정보
					if($('.teacher_views').length > 0) {
						var numCheck = $('.teacher_views > li').size();
						if(numCheck <= 1) {
							//$('.teacher_views').addClass('solo'); 210809 hyj 수정
						}

						$('.teacher_views .thumbs button').on('click',function() {
							if($(this).attr('tutor_id') == '3687553') { //클레이박 퇴직
								alert('해당 강사는 퇴직한 강사입니다.');
							} else {
								$('.teacher_views .thumbs button').show();
								$(this).hide();
								$('.teacher_views .view_links').removeClass('show');
								$(this).parent().next().addClass('show');
							}
						});

						$('.teacher_views .view_links button').on('click',function() {
							$('.teacher_views .thumbs button').show();
							$(this).parent().removeClass('show');
						});
					}

					//수강 후기
					/*ajax로 인해 방식 변경
					if($('#toggle_review').length > 0) {
						$('.review_more').on('click',function() {
							if($(this).closest('li').hasClass('active')) {
								$(this).closest('li').removeClass('active');
							} else {
								$('#toggle_review > ul > li').removeClass('active');
								$(this).closest('li').addClass('active');
							}
						});
					}
					*/

					//무료특강 타입 버튼
					if($('.free_btns').length > 0) {
						var tabNum = $('.free_btns li').size(), tabTarget = $('.free_btns');
						if(tabNum == 1) {
							$(tabTarget).addClass('one');
						} else if(tabNum == 2) {
							$(tabTarget).addClass('two');
						} else if(tabNum == 3) {
							$(tabTarget).addClass('three');
						}
					}
					$('li.freelect').each(function() {
						var tabNum = $(this).find('.btns.btns2 li').size(), tabTarget = $(this).find('.btns.btns2');
						if(tabNum == 1) {
							$(tabTarget).addClass('one');
						} else if(tabNum == 2) {
							$(tabTarget).addClass('two');
						} else if(tabNum == 3) {
							$(tabTarget).addClass('three');
						}
					});


					//메인 이벤트 배너 180323 wj
					$(function(){
						var main_event_Banner = new Swiper('.main_event_section .swiper-container', {
							observer: true,
							observeParents: true,
							autoplay: 4000,
							autoplayDisableOnInteraction: false,
							pagination:'.main_event_section .slider_pagination',
							paginationType: 'fraction'
						});
					});

					/*여기서 안씀 수강후기로 인해 높이값 변경 될 수 있음
					//강의 상세 탭
					if($('.details_tabs').length > 0) {
						var tabNum = $('.details_tabs li').size(), tabTarget = $('.details_tabs ul');

						if(tabNum == 1) {
							$(tabTarget).addClass('one');
						} else if(tabNum == 2) {
							$(tabTarget).addClass('two');
						} else if(tabNum == 3) {
							$(tabTarget).addClass('three');
						} else if(tabNum == 4) {
							$(tabTarget).addClass('four');
						}

						var dTab = $('.details_tabs'), offsetT = $(dTab).offset().top - 5, sections = $('.details_views_box');

						$(dTab).find('a').on('click', function () {
							var $el = $(this), id = $el.attr('href');
							$('.details_tabs li').removeClass('active');
							$(this).parent().addClass('active');
							$(sections).hide().scrollTop(0);;
							$(id).show();

							location.href = '#detail_link';
							return false;
						});

						$(document).on('orientationchange load scroll', function () {
							var currentPos = $(this).scrollTop(), detaileBtm= $('.detail_row4').outerHeight() + offsetT;

							if(currentPos >= offsetT && currentPos < detaileBtm) {
								$(dTab).addClass('fixed');
								$('.gnbs').hide();
							} else {
								$(dTab).removeClass('fixed');
								$('.gnbs').show();
							}

							$(sections).each(function(i) {
								var top = $(this).offset().top - 50,
									bottom = top + $(this).outerHeight();
								if(currentPos >= top && currentPos <= bottom) {
									$(dTab).find('li').removeClass('active');
									$(sections).removeClass('active');
									$(this).addClass('active');
									$(dTab).find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
								}
							});
						});
					}
					*/

					//구성강의
					/*ajax로 인해 방식 변경
					if($('.in_list').length > 0) {
						var leftP = $('.in_list .inner li.active').offset().left, bg = $('<div class="dim" ></div>');

						$('.in_list .inner').animate({ scrollLeft: leftP }, 'fast');
						$('.in_list button').on('click',function() {
							if($(this).parent().hasClass('scroll')) {
								$(this).parent().removeClass('scroll');
								$('.in_list .inner').css('height','auto');
								$(bg).remove();
							} else {
								$(bg).appendTo('.details_views');
								$('.in_list').removeClass('scroll');
								$(this).parent().addClass('scroll');
								var sNum = $('.in_list li').size(), sh = ($('.in_list li').outerHeight() * 6) + 5;
								if(sNum > 6) {
									$('.in_list.scroll .inner').css('height',sh);
								}
							}
							$('.in_list .inner').animate({ scrollLeft: leftP, scrollTop:0 }, 'fast');
						});
					}
					*/

					//결제수단
					$('input:radio[name="payment_type"]').each(function(i) {
						var payment_detail = $('.payment_detail');
						$(this).change(function() {
							$(payment_detail).hide().eq(i).show();
						});

					});

					//통합 스케줄
					/*$('.sdu_detail > ul > li > a').on('click',function(e) {
						if($(this).next('div').length > 0) {
							e.preventDefault();
							$('.sdu_detail > ul > li > a').removeClass('active');
							var subs = $(this).next('div') , parentObj = $(this).parent();
							if(subs.is(':visible')) {
								subs.slideUp('fast')
								$(parentObj).removeClass('active');
							} else {
								$('.sdu_depth').slideUp('fast');
								subs.slideDown('fast');
								$('.sdu_detail > ul > li').removeClass('active');
								$(parentObj).addClass('active');
							}
						}
					});
					$('.sdu_tabs a').on('click',function() {
						var num = $('.sdu_tabs a').index($(this));
						$('.sdu_tabs li').removeClass('active');
						$(this).parent().addClass('active');
						$('.sdu_cal_box').hide();
						$($('.sdu_cal_box')[num]).show();
						return false;
					});*/

					//상세 플레이 버튼 위치
					$('.lect_detail .ico_play').css({'right':'10px','bottom':$('.lect_detail .pkg').outerHeight() + 10});
				}
			},

			/**
			 * 전체보기 레이어
			 */
			all_layer: {
				open: function(allID) {
					var target = "#" + allID;
					var children = $(target).find('.swiper-wrapper a').clone();
					var allLayer = "";
					allLayer += "<div class='all'>";
					allLayer += "<strong class='tit'>전체보기</strong>";
					allLayer += "<div class='inner'>";
					allLayer += "</div>";
					allLayer += "<button type='button' class='all_close' onclick=pagodastarUI.all_layer.close(" + allID + ");>close</button>";
					allLayer += "</div>";
					$(allLayer).appendTo('body');
					$('.ui-page, .pgds-wrap').hide();
					$(".all .inner").prepend(children);

					$('.all').on('scroll',function() {
						if($('.all').scrollTop() >= 50) $('.all').addClass('fixed');
						else $('.all').removeClass('fixed');
					});
				},
				close:function(allID) {
					$('.ui-page, .pgds-wrap').show();
					var ot = $(allID).offset().top;
					$('.all, .all .inner').remove();
					$('html, body').scrollTop(ot);
					$('.all').removeClass('fixed');
					//location.href = "#top";
				}
			},
			/**
			 * 레이어
			 */
			layer: {
				open: function(layerID) {
					var target = "#" + layerID;
					$(target).show();
					//$('body').css('overflow','visible');
					$('.pgds-wrap').hide();
					$('html, body').scrollTop(0);
				},
				open2: function(layerID) {
					var target = "#" + layerID,
						bg = $('<div class="layer_dim" ></div>'),
						calH = $(window).height() / 3,
						half3 = calH*2;

					$(target).addClass('open');
					if(layerID == "pop_product_buy" || layerID == "pop_product_apply" || layerID == "pop_product_wish" || layerID == "buy_pop" || layerID == "cart_pop" || layerID == "wish_pop" || layerID == "layer_book") {
						half3 = half3 - 50;
						if($(target).find('.delivery_noti').length > 0) {
							$(target).find('.layer_inner').css({'height':half3 - 87}).scrollTop(0);
						/* 180906 kmh 추가 */
						} else if($(target).find('.foot_price_box').length > 0) {
							$(target).find('.layer_inner').css({'height':half3 - 50}).scrollTop(0);
						/* //180906 kmh 추가 */
						} else {
							$(target).find('.layer_inner').css({'height':half3}).scrollTop(0);
						}
					} else {
						var targetH = $(target).find('.layer_inner');
						if($(targetH).height() > half3) {
							$(targetH).addClass('scroll').css({'height':half3});
							//$(targetH).unbind('touchmove', handler);
						} else {
							//$(targetH).bind('touchmove', handler);
						}
						$(target).css("top", Math.max(0, (($(window).height() - $(target).height()) / 2) + $(window).scrollTop()) + "px");
						$('.daily_check.open').css('top','50px'); //200601 syh 추가
					}
					$(target).find('.layer_inner').scrollTop(0);
					///$(target).find('.tit').bind('touchmove', handler);
					//$(bg).appendTo('body').bind('touchmove', handler);
					$(bg).appendTo('body');

					//<!-- 20170201 카드 할부 팝업 수정 -->
					$('.card_groups .lists .in button').click(function() {
						var h = $(this).closest('li').find('.card_infos').height();
						$('.card_infos').hide();
						$(this).closest('li').find('.card_infos').css('margin-top',(-h) - 30);
						$(this).closest('li').find('.card_infos').slideDown('fast');
					});
					$('.card_infos .close').click(function() {
						$(this).closest('.card_infos').hide();
					});
					$('.installment_info .card_notes button').click(function() {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
							$(this).next().hide();
						} else {
							$(this).addClass('active');
							$(this).next().show();
							$('.pgds-layer2 .layer_inner.scroll').scrollTop($('.installment_info .box').outerHeight() - $('.installment_info .card_notes').outerHeight() + $('.card_dates').height());
						}
					});
					//<!-- //20170201 카드 할부 팝업 수정 -->
				},

				/************ 221109 syh 추가 **************/
				open3: function(layerID) {
					var target = "#" + layerID,
						calH = $(window).height() / 3,
						half3 = calH*2;
					$(target).addClass('open');
					//if(layerID == "pop_product_buy" || layerID == "pop_product_apply" || layerID == "layer_coupon" || layerID == "layer_share") { //230216 hyj 수정
					//if(target.has('pgds-layer')) { //230216 hyj 수정
					if(target.find('.pgds-layer3, .pgds-layer5')) { //230216 hyj 수정
						half3 = half3 - 50;
						if($(target).find('.delivery_noti').length > 0) {
							$(target).find('.layer_inner').css({'height':half3 - 87}).scrollTop(0);
						} else if($(target).find('.foot_price_box').length > 0) {
							$(target).find('.layer_inner').css({'height':half3 - 50}).scrollTop(0);
						} else {
							$(target).find('.layer_inner').css({'height':half3}).scrollTop(0);
						}
					} else {
						var targetH = $(target).find('.layer_inner');
						if($(targetH).height() > half3) {
							$(targetH).addClass('scroll').css({'height':half3});
						} else {
						}
						$(target).css("top", Math.max(0, (($(window).height() - $(target).height()) / 2) + $(window).scrollTop()) + "px");
						$('.daily_check.open').css('top','50px');
					}
					$(target).find('.layer_inner').scrollTop(0);
				},
				/************ //221109 syh 추가 **************/

				close:function(layerID) {
					$('#' + layerID).hide();
					//$('body').css('overflow','hidden');
					$('.pgds-wrap').show();
					$('.layer_dim').remove();
				},
				close2:function(layerID) {
					$('#' + layerID).removeClass('open');
					$('.ui-mobile').css({'height':'auto','overflow':'visible'});
					$('.pgds-layer2 .layer_inner').removeClass('scroll').css({'height':'auto'});
					$('.layer_dim').remove();
				}

			},

			/**
			 * 전체메뉴
			 */
			allMenu: {
				init: function() {
					pagodastarUI.allMenu.subTabs();
					pagodastarUI.allMenu.aco();

					$('.depth1 > li:first-child > a').click();
					$('.depth2 > ul > li').removeClass('active');
					$('.depth3').hide();
				},
				aco: function() {
					$('.depth1 > li > a').on('click',function(e) {
						if($(this).next('div').length > 0) {
							e.preventDefault();
							$('.depth2 > ul > li').removeClass('active');
							var subs = $(this).next('div') , parentObj = $(this).parent();
							if(subs.is(':visible')) {
								subs.slideUp('fast')
								$(parentObj).removeClass('active');
							} else {
								$('.depth3').hide();
								$('.depth1 .subs').slideUp('fast');
								subs.slideDown('fast');
								/*if($(parentObj).find('.depth2').length > 0) {
									$(parentObj).find('.depth2 > ul > li:first-child > a').click();
								}*/
								$('.depth1 > li').removeClass('active');
								$(parentObj).addClass('active');

							}
						}
					});
				},
				subTabs: function() {
					$('.depth2 > ul > li > a').on('click',function(e) {
						e.preventDefault();
						var num = $('.depth2 > ul > li > a').index($(this));
						$('.depth3').show();
						$('.depth2 > ul > li').removeClass('active');
						$(this).parent().addClass('active');
						$('.depth3 > ul').hide();
						$($('.depth3 > ul')[num]).show();
					});
				}
			}
	};

	return pagodastarUI;
}());

$(function() {
	//pagodastarUI.common.init();
});

//$(window).resize(pagodastarUI.common.init);

//구성강의 영역 접혔을때 링크앲애기
/*
$(function() {
	if(!$('.detail_row4 .in_list').hasClass('scroll')) {
		$(".detail_row4 .in_list li a").removeAttr("href");
	}
});
*/

/* 190326 kmh 삭제 (새로운 스크립트로 대체)
$(function() {
	if($('.pgds-header').length > 0) {
		if($('.swiper-container .swiper-slide .active').attr('swiper-num') != 'undefined' && $('.swiper-container .swiper-slide .active').attr('swiper-num') != '' &&
		$('.swiper-container .swiper-slide .active').attr('swiper-num') != '2' && $('.swiper-container .swiper-slide .active').attr('swiper-num') != '3'
		) {
			var gnbswiper = new Swiper('.cate_lec_list .inline .swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				paginationClickable: true,
				initialSlide: $('.swiper-container .swiper-slide .active').attr('swiper-num')
			});
		} else {
			var gnbswiper = new Swiper('.cate_lec_list .inline .swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				paginationClickable: true
			});
		}
	}
});
*/

/*
 * 190328 kmh 추가 및 수정
 */
var headCategory, gnbSwiper;

headCategory = {
	$category : $('.cate_lec_list'),
	defaultTop : 0,
	minNum : 2, // 탭의 크기가 고정 넓이로 보여질 최소 갯수
	set : function(){
		var this_container, this_swiper, this_num, active_num;

		this_container = headCategory.$category.find('.inline');
		this_swiper = this_container.find('.swiper-container');
		this_num = headCategory.$category.find('.swiper-slide').length;
		if(this_num > headCategory.minNum){
			gnbSwiper = new Swiper(this_swiper, {
				slidesPerView: 'auto'
			});

			if(this_swiper.find('.active').length > 0){
				active_num = this_swiper.find('.active').parent().index();
				headCategory.call(active_num);
			}
		}else{
			this_container.addClass('type_cols_fix');
		}

		headCategory.defaultTop = headCategory.$category.offset().top;

	},
	scroll_set : function(pos){
		var cate_next_obj, cate_h, defaultTop;

		cate_next_obj = headCategory.$category.next();
		cate_h = headCategory.$category.outerHeight();
		if(Number($('.pgds-content').css('margin-top').replace('px', '')) > 0){
			defaultTop = headCategory.defaultTop + Number($('.pgds-content').css('margin-top').replace('px', ''));
		}
		if(pos > defaultTop){
			headCategory.$category.addClass('fixed');
			cate_next_obj.css('padding-top', cate_h + 'px');
		}else{
			headCategory.$category.removeClass('fixed');
			cate_next_obj.css('padding-top', '0');
		}
	},
	call : function(num){
		gnbSwiper.slideTo();
	}
}

if(headCategory.$category.length > 0){
	headCategory.set();
}
/* //190328 kmh 추가 및 수정 */




/* 네비게이션 수정 (노치영역) - 개발소스내에 있던 영역 가져옴 200825 syh */
document.addEventListener('DOMContentLoaded', function(event) {
	var numberOfResizes, htmlEl, bodyEl;

	numberOfResizes = 0;
	htmlEl = document.getElementsByTagName('html')[0];
	bodyEl = document.getElementById('pgds-navigation2');

	function onResizeEvent(){
		numberOfResizes += 1;
		bodyEl.style.height = window.innerHeight + 'px';
		if($('.nav-mode').length > 0){
			window.scrollTo(0, 0);
		}
	}

	function onOrientationchangeEvent() {
		onResizeEvent();
		delayedResizeEvent(2000);
	}

	function delayedResizeEvent(time) {
		setTimeout(function() {
			onResizeEvent();
		}, time);
	}

	delayedResizeEvent(100);

	window.addEventListener('resize', onResizeEvent, false);
	window.addEventListener('orientationchange', onOrientationchangeEvent, false);
});
/* // */


/* 230530 syh 홍보배너 (선생님소개, 무료특강, 교재/상품권 공통) */
$(function() {
	subBanSlide = $('#subBanSlide').bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
		speed : 800,
		pause : 3000,
		controls : true,
	});
	$('#subBanSlide .bx-stop').click(function() {
		$(this).addClass('active');
		$('#subBanSlide .bx-start').removeClass('active');
	});
	$('#subBanSlide .bx-start').click(function() {
		$(this).addClass('active');
		$('#subBanSlide .bx-stop').removeClass('active');
	});
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