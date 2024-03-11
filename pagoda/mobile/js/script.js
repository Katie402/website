var wD = {}; // data성 값
var wS = {}; // script성 function

$(document).ready(function () {
    /*
     * 스페셜로고
     */
    var spLogo;

    spLogo = {
        $special : $('#type_special'),
        pointY : 10,
        call : function(scY){
            console.log(scY);
            if(scY >= spLogo.pointY){
                spLogo.$special.addClass('Bodyscroll');
            }else{
                spLogo.$special.removeClass('Bodyscroll');
            }
        }
    }

    $(window).on('scroll', function(){
        if(spLogo.$special.length > 0){
            spLogo.call($(this).scrollTop());
        }
    });
    /* //스페셜로고 */


	menuS(); // gnb script
    $('.topLayoutTopIn li').click(function () {
        $('.topLayoutTopIn ul li').removeClass('on');
        $(this).addClass('on');
    });
    var topGnbRIn = $('.topGnbRIn a');

    function topGnbRInmouseEvent(e) {
        var etype = e.type;
        $('.topGnbRIn a').removeClass('on');
        $(this).addClass('on');
    }
    topGnbRIn.on('mouseenter mouseleave focus', topGnbRInmouseEvent);

    /*실수강생이 작성한 솔직한 평점 물음표 마우스오버시  */
    $('.helpex').mouseenter(function () {
        $(this).siblings('.helpexContainer').fadeIn(250);
        $(this).css('backgroundColor', '#d31f21');
    });
    $('.helpex').mouseleave(function () {
        $('.helpexContainer').fadeOut(250);
        $(this).css('backgroundColor', '#D7D7D7');
    });

    $('.listLayout .list_gBox ').mouseover(function () {
        $(this).addClass('on');
    });
    $('.listLayout .list_gBox ').mouseleave(function () {
        $(this).removeClass('on');
    });

    /*webzine 이미지 오버시  */
    $('.webzineLeft ').mouseover(function () {
        $(this).addClass('on');
    });
    $('.webzineLeft ').mouseleave(function () {
        $(this).removeClass('on');
    });
    
    /*마이페이지 - 수업일 확인 클릭시 */
    $('.checkClassDay').click(function(){
		$(this).parents('.classTitle').find('.classChoLayoutCanlLayout').fadeIn();
	});
	$('.classChoLayoutCanl .icon-k-close').click(function(){
		$(this).parents('.classTitle').find('.classChoLayoutCanlLayout').fadeOut();
	});


    /*선생님 소개페이지 수강후기 최신순 평점순 클릭시 red색상으로 변화 */
   /* $('.listCondition span').click(function () {
        $('.listCondition span').removeClass('red');
        $(this).addClass('red');
    });*/
    
    /*정렬순*/
    $('.listCondition .listcodnitiontitle').click(function(e){
		
		var target = $(e.target);
		target.siblings().removeClass('on');
		target.addClass('on');
		
		if(target.hasClass('up')){
			target.removeClass('up');
			target.addClass('down');
			target.find('.icon-k-down').removeClass('icon-k-down');
			target.find('.icon').addClass('icon-k-up');
	   }else {
		   target.removeClass('down');
		   target.addClass('up');
		   target.find('.icon-k-up').removeClass('icon-k-up');
		   target.find('.icon').addClass('icon-k-down');
	   }
	});
    

    
    
  //탭 전체 영역(너비) - 통합검색
  	var tabtotalWidth5 = 0;
    var tabs5 = $('.PopularScList li');
            
    tabs5.each(function(){
    	tabtotalWidth5 = tabtotalWidth5 + $(this).outerWidth(true);
    });
                
    $('.PopularScList').css('width', tabtotalWidth5 + 16);
    
    
    /* 선생님 소개페이지 강의목록 2월강의 3월강의 클릭시 변화 */
    $('.pannel03Title').click(function () {
        $('.pannel03Title').removeClass('on');
        $('.pannel03Title span').removeClass('red');
        $(this).addClass('on');

        if ($(this).find('span')) {
            $(this).find('span').addClass('red')
        }
    });
    
    //학원소개
/*    $('.floorsInfoBox').hide().eq(0).show();
    $('.allClass').hide().eq(0).show();
    $('.trafficCont').hide().eq(0).show();*/


    /* layerpopup open */
    $('.list_gBox').click(function () {
       
    	//프로그램 부분과 겹쳐서 삭제함
        //$('.layerpopup').fadeIn(100);
        //$('html').scrollTop(0);
    });
    
    //모바일 수강증 발급 팝업
    $('.atPop').click(function () {
        $('.attendancePop').fadeIn(100);
    });
    
    //출석확인증 팝업
    $('.attendanceBtn').click(function () {
        $('.atdCheckPop').fadeIn(100);
    });
    
    //수강신청내역 - 강의안내 팝업
    $('.chPop').click(function () {
        $('.classChangePop').fadeIn(100);
    });
    
    
    //쿠폰다운 팝업
    $('.cuponDownBtn').click(function () {
        $('.cuponDownPop').fadeIn(100);
    });
    
   //mp3 팝업
    $('.mp3playBtn').click(function () {
        $('.layerpopupmp3').fadeIn(100);
    });
    
  
    
    
    
    /*layerpopup close */
    $('.layerPopupCloseButton').click(function () {
        $('.layerpopup').fadeOut();
        $('.step4DetailPop').fadeOut();
        $('.cuponDownPop').fadeOut();
        $('.atdCheckPop').fadeOut();
        $('.layerpopupmp3').fadeOut();
        
    });
    $('.layerPopupBackground').click(function (e) {
        $('.layerpopup').fadeOut();
        $('.step4DetailPop').fadeOut();
        $('.cuponDownPop').fadeOut();
        $('.atdCheckPop').fadeOut();
        $('.layerpopupmp3').fadeOut();

    });
    
    /*교재 다운로드 팝업*/
    $('.bookDownloadPopup dt').on('click', function () {

        if ($(this).hasClass('on')) {
            slideUp();
          
            $(this).find('.icon-k-up').addClass('icon-k-down');
        } else {
            slideUp();
            $(this).addClass('on').next().slideDown();
            $(this).find('.icon-k-down').addClass('icon-k-up');
        }
        function slideUp() {
            $('.bookDownloadPopup dt').removeClass('on').next().slideUp();
            $('.bookDownloadPopup dt').find('.icon-k-down').removeClass('icon-k-up');
            $(this).find('.icon-k-down').addClass('icon-k-up');
            
        };
    })
    

    /*수강신청 검색 초기화 */
    $('.initializationButton').click(function () {
        $('.registerSearchCondition').removeClass('on');
    });

    $('.registerSearchCondition').click(function () {
        $(this).addClass('on');
    });

    /*  수강신청 4월강의 3월강의 버튼 클릭시 */

    $('.monthTabLayout button').click(function () {
        $(this).siblings('button').removeClass('on');
        $(this).addClass('on');

        var idx = $(this).index();

        var pran = $(this).parents('.section');
        var layout = pran.find('.registerListLayout');
        var pannel = layout.find('.boxWebzineBoradLayout')
        console.log(pannel);
        pannel.hide();
        pannel.eq(idx).show();
    });

    /* 수강신청 배너 닫기 */
    $('.closeBtn').click(function () {
        $('.registerBannerLayout').slideUp();
    })

    /* 수강신청 팝업 open */
    var topBannerH = $('.topBannerBox').height();
    var topLayoutH = $('.topLayout').height();
    $('.classApplication .redBg').click(function () {
        $('.layerpopup').fadeIn(100)
        $('.layerpopupIn').css('top', topLayoutH + topBannerH);
    });
    $('.section .webzineRight .title').click(function () {
        $('.layerpopup').fadeIn(100);
        $('.layerpopupIn').css('top', topLayoutH + topBannerH);
    });


    /*수강신청 팝업에서 점수보장반 / 더블랙 클릭시 변화 */
    $('.classChoButtonLayout button').click(function () {
        $('.classChoButtonLayout button').removeClass('on');
        $(this).addClass('on');
    });




    $('.classListTable .classListBtn').mouseenter(function () {
        $(this).addClass('on');
    });
    $('.classListTable .classListBtn').mouseleave(function () {
        $(this).removeClass('on');
    });

    /* 수강신청 장바구니 클릭시  */
    $('.classApplication .cartBg').click(function () {
        alert('장바구니에 추가되었습니다.')
    });

    /*pageNavigation a click */
    $('.pageNavigationIn a ').click(function () {
        $('.pageNavigationIn a').removeClass('on');
        $(this).addClass('on');
    });

    /*loginButton loginPop */
    var topBannerH = $('.topBannerBox').height();
    var topLayoutH = $('.topLayout').height();
    var topNav = $('.topNav').height();

    $('.loginBtn').click(function () {
        //console.log(topLayoutH + topBannerH + topNav)
        $('.loginPop').fadeIn(150);
        $('.loginPop .layerpopupIn').css({
            'top': topLayoutH + topBannerH + topNav

        })
    });
    
    
    /*선생님소개 배너*/
    var tcswiper = new Swiper('.tcBnr-container', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      autoplay: {
	          delay: 2500,
	          disableOnInteraction: false,
	      },
	      effect: 'fade',
	      pagination: {
	        el: '.tcBnr-pagination',
	        clickable: true,
	      },
	 });
    
    

    // $('.loginPop .layerPopupCloseButton').click(function () {
    //     $('.loginPop').fadeOut(100);
    // })
    // $('.loginPop .layerPopupBackground').click(function () {
    //     $('.loginPop').fadeOut(100);
    // })

    /* 수강신청결제수단 선택*/
    // $('.paymentchoiceLayout .paycIn li').click(function () {
    //     $('.paymentchoiceLayout .paycIn li').removeClass('on');
    //     $(this).addClass('on');
    // });

    /*수강신청결제 쿠폰 등록 팝업 */
    var list = $('.classpayList li');
    var btnP = list.find('.dcTitle');
    var btn = btnP.find('button');

    function cuponPopEvent(e) {
        var etarget = $(e.target);
        $('.cuponPop').show();
    }
    btn.on('click', cuponPopEvent);


    $('.toggleBox').hide();
    $('.prograssBox .title').on('click', function () {
        $(".toggleBox").slideUp();
        $('.prograssBox .title').removeClass('on');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass('on');
        }
    });


    /* 강의안내 점수보장반, 일반영어, 중국어, 일본어, 제2외국어, 직장인환급반 */
    var lecturTab;
    $('.lectureojTitleTabIn li').each(function(n){
    if($(this).hasClass("on")){
        $(".lectureojTitleSub ul").eq(n).fadeIn(300);
    }
    });
    $('.lectureojTitleTabIn li').click(function(){
    lecturTab = $(this).index();
    $('.lectureojTitleTabIn li').removeClass('on');
    $(".lectureojTitleSub ul").fadeOut();
    $(this).addClass('on');
    $(".lectureojTitleSub ul").eq(lecturTab).fadeIn(300);
    });
    $('.letureConListTab a').click(function(){
    $('.letureConListTab li').removeClass('on');
    $(this).parent().addClass('on');
    });
});


