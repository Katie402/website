/* 마하 컨셉 공통 210514 syh */
var effect;
effect = {
	play : true,
	gap : 220,
	set : function(ex){
		var delay;
		if(ex){
			$.each(ex, function(index){
				delay = 0.2 * index;
				$(this).css({
					'-ms-transition-delay' : delay+'s',
					'-webkit-transition-delay' : delay+'s',
					'transition-delay' : delay+'s',
				});
			});
			effect.call($(window).scrollTop());
		}
		effect.play = true;
	},
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
					ex_top = (this_class.indexOf('type-scale-out') > -1) ? 0 : -450;
				}else if(this_class.indexOf('type-bottom') > -1){
					ex_top = 100;
				}

				/* 210812 syh 추가 */
				else if(this_class.indexOf('type-flow1') > -1){
					ex_top = 0;
				}
				else if(this_class.indexOf('type-flow2') > -1){
					ex_top = 0;
				}
				else if(this_class.indexOf('type-flow3') > -1){
					ex_top = 0;
				}
				else if(this_class.indexOf('type-flow4') > -1){
					ex_top = 0;
				}
				/*//*/

				action_top += ex_top;

				if(action_top >= items_top){
					$(this).addClass('action');
					before_item_top = items_top;
				}
			});
		}
	}
}
$(window).on('load scroll', function(){
	var pos;
	if(effect.play){
		pos = $(this).scrollTop();
		effect.call(pos);
	}
});

