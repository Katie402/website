var wD = {}; // data성 값
var wS = {}; // script성 function

$(document).ready(function(){
	menuS(); //gnb script
	formS(); //form script
	wS.scrollS(); // scroll script
	wS.tabS(); // tab script
});
$(window).scroll(function(){
	wS.scrollS(); // scroll script
});
$(window).resize(function(){
	wS.resizeS(); // resize script
});
wS.resizeS = function(){
	wD.pageW = $(window).width();
	if(wD.pageW < 1440){
		$(".quickBox").addClass("on");
	}
}
wS.scrollS = function(){
	if($(".topLayoutTop").length > 0){
		wD.winScrollTop = $(window).scrollTop();
		wD.topLayoutTop = $(".topLayoutTop").offset();
		if(wD.winScrollTop > wD.topLayoutTop.top + 80){
			if($("body").hasClass("Bodyscroll") == false){
				$("body").addClass("Bodyscroll");
			}
			if($(".quickTopBtn").hasClass("on") == false){
				$(".quickTopBtn").addClass("on");
			}
			$('.quickBox').css('margin-top',0);
		}else{
			wD.topNavH = $(".topNav").height();
			wD.topMenuBoxTop = $(".topMenuBox").offset();
			$("body").removeClass("Bodyscroll");
			$(".quickTopBtn").removeClass("on");
			if($("div").hasClass("topNav")){
				$('.quickBox').css('margin-top', $(".topNav").height()+1);
			}
		}
	}
}


/*sub top position*/
var topLayoutH = $('.topLayout').height();
var topNavH = $('.topNav').height();
//if($(window).scrollTop() <= 0){
//
//	console.log($(window).scrollTop());
//}else {
//	$('.quickBox').css('top', '101px');
//	console.log($(window).scrollTop());
//}