function listWS(n,m,g){
	//태그 전체 영역(너비)
  	var totalWidth = 0;
    var tags = $(n);
    pageW = $(window).width(); 
            
    tags.find("li").each(function(){
    	console.log(totalWidth);
    	console.log($(this).outerWidth(true));
    	if(g !== undefined){
    		totalWidth = totalWidth + $(this).outerWidth(true) + g;
    	}else{
    		totalWidth = totalWidth + $(this).outerWidth(true);
    	}
    });
    if(m !== undefined){
    	totalWidth = totalWidth+m;
    }    
    tags.find('ul').css('width', totalWidth);
    if (totalWidth < pageW){
    	tags.addClass("roundTagContNone");
    }
    /*if(tags.find("li").length < 5) {
	    $(this).parent('ul').addClass( "disabled" );
	}*/
    
}



$.fn.tabS = function(options){
	var defaults = {
		children :	"ul", //[ul,li]
		aTarget :	true,
		clickS :	false
	};
	var options = $.extend(defaults, options);
	var tN = $(this);
	var thisTn,thisTarget,thisIndex;
	if(options.children == "ul"){
		thisTn = tN.children("ul").children("li");
	}else{
		thisTn = tN.children("li");
	}
	
	thisTn.children("a").click(function(){
		thisIndex = $(this).parent().index();
		thisTn.removeClass("on");
		$(this).parent().addClass("on");
		if(options.clickS !== false){
			eval(options.clickS+"("+thisIndex+")");
		}
	});
}