$(document).ready(function(){
	var winners, winners_slide;

	winners = {
		$items : $('.winnerList li'),
		set : function(){
			winners_slide = $('.winnerList ul').bxSlider(winners.opt);
		},
		opt : {
			mode : 'horizontal',
			minSlides : 5,
			maxSlides : 5,
			slideWidth:232,
			slideMargin:14,
			ticker:true,
			autoHover:true,
			speed : $('.winnerList li').length * 2000
		}
	}
	if(winners.$items.length > 5){
		winners.set();
	}
	var takeOffSlide, activeInterval, takeOff, passage;

	takeOff = {
		set : function(){
			var dotX, dotY, aX, aY, dotOpt, hold, countNum, holdCheck;

			passage.dots = '';
			hold = Math.round(passage.count / (passage.stronghold - 1));
			for(var h = 0; h <= passage.stronghold - 1; h++){
				passage.holdArr[h] = (hold * h > passage.count) ? passage.count : hold * h;
			}

			if(passage.holdArr.length < passage.stronghold - 1){
				passage.holdArr[passage.stronghold - 1] = passage.count;
			}

			countNum = -1;
			for(var i = passage.angle; i <= 360; i += passage.angle / passage.count){
				countNum++;
				holdCheck = false;
				dotX = Math.floor(passage.radiusX * Math.cos(passage.degreesToRadians(i)));
				dotY = Math.floor(passage.radiusY * Math.sin(passage.degreesToRadians(i)));

				aX = Math.floor(500 * Math.cos(passage.degreesToRadians(i)));
				aY = Math.floor(400 * Math.sin(passage.degreesToRadians(i)));
				dotOpt = 'transform:translate('+dotX+'px, '+dotY+'px)';
				$.each(passage.holdArr, function(idx, item){
					if(countNum == item){
						passage.dots += '<span class="dot stronghold" style="'+dotOpt+'" data-idx="'+idx+'"></span>';
						passage.labels.eq(idx).css({
							'transform' : 'translate('+dotX+'px, '+dotY+'px)'
						});
						passage.holdX[idx] = dotX;
						passage.holdY[idx] = dotY;
						passage.apX[idx] = aX;
						passage.apY[idx] = aY;
						holdCheck = true;
					}
				});
				if(!holdCheck){
					passage.dots += '<span class="dot" style="'+dotOpt+'"></span>';
				}

				if(countNum == 0){
					passage.airplane.css({
						'transform' : 'translate('+dotX+'px, '+dotY+'px)'
					});
				}
			}

			passage.container.prepend(passage.dots);

			if(passage.stronghold != $('.takeOffSlide li').length){
				alert('TAKE-OFF 단계의 갯수와 슬라이드의 갯수와 다릅니다.');
			}

			takeOffSlide = $('.takeOffSlide ul').bxSlider({
				moveSlides:1,
				auto:true,
				pause:3000,
				infiniteLoop:true,
				pager:true,
				nextSelector:'.takeOffSlide .next',
				prevSelector:'.takeOffSlide .prev',
				onSlideBefore:function($slideElement, oldIndex, newIndex){
					takeOff.active(newIndex);
				}
			});

			takeOff.active(0);
		},
		active : function(courseIdx){
			var dotItems, activeDots, activeIdx, strongHolds;

			if(activeInterval){
				clearInterval(activeInterval);
			}

			dotItems = $('.coursePassage .dot');
			strongHolds = $('.coursePassage .stronghold');
			dotItems.removeClass('active');
			$.each(dotItems, function(idx){
				if(idx > passage.holdArr[courseIdx] && idx < passage.holdArr[courseIdx + 1]){
					dotItems.eq(idx).addClass('active');
				}
			});

			activeDots = $('.coursePassage .active');
			activeIdx = 0;
			activeInterval = setInterval(function(){
				$('.coursePassage .on').removeClass('on');
				activeDots.eq(activeIdx).addClass('on');
				activeIdx++;
				if(activeIdx >= activeDots.length){
					activeIdx = 0;
				}
			}, 150);

			passage.airplane.css({
				'transform' : 'translate('+passage.apX[courseIdx]+'px, '+passage.apY[courseIdx]+'px)'
			});
			strongHolds.removeClass('current');
			strongHolds.eq(courseIdx).addClass('current');
			passage.labels.removeClass('current');
			passage.labels.eq(courseIdx).addClass('current');
		}
	}
	passage = {
		container : $('.coursePassage .inPassage'),
		labels : $('.passageLabel li'),
		airplane : $('.coursePassage .airplane'),
		apX : [],
		apY : [],
		holdArr : [],
		holdX : [],
		holdY : [],
		radiusX : $('.coursePassage .inPassage').outerWidth() / 2,
		radiusY : $('.coursePassage .inPassage').outerHeight() / 2,
		stronghold : $('.passageLabel li').length,
		angle : 180,
		count : 70,
		dots : '',
		activeDot : '',
		xArr : [],
		yArr : [],
		degreesToRadians : function(degrees){
			var pi = Math.PI;
			return degrees * (pi / 180);
		}
	}

	if(passage.container.length > 0){
		takeOff.set();
	}

	$('.coursePassage .stronghold').on('click', function(){//동적 생성된 엘리먼트
		var activeIdx;

		activeIdx = $(this).attr('data-idx');
		takeOffSlide.goToSlide(activeIdx);
		return false;
	});

	var curri;

	curri = {
		$list : $('.curriList'),
		$item : $('.curriList li'),
		$navWrap : $('.curriListWrap .nav'),
		$nav : $('.curriListWrap .nav a'),
		idx : 0,
		view : 3,
		course : 'prev',
		action : function(){
			var xW, opt;

			xW = curri.$item.eq(0).outerWidth() + 20;
			opt = {
				'-ms-transform' : 'translate('+ (-xW * curri.idx) + 'px, 0)',
				'-webkit-transform' : 'translate('+ (-xW * curri.idx) + 'px, 0)',
				'transform' : 'translate('+ (-xW * curri.idx) + 'px, 0)',
			}
			curri.$list.css(opt);
		},
		filter : function(nav_obj){
			curri.course = nav_obj.attr('class');
			curri.idx = (curri.course == 'next') ? curri.idx + 1 : curri.idx - 1;
			curri.$nav.removeClass('disabled');
			if(curri.idx <= 0){
				curri.idx = 0;
				curri.$navWrap.find('.prev').addClass('disabled');
			}else if(curri.idx >= curri.$item.length - 3){
				curri.idx = curri.$item.length - 3;
				curri.$navWrap.find('.next').addClass('disabled');
			}
			curri.action();
		}
	}

	curri.$nav.on('click', function(){
		if($(this).attr('class').indexOf('disabled') < 0){
			curri.filter($(this));
		}
		return false;
	});

	var specialYoutube;

	specialYoutube = {
		$tab : $('.sec_special .tabs'),
		$trigger : $('.sec_special .tabs a'),
		$cont : $('.sec_special .tabCont .youtubeBox'),
		reset : function(){
			specialYoutube.$trigger.removeClass('on');
			specialYoutube.$cont.hide();
		},
		action : function(tab_obj){
			var activeCont;

			specialYoutube.reset();
			activeCont = $(tab_obj.attr('href'));
			tab_obj.addClass('on');
			activeCont.show();
		}
	}
	specialYoutube.$trigger.on('click', function(){
		if(!$(this).is('.on')){
			specialYoutube.action($(this));
		}
		return false;
	});

	var guidePop;

	guidePop = {
		$close : $('.mach_guidePopup .btn_pop_close'),
		$btn : $('.btn_guide_pop'),
		call : function(id, state){
			var activePop, yPos;

			activePop = $('#' + id);
			if(state){
				activePop.appendTo('body');
				yPos = $(window).scrollTop() + ($(window).outerHeight()) / 2 - (activePop.outerHeight() / 2);
				activePop.css('top', yPos + 'px');
				activePop.addClass('show');
			}else{
				activePop.removeClass('show');
			}
		}
	}

	guidePop.$close.on('click', function(){
		var layerID;

		layerID = $(this).closest('.mach_guidePopup').attr('id');
		guidePop.call(layerID, false);
		return false;
	});

	guidePop.$btn.on('click', function(){
		var layerID;

		layerID = $(this).attr('href');
		guidePop.call(layerID, true);
		return false;
	});

	var typeSheet, typeInterval;

	typeSheet = {
		$wrap : $('.type_sheet'),
		$trigger : $('.type_sheet thead th, .type_sheet tbody td'),
		$cover : $('.type_sheet .active_cover'),
		count : $('.type_sheet thead th').not('.space_cell').length,
		pause : 2000,
		idx : 0,
		set : function(){
			typeSheet.autoPlay();
			typeSheet.action();
		},
		action : function(){
			var coverX;
			var active_cell = [];

			active_cell = [
				$('.type_sheet thead th').not('.space_cell').eq(typeSheet.idx),
				$('.type_sheet .result_cell td').eq(typeSheet.idx)
			];
			coverX = active_cell[0].position().left;
			typeSheet.$cover.css('left', coverX + 'px');
			$('.type_sheet .active').removeClass('active');
			$.each(active_cell, function(idx, item){
				item.addClass('active');
			});
		},
		filter : function(cell){
			var cdx, dummy;

			cdx = cell.index();
			if(cell.closest('thead').length > 0){
				dummy = cell.closest('tr').find('.space_cell').length;
			}else{
				dummy = cell.closest('tr').find('th').length;
			}

			typeSheet.idx = cdx - dummy;
			typeSheet.action();
		},
		autoPlay : function(){
			typeInterval = setInterval(function(){
				typeSheet.idx ++;
				if(typeSheet.idx >= typeSheet.count){
					typeSheet.idx = 0;
				}

				typeSheet.action();
			}, typeSheet.pause);
		}
	}

	typeSheet.$trigger.on('mouseenter', function(){
		typeSheet.filter($(this));
	});

	typeSheet.$wrap.on('mouseleave', function(){
		clearInterval(typeInterval);
		typeSheet.autoPlay();
	});

	if(typeSheet.$wrap.length > 0){
		typeSheet.set();
	}
});


