window.onload = function() {

	headerWork();
	triggerWork();
	gnbWork();
	firstWork();
	secondWork();
	scrollWork();
	eighthWork();
	bxSliderWork();
	footerWork();

	
	// GNB
	function gnbWork() {
		var gnbSearch = document.querySelector(".gnb_search");
		var imgSearch = document.querySelector(".img_search");
		var totalSearch = document.querySelector(".total_search");
		
		gnbSearch.addEventListener("click", function gnbSrchWork(e) {
			e.preventDefault();
			var aTarget = e.target.parentNode.parentNode;
				
			if (!totalSearch.value == "") {
				return;
			}
			if (gnbSearch.classList.contains("on") && e.target === imgSearch){
				alert("검색어를 입력하세요.");
			} else if (e.type === "click") {
				aTarget.classList.add("on");
			}
		});
		
	};


	// Header
	function headerWork() {
		var navElemLis = document.querySelectorAll(".n_menus_ttl");
		var mobMenusTitle = document.querySelectorAll(".h_menus_ttl");
		
		for (var i = 0; i < navElemLis.length; i++) {
			navElemLis[i].addEventListener("mouseenter", navWork);
			navElemLis[i].addEventListener("mouseleave", navWork);
			navElemLis[i].addEventListener("click", navWork);
		}

		// nav_PC_Mobile 겸용
		function navWork(e) {
			var windowWidth = window.innerWidth;
			var aTarget = e.target.parentNode.parentNode;
			e.preventDefault();

			if (e.type === "click" && windowWidth <= 960) {
				if (aTarget.classList.contains("on")) {
					aTarget.classList.remove("on");
				} else {
					aTarget.classList.add("on");
				}
			} else if ((e.type === "mouseenter" || e.type === "mouseleave" ) && windowWidth > 960) {
				if (e.type === "mouseleave") {
					this.classList.remove("on");
				}		
				if (e.type === "mouseenter") {
					this.classList.add("on");
				}
				
			}
		};

		// Depth_Nav메뉴
		for (var i = 0; i < mobMenusTitle.length; i++) {
			mobMenusTitle[i].addEventListener("click", depthWork);
			
			function depthWork(e) {
				e.preventDefault();
				e.stopImmediatePropagation();

				var aTarget = e.target.parentNode.parentNode;

				if (aTarget.classList.contains("on")) {
					this.classList.remove("on");
				} else {
					this.classList.add("on")
				}
			};
		}

	};

	// 모바일용_Nav
	function triggerWork() {
		var nav = document.querySelector("nav");
		var mobDim = document.querySelector(".m_dim");
		var menuTrigger = document.querySelector(".menu_trigger");
		var menuClose = document.querySelector(".menu_close");
		var mobBtnSrch = document.querySelector(".m_btn_search");
		var mobTotalSrch = document.querySelector(".m_gnb_search > .total_search");
		var mobmain = document.querySelector("main");		

		menuTrigger.addEventListener("click", function(e) {
			e.preventDefault();	
			if (e.type === "click") {
				e.target.classList.add("on");
				mobDim.classList.add("on");
				mobmain.classList.add("active");
			}
		});

		nav.addEventListener("click", function(e) {
			e.preventDefault();		
			e.stopPropagation();

			if (e.type === "click" && e.target.tagName === "A" && e.target == menuClose) {
				menuTrigger.classList.remove("on");
				mobDim.classList.remove("on");
				mobmain.classList.remove("active");
			} 

			if (!mobTotalSrch.value == "") {
				return;
			} else if (e.target === mobBtnSrch) {
				alert("검색어를 입력하세요.");
			}
		
		});

	};


	// Main section1
	function firstWork() {	// 새로고침 시 자동 적용
		setTimeout(function() {document.querySelector(".drink1").style.opacity = "1"; }, 400);
		setTimeout(function() {document.querySelector(".drink2").style.opacity = "1"; }, 1200);
		setTimeout(function() {document.querySelector(".drink3").style.opacity = "1";  }, 2000);
		setTimeout(function() {document.querySelector(".coffee_passion").style.opacity = "1"; }, 2800);
		setTimeout(function() {document.querySelector(".btn_opacity").style.opacity = "1"; }, 3200);	
	};

	// Main section2
	function secondWork() {
		var sectionTwo = document.querySelector(".container2");
		var promotion = sectionTwo.querySelector(".promotion");
		var promotionTitle = sectionTwo.querySelector(".promotion_ttl");
		
		sectionTwo.addEventListener("click", function(e) {
			var aTarget = e.target.parentNode.parentNode.parentNode.parentNode;
			var aTarget2 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;;
			e.preventDefault();			

			if ( (aTarget.classList.contains("on") || aTarget2.classList.contains("on")) && (e.target === promotion || e.target === promotionTitle) ) {
				sectionTwo.classList.remove("on");				
			} else if (e.target === promotion || e.target === promotionTitle) {
				sectionTwo.classList.add("on");
			} else {return;}
			console.log(e.target);
		});

	};


	// 메인페이지 전체 스크롤 이벤트
	function scrollWork() {
		var beanLeft = document.querySelector(".new_bean_left");
		var beanRight = document.querySelector(".new_bean_right");
		var reserveBean = document.querySelector(".reserve_bean");
		var favProd01 = document.querySelector(".fav_prod01");
		var favProd02 = document.querySelector(".fav_prod02");
		var favBtn = document.querySelector(".fav_left > .btn_more");
		var storeLeft01 = document.querySelector(".store_left > .store01");
		var storeLeft02 = document.querySelector(".store_left > .store02");
		var storeRight01 = document.querySelector(".store_right > .store_txt01");
		var storeRight02 = document.querySelector(".store_right > .store_txt02");
		var storeBtn = document.querySelector(".store_right > .btn_more");

		setTimeout (function() {	// 새로고침 시 자동 적용
			beanLeft.classList.add("active");
			beanRight.classList.add("active");
			reserveBean.classList.add("active");
			favProd01.classList.add("active");
			favProd02.classList.add("active");	
			favBtn.classList.add("active");
			storeLeft01.classList.add("active");
			storeLeft02.classList.add("active");		
			storeRight01.classList.add("active");
			storeRight02.classList.add("active");
			storeBtn.classList.add("active");			
		});



		
		// Main section5
		document.addEventListener("scroll", function scrollFifthWork(e) {
			if (e.type !== "scroll") {return;}	//스크롤 이벤트 아닐 경우 반환
			
			var scrolledHeight = window.pageYOffset;
			var windowWidth = window.innerWidth;	
			
			function fifthRemoveElem() {	// 사라지기 함수
				beanLeft.classList.remove("active");
				beanRight.classList.remove("active");	
			}

			function fifthAddElem() {	// 나타나기 함수
				beanLeft.classList.add("active");
				beanRight.classList.add("active");					
			}


			if (windowWidth <= 375) {
				if (scrolledHeight < 980) {
					fifthRemoveElem();					
				} else {
					fifthAddElem();					
				}				
			} else if (windowWidth > 375 && windowWidth <= 480) {
				if (scrolledHeight < 1300) {
					fifthRemoveElem();					
				} else {
					fifthAddElem();					
				}
			} else if (windowWidth > 480 && windowWidth <= 640) {
				if (scrolledHeight < 1800) {
					fifthRemoveElem();					
				} else if (scrolledHeight > 1800) {
					fifthAddElem();					
				}
			} else if (windowWidth > 640 && windowWidth < 960) {
				if (scrolledHeight < 1300) {
					fifthRemoveElem();					
				} else {
					fifthAddElem();					
				}
			} else if (windowWidth >= 961) {
				if (scrolledHeight < 400) {
					fifthRemoveElem();
				} else {
					fifthAddElem();
				}				
			}

		});


		// Main section6
		document.addEventListener("scroll" , function scrollSixthWork(e) {
			if (e.type !== "scroll") {return;}	//스크롤 이벤트 아닐 경우 반환

			var scrolledHeight = window.pageYOffset;
			var windowWidth = window.innerWidth;
			
			if (windowWidth <= 960) {
				if (scrolledHeight < 2500) {
					reserveBean.classList.remove("active");		
				} else {
					reserveBean.classList.add("active");
				}
			} else if (windowWidth > 960) {
				if (scrolledHeight < 1050) {
					reserveBean.classList.remove("active");		
				} else {
					reserveBean.classList.add("active");
				}
			}			
		});


		// Main section7
		document.addEventListener("scroll" , function scrollSeventhWork(e) {
			if (e.type !== "scroll") {return;}	//스크롤 이벤트 아닐 경우 반환

			var scrolledHeight = window.pageYOffset;
			var windowWidth = window.innerWidth;
			
			function seventhRemoveElem() { 	// 사라지기 함수
				favProd01.classList.remove("active");
				favProd02.classList.remove("active");	
				favBtn.classList.remove("active");
			}	

			function seventhAddElem() {  	// 나타나기 함수
				favProd01.classList.add("active");
				favProd02.classList.add("active");	
				favBtn.classList.add("active");	
			}

			if (windowWidth <= 375) {
				if (scrolledHeight < 2600) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				}
			} else if (windowWidth > 375 && windowWidth <= 480) {
				if (scrolledHeight < 2980) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				}
			} else if (windowWidth > 480 && windowWidth <= 499) {			
				if (scrolledHeight < 3330) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				} 
			} else if (windowWidth > 499 && windowWidth <= 640) {			
				if (scrolledHeight < 4200) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				} 
			} else if (windowWidth > 640 && windowWidth <= 960) {				
				if (scrolledHeight < 3300) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				}
			} else if (windowWidth > 960) {
				if (scrolledHeight < 1350) {
					seventhRemoveElem();
				} else {
					seventhAddElem();
				}
			}

		});

		// Main section9
		document.addEventListener("scroll" , function scrollNinethWork(e) {
			if (e.type !== "scroll") {return;}	//스크롤 이벤트 아닐 경우 반환

			var scrolledHeight = window.pageYOffset;
			var windowWidth = window.innerWidth;

			function NinethRemoveElem() { 	// 사라지기 함수
				storeLeft01.classList.remove("active");
				storeLeft02.classList.remove("active");
				storeRight01.classList.remove("active");
				storeRight02.classList.remove("active");
				storeBtn.classList.remove("active");
			};		
			function NinethAddElem() { 	// 나타나기 함수
				storeLeft01.classList.add("active");
				storeLeft02.classList.add("active");
				storeRight01.classList.add("active");
				storeRight02.classList.add("active");
				storeBtn.classList.add("active");
			};

			if (windowWidth < 375) {
				if (scrolledHeight < 3500) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}				
			} else if (windowWidth >= 375 && windowWidth <= 430) {
				if (scrolledHeight < 3600) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}			
			} else if (windowWidth > 430 && windowWidth <= 499) {
				if (scrolledHeight < 3900) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}		
			} else if (windowWidth > 499 && windowWidth < 520) {
				if (scrolledHeight < 4800) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}			
			} else if (windowWidth >= 520 && windowWidth <= 640) {
				if (scrolledHeight < 5700) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}				
			} else if (windowWidth > 640 && windowWidth <= 660) {	
				if (scrolledHeight < 5300) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}				
			} else if (windowWidth > 660 && windowWidth <= 960) {
				if (scrolledHeight < 4800) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				}
			} else if (windowWidth > 960) {
				if (scrolledHeight < 3000) {
					NinethRemoveElem();
				} else {
					NinethAddElem();
				} 			

				
			}
			// console.log(scrolledHeight + "스크롤높이");
			// console.log(windowWidth + "길이");

		});
		
	};




	// Main section8
	function eighthWork() {
		var reserveMedal = document.querySelector(".reserve_medal");
		var reserveMedal01 = document.querySelector(".reserve_medal01");
		var reserveMedal02 = document.querySelector(".reserve_medal02");
		var reserveBtn = document.querySelector(".reserve_medal02 .btn_more");

		reserveMedal.addEventListener("mouseleave", function rotateWork(e) {
			if (e.type === "mouseleave") {
				reserveMedal01.setAttribute("style", "transform: rotateY(0deg);");
				reserveMedal02.setAttribute("style", "transform: rotateY(180deg);");
				reserveBtn.setAttribute("style", "opacity:0;");
			}
		});
		
		reserveMedal.addEventListener("mouseenter", function rotateWork(e) {	
			if (e.type === "mouseenter") {
				reserveMedal01.setAttribute("style", "transform: rotateY(-180deg);");
				reserveMedal02.setAttribute("style", "transform: rotateY(0deg);");
				reserveBtn.setAttribute("style", "opacity:1;");
			}
		});

	};


	// Footer
	function footerWork() {
		var fmenus = document.querySelectorAll(".f_menus_ttl");
		var fSubmenus = document.querySelectorAll(".f_submenus_ttl");

		for (var i = 0; i < fmenus.length; i++) {
			fmenus[i].addEventListener("click", function footerMenus(e) {
				var aTarget = e.target.parentNode;
				e.preventDefault();
				if (aTarget.classList.contains("on")) {
					aTarget.classList.remove("on");
				} else {
					aTarget.classList.add("on");
				}
				
				console.log(e.target);
			});
		}

		for (var i = 0; i < fSubmenus.length; i++) {
			fSubmenus[i].addEventListener("click",function footerSubMenus(e) {
				e.preventDefault();
				if (e.target.classList.contains("on")) {
					e.target.classList.remove("on");
				} else {
					e.target.classList.add("on");
				}
				console.log(e.target);
			});
		}
		
	}

};