function formS(){
	$('.listCondition .listcodnitiontitle').click(function(e){
		$('.listCondition .listcodnitiontitle').removeClass('on');
		$(this).addClass('on');
		if($(this).hasClass('up')){
			$(this).removeClass('up');
			$(this).addClass('down');
			$(this).find('.icon-k-down').removeClass('icon-k-down');
			$(this).find('.icon').addClass('icon-k-up');
	   }else {
			$(this).removeClass('down');
			$(this).addClass('up');
			$(this).find('.icon-k-up').removeClass('icon-k-up');
			$(this).find('.icon').addClass('icon-k-down');
	   }
	});
}
function menuS(){

	/*GNB */
	$('.suBu').click(function(){
		if($(this).hasClass("down")){
			$('.subGnbBox').removeClass("on");
			$('.suBu').removeClass("down");
		}else{
			$('.subGnbBox').addClass("on");
			$('.suBu').addClass("down")
		}
	});
	$(".topMenuBoxIn h1").mouseenter(function (){
		$('.subGnbBox').removeClass("on");
		$('.suBu').removeClass("down");
	});
	$(".topMenuBoxIn > ul > li > a").mouseenter(function (){
		$('.suBu').removeClass("down");
		if($(".unitedSearchLayout ").hasClass("on") == false){
			if($(this).attr("id")=="menu1"){
				$(".menu1").addClass("on");
				$(".menu2").removeClass("on");
				$(".topM_sub").addClass("on");
				$('.subGnbBox').removeClass("on");
			}else if($(this).attr("id")=="menu2"){
				$(".menu2").addClass("on");
				$(".menu1").removeClass("on");
				$(".topM_sub").addClass("on");
				$('.subGnbBox').removeClass("on");
			}else{
				$(".menu1").removeClass("on");
				$(".menu2").removeClass("on");
				$('.subGnbBox').removeClass("on");
				$(".topM_sub").removeClass("on");
			}
		}
	});
	$(".suBu").mouseenter(function (){
		if($(".unitedSearchLayout ").hasClass("on") == false){
			$('.subGnbBox').addClass("on");
			$('.suBu').addClass("down");
		}
	});
	$(".topMenuBox").mouseleave(function (){
		$('.subGnbBox').removeClass("on");
		$('.suBu').removeClass("down");
		$(".topM_sub").removeClass("on");
		$(".menu1").removeClass("on");
		$(".menu2").removeClass("on");
	});

	$('.topBuBoxTopIn > li > a').click(function(){
		$(this).parent().toggleClass('on');
		if($(this).parent().hasClass('on')){
			$(this).parent().children('.topBg_sub').stop().slideDown(200);

		}else{
			$(this).parent().children('.topBg_sub').stop().slideUp();
		}
	});
	$('.topBuBoxTopIn > li').mouseleave(function(){
		$(this).removeClass('on');
		$(".topBg_sub").slideUp();
	});
	$(".quickTopBtn").click(function(){
		$("html, body").animate({
	        scrollTop: 0
	    }, 300);
	});

	if($("div").hasClass("topNav")){
		$('.quickBox').css('margin-top', $(".topNav").height()+1);
		$('.quickBox').animate({"opacity":1},1000);
	}else{
		$('.quickBox').animate({"opacity":1},1000);

	}
	/*gng right 특강, 이벤트/혜택  */
	$(".subGnbBRBottom > ul >li").mouseenter(function (){
		$(".subGnbBRBottom > ul >li").removeClass('on');
		$(this).addClass("on");
	});
	$(".subGnbBRBottom > ul >li > dl").mouseleave(function (){
		$(".subGnbBRBottom > ul >li").removeClass('on');
	});
	/* gng left 과목 마우스오버시 */
	$('.subGnbBoxLList dl dd ul li').mouseenter(function (){
		$(this).addClass("on");
	});
	$('.subGnbBoxLList dl dd ul li').mouseleave(function (){
		$(this).removeClass("on");
	});

	$('.searchBarBox a').click(function(){
		$('.subGnbBox').removeClass("on");
		$('.suBu').removeClass("down");
		$(".topM_sub").removeClass("on");
		$(".menu1").removeClass("on");
		$(".menu2").removeClass("on");
		wD.pageH = $(document).height();
		wD.gnbTop = $('.unitedSearchLayout').offset().top;
		if($('.unitedSearchLayout').hasClass("on")){
            $('.unitedSearchLayout').removeClass("on");
				$('.unitedSearchLayout').slideUp();
				$(".searchBg").fadeOut();

         }else{

            $('.unitedSearchLayout').css({"height":wD.pageH-wD.gnbTop,"display":"block"});
				$('.unitedSearchLayout').addClass("on");
				$(".searchBg").fadeIn(function(){
					$(".searchinputBox input").focus();
				});
         }

	});

	$('.unitedSearchIn .icon').click(function(){
		$('.unitedSearchLayout').removeClass("on");
		$(".searchBg").fadeOut();


	});

	 /*loginButton loginPop */
     $('.loginBtn').click(function(){
    	 loginOpen();
     });
     function loginOpen(){
    	 $('.loginPop').fadeIn(150);
         $('.loginPop .layerpopupIn').css({
             'top':100
         });
         $("input[name='user_id']").focus();
         getLoginDefaultVal();

     }

     $('.loginPop .layerPopupCloseButton').click(function(){
        $('.loginPop').fadeOut(100);
     })
     $('.loginPop .layerPopupBackground').click(function(){
        $('.loginPop').fadeOut(100);
	 });
    $('.layerPopupCloseButton, .layerPopupBackground').click(function(){
        $('.layerpopup').fadeOut();
        $("body").removeClass("popupFixed");
    });
	/*freelecList02 */
	 $('.franalydataSlider .list_gallery .freelecoFile li .list_gBox').click(function(){
		$('.layerpopup').css({
			'display':'none !important'
		});
	});

	   /*pageNavigation a click */
	$('.pageNavigationIn li').click(function(){
        $('.pageNavigationIn li').removeClass('on');
        $(this).addClass('on');
	});

	/*quickBox*/
	if($(".quisecIn").length > 0){
		quisecIn  = new sliderS({
			thisN :		'.quisecIn',
			speed:		1000,
			setTime:	1000,
			way : 		"left",
			auto:		true,
			oneStep :	true,
			control : 	"next",
			listLiN : 	 1,
			loop :	true,
			listMargin :	12,
			viewControl :    	'out',
			prevBu :			'<span class="icon-k-prev3"></span>',
			nextBu :			'<span class="icon-k-next3"></span>',
		});
	}

	if($(".quisecIn2").length > 0){
		quisecIn2  = new sliderS({
			thisN :		'.quisecIn2',
			speed:		1000,
			setTime:	5000,
			way : 		"left",
			auto:		true,
			oneStep :	true,
			control : 	"next",
			listLiN : 	 1,
			loop :	true,
			listMargin :	12,
			viewControl :    	'out',
			prevBu :			'<span class="icon-k-prev3"></span>',
			nextBu :			'<span class="icon-k-next3"></span>',
		});
	}


	if(document.cookie.indexOf("quickN=on") > -1){
		$('.quickBox').addClass('on');
	}else{
		$('.quickBox').removeClass('on');
	}


	var dateN = new Date();
	dateN.setDate(dateN.getDate() - 1);
	$('.quickBox .qsideBtn').on('click', function(){
		$(".quickBox").toggleClass('on');
		if($('.quickBox').hasClass('on')){
			document.cookie = "quickN=off; path=/; Expires=" + dateN.toUTCString();
			document.cookie = "quickN=on; path=/;";
		}else {
			document.cookie = "quickN=on; path=/; Expires=" + dateN.toUTCString();
			document.cookie = "quickN=off; path=/;";
		}
	});


	/* 수강신청 */
	// $(".topNavL > h2").click(function(){
	// 	$(".topNavSubBox").slideToggle(300);
	// 	$(this).toggleClass("on");
	// });
	// $('.footTR').selectric();
}

