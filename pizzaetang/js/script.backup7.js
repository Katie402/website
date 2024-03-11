
//푸터 맨밑에두고 모바일화면에서 다시 pc로 돌아왔을 경우 하얀화면이 밀림 ->이것만해결하면 끝


function responsive(){

   var $wh = $(window).width();

   
   if ($wh <= 640)
   {   
      $("#wrap").addClass("responsive");
   }else{
      $("#wrap").removeClass("responsive");
   }   
}
$(function(){
   $( window ).load(function() {
      responsive();
   });
   $( window ).resize(function() {
      responsive();
   });
});

//예시
$(function(){
   $(".btn_gnbmenu").click(function(e){
      if($("#wrap").hasClass("responsive")){
         $(this).toggleClass("on");
         $("#gnb").slideToggle("fast");
      }else{
         $(this).removeClass("on");
         $("#gnb").show();
      }
      e.preventDefault();
   });
});

//햄버거 열기
$(function(){
   $(".ham_menu").click(function(e){
      if($("#wrap").hasClass("responsive")){
        $('.dummy_bg').css("height","auto").fadeIn();
		$('nav .nav_box').show().animate({left:'0'}, 500);
		$('body').css("position","fixed");
      }else{
        
      }
      e.preventDefault();
   });
});
//햄버거 1뎁스 클릭시 2뎁스 슬라이드
$(function(){
   $(".dp_ul1 .dp1 > a").click(function(e){
      if($("#wrap").hasClass("responsive")){
        event.preventDefault();//a링크 이동막는건데 PC에서 푸는방법을 모르겠음
		$(this).parents('.dp1').find('.dp_ul2').stop().slideToggle();
      }else{
        stopPropagation();//a링코 이동 푸는 것? 사용자등록 이벤트 해제
      }
      e.preventDefault();
   });
});
//햄버거닫기
$(function(){
   $(".m_navclose, .dummy_bg").click(function(e){
      if($("#wrap").hasClass("responsive")){
        $('.dummy_bg').fadeOut();
		$('nav .nav_box').animate({left:'-85.15%'}, 500).hide(100);
		$('body').css("position","static");
      }else{
        
      }
      e.preventDefault();
   });
});

//pc 네비 열기
$(function(){
   $("nav").mouseenter(function(e){
      if($("#wrap").hasClass("responsive")){

      }else{
        $('.dp_ul2, .dummy_bg').stop().slideDown();
      }
      e.preventDefault();
   });
});
//pc 네비 닫기
$(function(){
   $("nav").mouseleave(function(e){
      if($("#wrap").hasClass("responsive")){

      }else{
        $('.dp_ul2 , .dummy_bg').stop().slideUp('fast');
      }
      e.preventDefault();
   });
});

//bx 파괴...
$(function(){
   $(window).load(function(e){
      if($("#wrap").hasClass("responsive")){

      }else{
		sldn.destroySlider();
      }
      e.preventDefault();
   });
});

//풀페이지
//$(function(){
//
//      if($("#wrap").hasClass("responsive")){
//		
//      }else{
//       
//		
//		
//      }
//      e.preventDefault();
//
//});

/*/////////////메인 풀페이지 아래버튼 클릭시 아래스크롤 ////////////////*/
//화살표 버튼 스크롤
$(document).ready(function(){
	$('.ar_btn1').click(function(){
		$("#fp-nav ul li").eq(1).find("a").trigger("click");
	});
	$('.ar_btn2').click(function(){
		$("#fp-nav ul li").eq(2).find("a").trigger("click");
	}); 
});


//화살표 버튼 트리거
var nav_len = $(".section").length;

for( var i = 0; i<nav_len; i++ ){
	
	if( h_attr == nav_active ){
		$(".section").eq(i).addClass("active");
	}
	
}

//풀페이지



//모바일, pc화면에서 왓다갓다 했을때 겹치는 경우
$(document).ready(function() {
		//bx슬라이더 slnd 변수지정 사이즈 이하이면 가동 아니면 파괴.
		sldn = $('.con3_link > ul').bxSlider({
			pager:true,
			controls:false,
			auto: false,
			speed:600,
			responsive:true,
		});
 $(window).resize(function() {
  if ($(window).width() < 641) {
	
	//햄버거닫기 후에 pc에서 네비보이게, pc에서 줄엿을때 네비 숨기게
	$('nav .nav_box').animate({left:'-85.15%'},0).hide(0);
	//모바일에서 1뎁스클릭했을때 2뎁스 슬라이드
	$('.dp_ul2').css({"height":"auto","padding":"0"});
	//모바일에서 풀페이지 취소
	$.fn.fullpage.destroy('all');

	//모바일에서 bx슬라이더 사용

	sldn.reloadSlider();//bx다시불러오기 안먹네
	} else {


	//햄버거닫기 후에 pc에서 네비보이게, pc에서 줄엿을때 네비 숨기게
	$('nav .nav_box').animate({left:'0'}, 0).show(0);
	//pc에서 2뎁스 네비간격
	$('.dp_ul2').css({"height":"auto","padding-top":"19px"});
	//pc에서 네비 오버햇을때 백그라운드
	$('.dummy_bg').css("height","350");
	//pc에서 풀페이지
//	mwfull = $('#main_wrap').fullpage({
//		anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage'],
//		sectionsColor: ['#fff', '#fff', '#fff'],
//		scrollOverflow: true,
//		navigation: true,
//		navigationPosition: 'right',
//		navigationTooltips: ['First', 'Second', 'Third', 'Fourth']
//
//	});
//   $('#main_wrap').fullpage({
//        afterResize: function(){
//            var pluginContainer = $(this);
//           // alert("The sections have finished resizing");
//        }
//    });
	//풀페이지 거의 다됨
    $('#main_wrap').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage'],
		sectionsColor: ['#fff', '#fff', '#fff'],
		//scrollOverflow: true, //이거잇으니까 afterrender안먹음
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First', 'Second', 'Third', 'Fourth'],
        afterRender: function(){
            var pluginContainer = $(this);
            //alert("The sections have finished resizing");
        }
    });
	//풀페이지 다시불러오기
	$.fn.fullpage.reBuild();
	//pc에서 푸터부분 풀페이지 추가된거 없애기 pc에서 화면 스크롤 맨밑에두고 모바일로 줄엿다 다시 피시로 돌아오면 하얀여백이 많이생김...
	$("#footer").find('.fp-tableCell').removeClass('fp-tableCell').css("height","auto");
	//pc로돌아가면서 화면 맨위로이동(푸터 빈공간이 순간적으로 생기는 바람에)
//	$('.ar_btn2').click(function(){
//		$("#fp-nav ul li").eq(1).find("a").trigger("click");
//	});
	//$('body').css("position","fixed").css("position","relative");
	//pc에서 bx슬라이더 사용안함
	sldn.destroySlider();
	
	//$("body").scrollTop(0);
	


  }
 }).trigger('resize');
});