//bxSlider 이벤트
function bxSliderWork() {
	$(document).ready(function (){
	    $('.notice_slider').bxSlider({
	        mode: 'vertical',
	        controls: false,
	        pager: false,
	        auto: true,
	        pause: 2000,
	        speed: 500
	    });
	});
};
  

// Main 슬라이드
$(document).ready(function (){
	var con3Slider = $('.visual_slider').bxSlider({
		auto: true,
		autoHover: true,
		moveSlides: 1,
		slideMargin: 10,
		pause:2000,
		speed:600,
		autoControls: true,
		autoControlsCombine:true,
		responsive: true,
		infiniteLoop: true,
		controls: false,
		stopAutoOnClick: true,            
		pagerCustom: '.pager',
		onSlideAfter: function($slideElement) {
			$('.visual_slider > li').removeClass('active');
			$slideElement.addClass('active');
		}
	});

	var con3NextBtn = $(".container3 .controls .next");
	var con3PrevBtn = $(".container3 .controls .prev");

	con3NextBtn.on("click", function() {
		console.log('next');
		
		con3Slider.stopAuto();
		con3Slider.goToNextSlide();
		con3Slider.startAuto();
	});

	con3PrevBtn.on("click", function() {
		console.log('prev');
		
		con3Slider.stopAuto();
		con3Slider.goToPrevSlide();
		con3Slider.startAuto();
	});

	// $(window).on('load resize', function() {
	// 	var windowWidth = $(document).width();	    
	// 	console.log(windowWidth);
	// 	if (windowWidth > 500) {
	// 		console.log("500초과");
	// 	}
	// 	if (480 < windowWidth <= 500) {
	// 		console.log("500이하");
	// 	}
		
	// });

});


//footer 슬라이드 
var fSlider = $('.f_slider').bxSlider({
	controls: false,
	pager: false,
	auto: true,
	pause: 1800,                       
	minSlides: 1, 
	maxSlides: 3, 
	slideWidth: 189, 
	speed: 500,
	autoControls: true,
	autoControlsCombine:true
});

$(window).on('load resize', function(){ // 전체 onload 와 겹쳐서 밖으로 꺼내놓음
	var windowWidth = $(document).width();
	if (windowWidth < 1135) {
		var bxVp = document.querySelector(".f_slider").parentNode.className;
		bxVp !== "bx-viewport" ? fSlider.reloadSlider() : '';  		//표기방법1
		// if (bxVp !== "bx-viewport") { 		//표기방법2
		// 	fSlider.reloadSlider();
		// }		
	} else {
		fSlider.destroySlider();
	}
});