wSLoader = function(n){ // n:this,m:target
	this.start = function(n){
		$(n).prepend('<div class="subLoader"><div id="loading"></div></div>');
		$(n).find(".subLoader").fadeIn();
		//$(n).children(".subLoader").fadeIn(300);
	}
	this.end = function(n){
		$(n).find(".subLoader").fadeOut(function(){
			$(n).remove('.subLoader');
		});

		//$(n).children(".subLoader").fadeIn(300);
	}
}
wS.loader = new wSLoader();
wS.tabS = function(){
	$(".tabS").each(function(){
		if($(this).children("ul").length > 0){
			wD.tabS = $(this).children("ul").children("li");
		}else{
			wD.tabS = $(this).children("li");
		}
		wD.tabS._index = wD.tabS.length;
		wD.tabS._width = $(this).width();
		wD.tabS.css("width",(wD.tabS._width-1)/wD.tabS._index);
		wD.tabS.find("span").css("width",wD.tabS._width/wD.tabS._index);
	});
}
/*tab 모듈 */
$.fn.tabS = function(options){
	var defaults = {
		children :	"ul", //[ul,li]
		aTarget :	true,
		clickS :	false,
		widthAuto : true,
		tabOn : true
	};
	var options = $.extend(defaults, options);
	var tN = $(this);
	var thisTn,thisTarget,thisIndex,thisW,thisL;
	if(options.children == "ul"){
		thisTn = tN.children("ul").children("li");
	}else{
		thisTn = tN.children("li");
	}
	if(options.widthAuto == true){
		thisW = tN.width();
		thisL = thisTn.length;
		thisTn.css("width",(thisW-1)/thisL);
	}
	thisTn.children("a").click(function(e){
		if(options.tabOn == true){
			thisIndex = $(this).parent().index();
			thisTn.removeClass("on");
			$(this).parent().addClass("on");
		}
		if(options.clickS !== false){
			eval(options.clickS+"("+thisIndex+")");
		}
	});
}
/* 슬라이드 모듈 */
function sliderS(options){
	var defaults = {
		thisN :				null,
		control :			'pointer',	// [pointer,next,duel}
		speed:				1000,
		setTime:			1000,
		listLiN : 			1,
		tabletN	:			false,
		mobileN	:			false,
		oneStep : 			false,
		tabletW : 			1200,
		mobileW : 			640,
		listMargin :		0,
		listMobileMargin :	0,
		viewControl :    	'in', // [in, out]
		prevBu :			'<span class="icon-k-prev"></span>',
		nextBu :			'<span class="icon-k-next"></span>',
		auto :				true,
		loop :				false,
		textN :				false, // [강남,종로,신촌]
		way : 				"left", // [top, left, right, fadeIn]
		zIndex :			1,
		moveN : 			1,
		startN :			0,
		clickS :			false, // 클릭 시 외부에서 스크립트를 사용
		totalN :			false
	};

	var options = $.extend(defaults, options);
	console.log(options.thisN);
	var th = this;	// 프로퍼티상의 this
	var tN = $(options.thisN); // 모듈 타겟으로서의 this
	var thisTn;	// 컨트롤러 위치의 this
	if(options.viewControl === "in"){
		thisTn = $(options.thisN);
	}else{
		thisTn = $(options.thisN).parent();
	}
	var pageW = $(window).width();
	var tNWH,tNW; // 에어리어의 가로세로 크기 way값에 영향을 받음
	var mainTN = 0; //현재 롤링 위치
	var listN = tN.children("ul").children("li").length; //롤링 총 갯수
	var sHtml;	// 출력을 위한 변수
	var listWH; //엘리먼트의 가로세로 크기
	var listLiN; //한번에 표출되는 갯수

	var typeN; // 현재 타입 [mobile,tablet,web]
	var typeS; // 최종 현재타입  [mobile,tablet,web]

	var lock = 0;

	var ways = "margin-"+options.way;

	var loopDom; //루프 시 엘리먼트를 추가할때 사용
	var loop = 1; //루프 사용안함[1], 루프 사용[3]
	var textList; //텍스트 리스트 명칭 도입을 위한 값
	var mOver = 0; // mouse over시 스크립트 제어
	var mOverN;

	th.listLiN = function(){
		if(pageW < options.mobileW){
			if(options.mobileN === false){
				listLiN = options.listLiN;
				typeN = "web";
			}else{
				listLiN = options.mobileN;
				typeN = "mobile";
			}
		}else if(pageW < options.tabletW){
			if(options.tabletN === false){
				listLiN = options.listLiN;
				typeN = "web";
			}else{
				listLiN = options.tabletN;
				typeN = "tablet";
			}
		}else{
			listLiN = options.listLiN;
			typeN = "web";
		}
	}
	th.listLiN(); //현재 반응형 모드를 확인
	if(options.loop && listN > listLiN && options.way !== "fadeIn"){
		loopDom = tN.children("ul").html();
		tN.children("ul").children("li").addClass("real");
		tN.children("ul").prepend(loopDom);
		tN.children("ul").append(loopDom);
		loop = 3;
		mainTN = listN;
	}else{
		tN.children("ul").children("li").addClass("real");
	}


	if(options.clickS !== false){
		tN.children("ul").children("li").click(function(){
			(options.loop) ? eval(options.clickS+"("+($(this).index())%listN+")") : eval(options.clickS+"("+$(this).index()+")");
		});
	}



	th.tnSet = function (){
		tNW = tN.width();
		pageW = $(window).width();
		th.listLiN(); //현재 반응형 모드를 확인
		tN.children("ul").css("transition","all "+(options.speed/1000)+"s ease");
		if(options.way === "left" || options.way === "right"){
			tNWH = tN.width();
			listWH = tNWH/listLiN-options.listMargin+(options.listMargin/listLiN);
			tN.children("ul").children("li").css("width",listWH).css("float","left");
			tN.children("ul").children("li").css("margin-right",options.listMargin);
			if(options.way == "right"){
				tN.children("ul").css({"width":(listWH+options.listMargin)*(listN*loop),"float":"right"});
			}else{
				tN.children("ul").css("width",(listWH+options.listMargin)*(listN*loop)+listWH);
			}
			tN.children("ul").css(ways,-((listWH+options.listMargin)*mainTN));
		}else if(options.way == "fadeIn"){
			tNWH = tN.width();
			listWH = tN.width();
			tN.children("ul").children("li").css({"width":listWH,"position":"absolute","z-index":options.zIndex,"opacity":0});
			tN.children("ul").css("height",tN.children("ul").children("li").eq(mainTN).height());
			tN.children("ul").children("li").eq(mainTN).find("img").load(function(){
				tN.children("ul").css("height",tN.children("ul").children("li").eq(mainTN).height());
			});
		}else{
			tNWH = tN.height();
			listWH = tNWH/listLiN-options.listMargin+(options.listMargin/listLiN);
			tN.children("ul").children("li").css("height",listWH);
			tN.children("ul").children("li").css("margin-bottom",options.listMargin);
			tN.children("ul").css(ways,-((listWH+options.listMargin)*mainTN));
		}

		if(typeN !== typeS || typeS == undefined){
			if(options.control === "pointer" || options.control === "duel"){
			    sHtml = '<div class="wvNumBox">';
			    tN.children("ul").children("li.real").each(function(m){
					(options.textN === false) ? textList =  m : textList =  options.textN[m];
			    	if((m) % listLiN === 0 || options.oneStep){
			    		if(loop === 1){
			    			if(mainTN == m){
								sHtml += '<a href="javascript:void(0);" class="on" lnum="'+m+'"><span>'+textList+'</span></a>';
							}else{
								sHtml += '<a href="javascript:void(0);" lnum="'+m+'"><span>'+textList+'</span></a>';
							}
			    		}else{
			    			if(mainTN == m+listN){
								sHtml += '<a href="javascript:void(0);" class="on" lnum="'+m+'"><span>'+textList+'</span></a>';
							}else{
								sHtml += '<a href="javascript:void(0);" lnum="'+m+'"><span>'+textList+'</span></a>';
							}
			    		}
			    	}
			    });

			    if(options.auto){
			    	sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="icon-pause2"><strong>정지</storng></span></a></div>';
				}else{
					sHtml += '<div class="wvNumBoxIn"><a href="javascript:;"><span class="icon-play3"><strong>시작</storng></span></a></div>';
				}
				if(options.totalN){
					sHtml += '<div class="totalSlider"><span class="sliderSceen">'+ (mainTN+1) +'</span><span class="totalSceen">'+ listN +'</span></div>';
				}
			    sHtml += '</div>';
			    thisTn.find(".wvNumBox").remove();
			    (options.viewControl === "in") ? tN.prepend(sHtml) : tN.before(sHtml);
			    thisTn.find(".wvNumBox > a").click(function(){
		    		if(lock === 0){
						clearTimeout(th.vTime);
						lock = 1;
						thisTn.find(".wvNumBox").addClass("lock");
		    			th.vsStart(Number($(this).attr("lNum")),"go");
					}
		    	});
			    thisTn.find(".wvNumBoxIn a").click(function(){
					if(options.auto){
						clearTimeout(th.vTime);
						thisTn.find(".wvNumBoxIn span").removeClass("icon-pause2");
						thisTn.find(".wvNumBoxIn span").addClass("icon-play3");
						thisTn.find(".wvNumBoxIn strong").text("시작");
						options.auto = false;
					}else{
						options.auto = true;
						th.vsStart(Number(mainTN));
						thisTn.find(".wvNumBoxIn span").removeClass("icon-play3");
						thisTn.find(".wvNumBoxIn span").addClass("icon-pause2");
						thisTn.find(".wvNumBoxIn strong").text("정지");
					}
				});
			}
			if(options.control === "next" || options.control === "duel"){
				if(typeS == undefined){
					sHtml = '<div class="wvNextBox">';
				    sHtml += '<a class="prevBu" href="javascript:void(0);">'+options.prevBu+'</a>';
				    sHtml += '<a class="nextBu" href="javascript:void(0);">'+options.nextBu+'</a>';
					if(options.totalN && options.control !== "duel"){
						sHtml += '<div class="totalSlider"><span class="sliderSceen">'+ (mainTN+1) +'</span><span class="totalSceen">'+ listN +'</span></div>';
					}
				    sHtml += '</div>';
				    if(options.viewControl == "in"){
				    	thisTn.prepend(sHtml);
				    }else{
				    	tN.before(sHtml);
				    }
				    thisTn.find(".prevBu").click(function(){
						if(lock === 0){
							clearTimeout(th.vTime);
							lock = 1;
							thisTn.find(".wvNextBox").addClass("lock");
							if(options.oneStep){
								th.vsStart(mainTN-1,'prev');
							}else{
								th.vsStart(mainTN-listLiN,'prev');
							}

						}
				    });
				    thisTn.find(".nextBu").click(function(){
				    	if(lock == 0){
							clearTimeout(th.vTime);
							lock = 1;
							thisTn.find(".wvNextBox").addClass("lock");

							if(options.oneStep){
								th.vsStart(mainTN+1,'next');
							}else{
								th.vsStart(mainTN+listLiN,'next');
							}
				        }
				    });
				}
				if(listN <= listLiN){
					thisTn.find(".wvNextBox").hide();
				}else{
					thisTn.find(".wvNextBox").show();
				}
			}
			typeS = typeN;
		}
	}
	th.vsStart = function(n,m){
		lock = 1;
		//start script

		clearTimeout(th.vTime);
		if(tN.children("ul").css("transition-property") === "none"){
			tN.children("ul").css("transition","all "+(options.speed/1000)+"s ease");
		}
		if(m === "next"){
			(loop === 1 && mainTN+1 >= listN) ? mainTN = 0 : mainTN = n;
		}else if(m === "go"){
			(loop === 3) ? mainTN = n+listN : mainTN = n;
		}else if(m === "prev"){
			(loop === 1 && mainTN < 0) ? mainTN = listN : mainTN = n;
		}

		th.vsStart._this = tN.children("ul").children("li").eq(mainTN);
		//console.log("mainTN : "+mainTN+":::"+listN);


		//action script
		if(options.way !== "fadeIn"){
			tN.children("ul").css(ways,-((listWH+options.listMargin)*mainTN));
			tN.children("ul").css("height",tN.children("ul").children("li").eq(mainTN).height());
			th.lTime=setTimeout(
				function(){
					lock = 0;
					if(options.control === 'pointer' || options.control === 'duel'){thisTn.find(".wvNumBox").removeClass("lock")}
					if(options.control === 'next' || options.control === 'duel'){thisTn.find(".wvNextBox").removeClass("lock")}
					if(m === "next" && th.vsStart._this.hasClass("real") === false){
						tN.children("ul").css("transition-property","none");
						mainTN = listN;
						tN.children("ul").css(ways,-(listWH+options.listMargin)*mainTN);
					}else if(m === "prev" && th.vsStart._this.hasClass("real") === false){
						tN.children("ul").css("transition-property","none");
						mainTN = (listN*2)-1;
						tN.children("ul").css(ways,-(listWH+options.listMargin)*mainTN);
					}
					th.endS();
				}, options.speed+100
			);

		}else{
			if(mainTN < 0){
				mainTN = listN-1;
			}
			 tN.children("ul").children("li").eq(mainTN).css({"opacity":0,"z-index":(options.zIndex+2)});
			 tN.children("ul").css("height",tN.children("ul").children("li").eq(mainTN).height());
			 tN.children("ul").children("li").eq(mainTN).animate({"opacity":1},options.speed,function(){
				tN.children("ul").children("li").each(function(n){
				   if(n === mainTN){
					  $(this).css("z-index",(options.zIndex+1));
				   }else{
					  $(this).css({"z-index":(options.zIndex),"opacity":0});
				   }
				});
				lock = 0;
				if(options.control === 'pointer' || options.control === 'duel'){thisTn.find(".wvNumBox").removeClass("lock")}
				if(options.control === 'next' || options.control === 'duel'){thisTn.find(".wvNextBox").removeClass("lock")}
				th.endS();
			 });
		}
		tN.children("ul").children("li").removeClass("on");
		tN.children("ul").children("li").eq(mainTN).addClass("on");
		if(options.totalN){
			(loop === 1) ? thisTn.find(".sliderSceen").text(Number(mainTN+1)) : thisTn.find(".sliderSceen").text(Number((mainTN+1)-listN));
		}
		if(options.control === 'pointer' || options.control === 'duel'){
			thisTn.find(".wvNumBox > a").removeClass("on");
			(loop === 1) ? thisTn.find(".wvNumBox > a").eq(mainTN).addClass("on") : thisTn.find(".wvNumBox > a").eq(mainTN-listN).addClass("on");
			if(loop !== 1 && mainTN >= listN*2){
				thisTn.find(".wvNumBox > a").eq(0).addClass("on");
			}
		}
	}
	th.endS = function(){
		clearTimeout(th.lTime);
		clearTimeout(th.vTime);
		if(options.auto && mOver === 0  && listN > listLiN){
			th.vTime=setTimeout(function(){th.vsStart(mainTN+1,'next');}, options.setTime);
		}
	}
	th.tnSet();

	if(options.way !== "fadeIn"){
		//if(loop !== 1){
		//	mainTN = listN;
		//}
		console.log("mainTN"+mainTN);
		clearTimeout(th.lTime);
		clearTimeout(th.vTime);
		tN.children("ul").css("transition-property","none");
		th.vTime=setTimeout(function(){
			tN.children("ul").css(ways,-(listWH+options.listMargin)*mainTN);
		}, 100);

	}else{
		tN.children("ul").children("li").eq(mainTN).css({"opacity":1,"z-index":(options.zIndex+2)});
	}

	th.endS();

	$(window).resize(function(){
		if(tNW !== tN.width()){
			th.tnSet();
		}
	});

	tN.children("ul").children("li").mouseenter(function(){
		mOver = 1;
		clearTimeout(th.vTime);
	});
	tN.children("ul").children("li").mouseleave(function(){
		mOver = 0;
		//console.log(listN+"::::"+listLiN);
		if(options.auto && listN > listLiN){
			th.vTime=setTimeout(function(){th.vsStart(mainTN+1,'next');}, options.setTime);
		}
	});

	th.clearS = function(){
		tN.children("ul").children("li").off();
		clearTimeout(th.lTime);
		clearTimeout(th.vTime);
		th.vsStart  = null;
		th.vTime = null;
		th.endS = null;
		th.tnSet = null;
		th.autoS = null;
		th.listLiN = null;
		if(options.control === 'pointer' || options.control === 'duel'){
			thisTn.find(".wvNumBox").remove();
		}
		if(options.control === 'next' || options.control === 'duel'){
			thisTn.find(".wvNextBox").remove();
		}
	}

}

function kakaoOpen(){
	$('.pop_kakao').css("display","block");
	$('.pop_kakao .btn_close').click(function(){
		kakaoClose();
	});
}
function kakaoClose(){
	$('.pop_kakao').css("display","none");
}