/* 오즈랑 */
$(document).ready(function(){
	var step, ozlangTab;
	step = {
		$wrap : $('.stepContWrap'),
		state : false,
		action : function(){
			step.state = true;
			step.$wrap.addClass('active');
		}
	}

	ozlangTab = {
		$tab : $('.ozlangTabs'),
		$trigger : $('.ozlangTabs a'),
		$cont : $('.ozlangTabCont'),
		action : function(obj){
			var activeCont;

			ozlangTab.$tab.find('.on').removeClass('on');
			obj.addClass('on');
			activeCont = $(obj.attr('href'));
			ozlangTab.$cont.hide();
			activeCont.show();
		}
	}

	ozlangTab.$trigger.on('click', function(){
		ozlangTab.action($(this));
		return false;
	});
});
/* //오즈랑 */

/* 하단 이용안내 내용 펼침/접힘 221121 kmh */
$(document).ready(function(){
	var cmm_notice;

	cmm_notice = {
		$wrap : $('#notice'),
		$tit : $('#notice .tit'),
		$container : $('#notice .use_cont'),
		default_tit : $('#notice .tit').text(),
		tit_set : function(state){
			var tit_arr;

			if(cmm_notice.default_tit.indexOf('▼') > -1){
				cmm_notice.default_tit = cmm_notice.default_tit.split('▼')[0];
			}

			tit_arr = (state) ? ' ▲' : ' ▼';
			cmm_notice.$tit.text(cmm_notice.default_tit + tit_arr);
		},
		call : function(){
			if(cmm_notice.$wrap.attr('class') && cmm_notice.$wrap.attr('class').indexOf('active') > -1){
				cmm_notice.$wrap.removeClass('active');
				cmm_notice.$container.css({
					'height' : '60px',
				});
				cmm_notice.tit_set(false);
			}else{
				cmm_notice.$wrap.addClass('active');
				cmm_notice.$container.css({
					'height' : 'auto',
				});
				cmm_notice.tit_set(true);
			}
		},
		set : function(){
			if(cmm_notice.$tit.length > 0){
				cmm_notice.tit_set(false);
				cmm_notice.$tit.css({
					'cursor' : 'pointer'
				});
				cmm_notice.$container.css({
					'overflow' : 'hidden',
					'height' : '60px',
					'box-sizing' : 'content-box',
				});
			}
		}
	}

	if(cmm_notice.$wrap.length > 0){
		cmm_notice.set();

		cmm_notice.$tit.on('click', function(){
			cmm_notice.call();
		});
	}
});