function menuS(){
	  
	//통합검색 스크립트
	$('.mbMenuCont .searchInput').click(function (e) {
		if($('.topLayoutTop').hasClass("on")){
			
		}else{
			$('.topLayoutTop').addClass("on");
			$('.scListWrapIn').slideDown();
			$('html,body').addClass('notS');

		}
	});
	$(".searchAreaIn .searchBtn").click(function(){
		if ($('#centerSearchText').val() == '') {
			alert('검색어를 입력해주세요.')
			$('#centerSearchText').focus();
			return;
		}
		
		var uri = encodeURI('mainSearchKeyword=' + $("#centerSearchText").val());
		location.href = '/mpagoda21/search/SearchResultPage.do?' + uri;
	});
	
	
	/*통합검색 닫기 버튼*/
	$('header .closeBtn').click(function (e) {
		$('.topLayoutTop').removeClass("on");
		$('.scListWrap').slideUp(200);
		$('.scListWrapIn').slideUp(200);
		$('html,body').removeClass('notS');
		$('.scListBg').removeClass('on');
	});
	
	
	
	
	//$(".subMenuWrap").each(function(){
	//	wD.menuL = 0;
	//	$(this).find("li").each(function(){
	//		wD.menuL =  wD.menuL + $(this).width();
	//		console.log(wD.menuL);
	//	});
	//	$(this).find("ul").css("width",wD.menuL);
	//})
}

$('.closeBtn').click(function (e) {
    e.preventDefault();
    $(this).siblings('.searchInput').css('width', "0px");
    $('.closeBtn').css('opacity', 0);
    $('.mbMenu').show();

    //검색어 리스트
    $(this).parents().siblings('.scListWrap').slideUp();
});

function searchResult(text){
	var uri = encodeURI('mainSearchKeyword=' + text);
	location.href = '/mpagoda21/search/SearchResultPage.do?'+uri;
}
