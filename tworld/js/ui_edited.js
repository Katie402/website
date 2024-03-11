window.onload = function() { 

	naviLeftWork();
	naviRightWork();
	naviInner();
	mainTipWork();
	scrollWork();
	subBestWork();
	mobileLifeWork();
	subDataWork();
	subSelWork();
	footerWork();
	

	//nav 좌측메뉴
	function naviLeftWork() {
		var naviLeftElemLis = document.querySelectorAll(".navi_left > li");
		
		for (var i = 0; i < naviLeftElemLis.length; i++) {
			naviLeftElemLis[i].addEventListener("mouseenter", naviWork);
			naviLeftElemLis[i].addEventListener("mouseleave", naviWork);
		}

		var backgroundElemDiv = document.createElement("div");	//빈 태그 생성하여 변수 선언
		document.querySelector(".header_top").appendChild(backgroundElemDiv);	//해더 뒤에 변수 붙이기
		var divStyle = {	//스타일 변수 선언
			"position": "fixed",
			"left": "0",
			"right": "0",
			"top": "0",
			"bottom": "0",
			"background-color": "rgba(255, 255, 255, 0.6)",
			"z-index": "-1"
		};		

		document.addEventListener("scroll",  naviWork);

		function naviWork(e) {

			if (e.type === "mouseenter" ) {
				this.classList.add("on");

				for (var i = 0; i < naviLeftElemLis.length; i++) {
					naviLeftElemLis[i].firstChild.classList.remove("on");
				}
				
				//방법1: css 변수 따로 선언해서 스타일에 넣고 forin문 돌리지 않고 값을 직접 넣는 방법
				// backgroundElemDiv.setAttribute("style", "position:fixed; left:0; right:0; top:0; bottom:0; background-color:rgba(255,255,255,0.6); z-index:-1;");	

				//방법2: div 빈태그 만들어서 선언한 css 변수 넣고 forin문 사용하여 스타일 적용 
				var elemDivStyle = backgroundElemDiv.style;	
				for (var prop in divStyle) {
					elemDivStyle[prop] = divStyle[prop];
				}


			} else if (e.type === "mouseleave")  {
				this.classList.remove("on");
				backgroundElemDiv.removeAttribute("style");

				for (var i = 0; i < naviLeftElemLis.length; i++) {
					if (naviLeftElemLis[i].classList.contains("main")) {
						naviLeftElemLis[i].firstChild.classList.add("on");  //navi메뉴 고정 화살표 //firstChild는 childnNodes[0]과 같음
					}
				}	
			}
		}


	}

	
	//스크롤 이벤트 시 navi메뉴 고정
	function scrollCheck() {
		var naviLeftElemLis = document.querySelectorAll(".navi_left > li");
		for (i = 0; i < naviLeftElemLis.length; i++){
			if (naviLeftElemLis[i].classList.contains("on")) {   
				//또는, (naviLeftElemLis[i].getAttribute("class").indexOf("on") > 0) class 값 불러와서 문자열 순서 1에서부터 "on" 을 줄때 트루가 반환됨
				return true;
			}
		}
	}


	//nav 우측메뉴
	function naviRightWork() {
		var naviRight = document.querySelector(".navi_right");
		var naviRightElemLis = document.querySelectorAll(".navi_right > li");
		var naviRightElemInput = document.querySelector(".srch_box");
        var srchRightElemDiv = document.querySelector(".search_right");


		//div 빈태그 만들어서 선언한 css 변수 넣고 forin문 사용하여 스타일 적용 
		var backgroundElemDiv = document.createElement("div");
		document.querySelector(".header_top").appendChild(backgroundElemDiv);
		var divStyle = {"position": "fixed", "left": "0", "right": "0", "top": "0", "bottom": "0", "background-color": "rgba(255, 255, 255, 0.6)", "z-index": "-1"};


		//우측메뉴 복제
		var frElem = document.querySelector(".fr");
		if (!frElem) {return;}
		var frCloneElem = document.querySelector(".frclone");
		// var naviRightClone = naviRight.cloneNode(true);  	//자식까지 복제

		document.addEventListener("scroll", NaviCloneWork);
		function NaviCloneWork() {
			if ( scrollCheck() ) {return;}

			var htmlElem = document.querySelector("html");
			var scrolledHeight = htmlElem.scrollTop;
			if (!frCloneElem) {return;}

			if (scrolledHeight > 90 ) {
				frCloneElem.appendChild(naviRight);
			} 
			else if (scrolledHeight < 90) {
				frElem.appendChild(naviRight);
				// frCloneElem.removeChild(naviRight); //chrome x
				// naviRightClone.remove(); //IE 지원x
			}
			
		}


		// naviRightClone.addEventListener("click", NaviRightClick);
		naviRight.addEventListener("click", NaviRightClick);
		function NaviRightClick(e) {
			

			var aTarget = e.target.parentNode;
			naviRightClone = naviRight;

			//navi 닫기버튼
			if (e.target.classList.contains("btn_close")) {

				if (aTarget.parentNode.classList.contains("on")) { 		//팝업창 우측 상단의 닫기버튼
					aTarget.parentNode.classList.remove("on");
					backgroundElemDiv.removeAttribute("style");
				
				} else if (aTarget.classList.contains("srch_top")) { 	//인풋창

					for (var i = 0; i < aTarget.childNodes.length; i++) {
						if (aTarget.childNodes[i].nodeName === "FORM") {
							elemI = i;
						} 
					} for (var j = 0; j < aTarget.childNodes[elemI].childNodes.length; j++) { 
						if (aTarget.childNodes[elemI].childNodes[j].nodeName === "INPUT") {
							elemJ = j;	
						}
					} aTarget.childNodes[elemI].childNodes[elemJ].value = "";
					
				}
				
			} else if (e.target.nodeName !== "A" || (!e.target.classList.contains("navbtn") && !e.target.classList.contains("btn_srch")) ) { 
				return; 
			}



			// navi search메뉴
			if (naviRightElemInput.value === "" && e.target.classList.contains("btn_srch")) {
				alert("검색어를 입력해 주세요.");
			}


			//navi 열기버튼
			if (aTarget.classList.contains("on") && aTarget.nodeName === "LI") {
				aTarget.classList.remove("on");
				backgroundElemDiv.removeAttribute("style");
			} else if (aTarget.nodeName === "LI") {
				for (var i = 0; i < naviRightElemLis.length; i++) { 
					naviRightElemLis[i].classList.remove("on");				
				} 
				
				aTarget.classList.add("on");
				var elemDivStyle = backgroundElemDiv.style;
				for (var prop in divStyle) {
					elemDivStyle[prop] = divStyle[prop];
				}
			}
			e.preventDefault();
		
		}


        //우측 서치메뉴 인기키워드
		var rollCopyElemDiv = document.querySelector(".search_right > .roll_wrap_copy")
		var rollElemLis = document.querySelectorAll(".search_right > .roll_wrap > ol > li");
		var rollElemSpans = document.querySelectorAll(".search_right > .roll_wrap > ol span");
		var rollElemEms = document.querySelectorAll(".search_right > .roll_wrap > ol em");
		var rollCopyElemOl = document.createElement("ol");
		
		rollCopyElemDiv.appendChild(rollCopyElemOl);	//텍스트 삽입

		for (var i = 0; i < rollElemLis.length; i++) {
			var elemEmsText = rollElemEms[i].firstChild.nodeValue;
			var elemSpansText = rollElemSpans[i].firstChild.nodeValue;

			var rollCopyElemEms = document.createElement("em");
			var rollCopyElemEmsText = document.createTextNode(elemEmsText);
			rollCopyElemEms.appendChild(rollCopyElemEmsText);

			var rollCopyElemSpans = document.createElement("span");
			var rollCopyElemSpansText = document.createTextNode(elemSpansText);
			rollCopyElemSpans.appendChild(rollCopyElemSpansText);

			var rollCopyElemAs = document.createElement("a");
			rollCopyElemAs.appendChild(rollCopyElemSpans);
			rollCopyElemAs.appendChild(rollCopyElemEms);
			
			var rollCopyElemLis = document.createElement("li");
			rollCopyElemLis.appendChild(rollCopyElemAs);
			rollCopyElemOl.appendChild(rollCopyElemLis);

		};

		var rollCopyElemArrLis = document.querySelectorAll(".search_right > .roll_wrap_copy ol li");
	
		var num = 1;	
		rollCopyElemArrLis[0].style.opacity = "1";

		function setTimer() {
			timeStart = setInterval( function() {

			var prevNum = num - 1;
			
			if (num == rollCopyElemArrLis.length) {
				num = 0;
				prevNum = 4;
			} 
			// console.log(num);
			rollCopyElemArrLis[prevNum].style.opacity = "0";
			rollCopyElemArrLis[num].style.opacity = "1"; 
			num++;
			

			} , 2500)
		}
		setTimer();
		
		

		//우측 서치메뉴 마우스오버
		srchRightElemDiv.addEventListener("mouseenter", scrollHoverWork);
		srchRightElemDiv.addEventListener("mouseleave", scrollHoverWork);
		
		function scrollHoverWork(e) {
			if (e.type === "mouseenter") {
				srchRightElemDiv.classList.add("on");
				clearInterval(timeStart);		//키워드 롤링 중지
			} else if (e.type === "mouseleave") {
				srchRightElemDiv.classList.remove("on");
				setTimer();			//키워드 롤링 재시작
			} 
		}
	
	}


	//ScrollWork : 전체 스크롤
	function scrollWork() {
		var lnbElem = document.querySelector(".lnb");
		if (!lnbElem) {return;}
		var lnbElemLis = document.querySelectorAll(".lnb_box > li");
		var gx5Logo = document.querySelector(".gx5");

		// var subnav = document.querySelector(".subnav");
		// var naviLeftElemLis = document.querySelectorAll(".navi_left > li");
	
		document.addEventListener("scroll", Counter)
		
		function Counter() {
			if ( scrollCheck() ) {return;}

			var htmlElem = document.querySelector("html");
			var scrolledHeight = htmlElem.scrollTop;
			if (scrolledHeight < 90) {
				lnbElem.classList.remove("on");
				gx5Logo.style.opacity = "1";
			} else if (scrolledHeight > 90) {
				lnbElem.classList.add("on");
				gx5Logo.style.opacity = "0";
			}
		}
			

		//로고 변경
		var logoElem1 = document.querySelector(".logo1");
		var logoElem2 = document.querySelector(".logo2");

		document.addEventListener("scroll", function logoCloneWork(e) {
			if ( scrollCheck() ) {return;}

			var htmlElem = document.querySelector("html");
			var scrolledHeight = htmlElem.scrollTop;	

			if (scrolledHeight > 90) {
				logoElem1.classList.add("off");	
				logoElem2.classList.add("on");
			} else if (scrolledHeight < 90) {
				logoElem1.classList.remove("off");	
				logoElem2.classList.remove("on");	
			}
	
		});
		
		//lnb 서브 메뉴
		for (var i = 0; i < lnbElemLis.length; i++) {
			lnbElemLis[i].addEventListener("mouseenter", LnbWork);
			lnbElemLis[i].addEventListener("mouseleave", LnbWork);
		}
		
		function LnbWork(e) {
			e.preventDefault();
			if (e.type === "mouseenter") {
				this.classList.add("on"); 
			} else if (e.type === "mouseleave") {
				this.classList.remove("on");
			}
		}
		
	
	}
	


	//navi 서브메뉴
	function naviInner() {
		var naviInnerElemLis = document.querySelectorAll(".con_main .sub");
		var naviInnerElemSubUls = document.querySelectorAll(".con_main .sub > ul")
		
		for (var i = 0; i < naviInnerElemLis.length; i++) {
			naviInnerElemLis[i].addEventListener("click", function NaviInnerWork(e) { 
				e.preventDefault();
				// var aTarget = e.target.parentNode;
				if (this.classList.contains("opened")) {
					this.classList.remove("opened");
				} else { 
					for (var i = 0; i < naviInnerElemLis.length; i++) {
						// onClick="document.location.reload(true);" 
						naviInnerElemLis[i].classList.remove("opened");	
					}
					this.classList.add("opened");
				}
			})
				
		}

		
		for (var i = 0; i < naviInnerElemSubUls.length; i++) {
			naviInnerElemSubUls[i].addEventListener("click", function NaviInnerStopWork(e) {
			e.preventDefault();
			e.stopPropagation();
			})
		}


	}
	

	//Main: honey_tip
	function mainTipWork() {
		var tipElemLis = document.querySelectorAll(".honeytip");
		var tipElemDivs = document.querySelectorAll(".honeytip > div");
		
		for (var i = 0; i < tipElemDivs.length; i++) {
			tipElemDivs[i].addEventListener("click", function HoneyTipWork(e) {
				e.preventDefault();
				var aTarget = e.target.parentNode.parentNode;
				for (var j = 0; j < tipElemDivs.length; j++) {
					tipElemLis[j].classList.remove("on");
				}
				if (aTarget.nodeName === "LI") {
					aTarget.classList.add("on");
				} else if (aTarget.parentNode.nodeName === "LI") {
					aTarget.parentNode.classList.add("on");
				}
			})
		}

	}
	
	
	//Sub_contain
	//sub_best :요금상품
	function subBestWork() {
		var selectElemDiv = document.querySelector(".srch_word > .selected");
		if (!selectElemDiv) {return;}
		var selectElemAs = document.querySelectorAll(".srch_word > .selected > a");
		var boxElemUl = document.querySelector(".srch_word > ul");
		var boxElemSts = document.querySelectorAll(".srch_word > ul strong");
		var boxElemEms = document.querySelectorAll(".srch_word > ul em");
		var bestElemLis = document.querySelectorAll(".best_prod > li")
	
		
		for (var i = 0; i < boxElemSts.length; i++) {
			var elemStsText = boxElemSts[i].firstChild.nodeValue;
			var elemEmsText = boxElemEms[i].firstChild.nodeValue;

			var inElemSt = document.createElement("strong");
			var inElemStText = document.createTextNode(elemStsText);
			inElemSt.appendChild(inElemStText);

			var inElemEm = document.createElement("em");
			var inElemEmText = document.createTextNode(elemEmsText);
			inElemEm.appendChild(inElemEmText);
			
			selectElemAs[i].appendChild(inElemSt);
			selectElemAs[i].appendChild(inElemEm);
			selectElemDiv.appendChild(selectElemAs[i]);	
		}

		for (var i = 0; i < selectElemAs.length; i++) {
			selectElemAs[i].addEventListener("click", selectWork);
			bestElemLis[i].addEventListener("click", selectWork);
		}

		boxElemUl.addEventListener("click", selectWork);

		function selectWork(e) {
			e.preventDefault();

			if (e.target.classList.contains("fir")) {
				for (var i = 0; i < selectElemAs.length; i++) {
					selectElemAs[i].classList.remove("on");
					bestElemLis[i].classList.remove("on");
				}
				selectElemAs[0].classList.add("on");
				bestElemLis[0].classList.add("on");
				boxElemUl.classList.remove("on");
			} 
			
			else if (e.target.classList.contains("sec")) {
				for (var i = 0; i < selectElemAs.length; i++) {
					selectElemAs[i].classList.remove("on");
					bestElemLis[i].classList.remove("on");
				}
				selectElemAs[1].classList.add("on");
				bestElemLis[1].classList.add("on");
				boxElemUl.classList.remove("on");
			} 
			
			else if (e.target.classList.contains("thir")) {
				for (var i = 0; i < selectElemAs.length; i++) {
					selectElemAs[i].classList.remove("on");
					bestElemLis[i].classList.remove("on");
				}
				selectElemAs[2].classList.add("on");
				bestElemLis[2].classList.add("on");
				boxElemUl.classList.remove("on");
			} else {return;} 
		}
	

		//리스트 여닫기
		selectElemDiv.addEventListener("click", function boxWork(e) {
			e.preventDefault();

			if (boxElemUl.classList.contains("on")) {
				boxElemUl.classList.remove("on");
			} else {
				boxElemUl.classList.add("on");
			}
		})
		

	}


	//sub_mobilelife : 모바일라이프
	function mobileLifeWork() {
		var mobileLife = document.querySelector(".sub_mobilelife");
		if (!mobileLife) {return;}

		var mobileLeftA = mobileLife.querySelector(".left > .user_type > p > a");
		var mobileLeftSt = mobileLife.querySelector(".left > .user_type > p > a > strong");
		var mobileLeftB = mobileLife.querySelector(".left > .user_type > p > a > strong > b");
		var mobileRightA = mobileLife.querySelector(".right > .user_type > p > a");
		var mobileRightSt = mobileLife.querySelector(".right > .user_type > p > a > strong");
		var mobileRightB = mobileLife.querySelector(".right > .user_type > p > a > strong > b");

		mobileLife.addEventListener("click", mobileWork);

		function mobileWork(e) {
			e.preventDefault();
			// console.log(e.target);
			if (e.target === mobileLeftA || e.target === mobileLeftSt || e.target === mobileLeftB) {
				mobileLife.classList.remove("fromright");
				mobileLife.classList.add("fromleft");
			} else if (e.target === mobileRightA || e.target === mobileRightSt || e.target === mobileRightB) {
				mobileLife.classList.remove("fromleft");
				mobileLife.classList.add("fromright");
			} else {return;}
		}
	}
	

	// sub_data : 데이터 부족
	function subDataWork() {
		var solvElemUl = document.querySelector	(".solution");
		if (!solvElemUl) {return;}

		var solvElemLis = document.querySelectorAll(".solution > li");
		var solvElemUl2 = document.querySelectorAll(".solution > li > ul");

		solvElemUl.addEventListener("click", dataWork);
		
		
		function dataWork(e) {
			// console.log(e.target);
			e.preventDefault();
			var aTarget = e.target.parentNode;
			for (var i = 0; i < solvElemLis.length; i++) {
				solvElemLis[i].classList.remove("on");
			} aTarget.classList.add("on");
		} 

		for (var i = 0; i < solvElemUl2.length; i++) {
			solvElemUl2[i].addEventListener("click", ulStopWork);
		}

		function ulStopWork(e) {
			e.stopPropagation();
			// e.preventDefault();
		}
	}


	// sub_sel: 결합하고 할인
	function subSelWork() {
		var inBoxElemDivs = document.querySelectorAll(".combine_box > .selected");
		if (!inBoxElemDivs) {return;}

		var boxElemUls = document.querySelectorAll(".combine_box > ul");
		var leftopElemDivs = document.querySelectorAll(".combine > ul > .left > div");
		var rightopElemDivs = document.querySelectorAll(".combine > ul > .right > div");
		var leftBoxElemAs = document.querySelectorAll(".left > .combine_box > .selected > a");
		var rightBoxElemAs = document.querySelectorAll(".right > .combine_box > .selected > a");
		var leftElemAs = document.querySelectorAll(".left > .combine_box > ul > li > a")
		var rightElemAs = document.querySelectorAll(".right > .combine_box > ul > li > a")


		for (var i = 0; i < leftElemAs.length; i++) {
			var onLeftText = leftElemAs[i].firstChild.nodeValue;
			var leftElemAsText = document.createTextNode(onLeftText);

			leftBoxElemAs[i].appendChild(leftElemAsText);
			inBoxElemDivs[0].appendChild(leftBoxElemAs[i]);
			
			}
	
		for (var i = 0; i < rightElemAs.length; i++) {
			var onrighText = rightElemAs[i].firstChild.nodeValue;
			var rightElemAsText = document.createTextNode(onrighText);

			rightBoxElemAs[i].appendChild(rightElemAsText);
			inBoxElemDivs[1].appendChild(rightBoxElemAs[i]);

			}
			
		for (var i = 0; i < inBoxElemDivs.length; i++) {
			inBoxElemDivs[i].addEventListener("click", comBoxLeftWork);
			inBoxElemDivs[i].addEventListener("click", comBoxRightWork);
		}	

		for (var i = 0; i < boxElemUls.length; i++) {
			boxElemUls[i].addEventListener("click", comBoxRightWork);
		}

		for (var i = 0; i < leftBoxElemAs.length; i++) {
			leftBoxElemAs[i].addEventListener("click", comBoxLeftWork);
			rightBoxElemAs[i].addEventListener("click", comBoxRightWork);
		}

		for (var i = 0; i < leftopElemDivs.length; i++) {
			leftopElemDivs[i].addEventListener("click", comBoxLeftWork);
		}
		for (var i = 0; i < rightopElemDivs.length; i++) {
			rightopElemDivs[i].addEventListener("click", comBoxRightWork);
		}

		// 수정 예정 코드 예제

		// var 요금제 = {
		// 	single: {
		// 		internet: ["8,800","이동전화 월정액 1,100원 할인 + IPTV 기본료 1,100원 할인"];
		// 		iptv:;
		// 	}
		// 	family: {}
		// }

		function comBoxLeftWork(e) {
			e.preventDefault();

			if (e.target.classList.contains("option1")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < leftBoxElemAs.length; i++) {
					leftBoxElemAs[i].classList.remove("on");
				}
				for (var i = 0; i < leftopElemDivs.length; i++) {
					leftopElemDivs[i].classList.remove("on");
				}
				leftBoxElemAs[0].classList.add("on");
				leftopElemDivs[1].classList.add("on");

			} else if (e.target.classList.contains("option2")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < leftBoxElemAs.length; i++) {
					leftBoxElemAs[i].classList.remove("on");
				} 
				for (var i = 0; i < leftopElemDivs.length; i++) {
					leftopElemDivs[i].classList.remove("on");
				}
				leftBoxElemAs[1].classList.add("on");
				leftopElemDivs[2].classList.add("on");

			}

		}
		
			
		function comBoxRightWork(e) {
			e.preventDefault();
			if (e.target.classList.contains("option3")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < rightBoxElemAs.length; i++) {
					rightBoxElemAs[i].classList.remove("on");
				}
				for (var i = 0; i < rightopElemDivs.length; i++) {
					rightopElemDivs[i].classList.remove("on");
				}
				rightBoxElemAs[0].classList.add("on");
				rightopElemDivs[1].classList.add("on");

			} else if (e.target.classList.contains("option4")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < rightBoxElemAs.length; i++) {
					rightBoxElemAs[i].classList.remove("on");
				}
				for (var i = 0; i < rightopElemDivs.length; i++) {
					rightopElemDivs[i].classList.remove("on");
				}
				rightBoxElemAs[1].classList.add("on");
				rightopElemDivs[2].classList.add("on");

			} else if (e.target.classList.contains("option5")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < rightBoxElemAs.length; i++) {
					rightBoxElemAs[i].classList.remove("on");
				} 
				for (var i = 0; i < rightopElemDivs.length; i++) {
					rightopElemDivs[i].classList.remove("on");
				}
				rightBoxElemAs[2].classList.add("on");
				rightopElemDivs[3].classList.add("on");

			} else if (e.target.classList.contains("option6")) {
				for (var i = 0; i < boxElemUls.length; i++) {
					boxElemUls[i].classList.remove("on");
				}
				for (var i = 0; i < rightBoxElemAs.length; i++) {
					rightBoxElemAs[i].classList.remove("on");
				} 
				for (var i = 0; i < rightopElemDivs.length; i++) {
					rightopElemDivs[i].classList.remove("on");
				}
				rightBoxElemAs[3].classList.add("on");
				rightopElemDivs[4].classList.add("on");
			}
		}
	
		
	

		//리스트 여닫기
		for (var i = 0; i < inBoxElemDivs.length; i++) {
			inBoxElemDivs[i].addEventListener("click", function selWork(e) {
				e.preventDefault();
				var aTarget = e.target.parentNode.nextSibling.nextSibling;
				if (e.target.parentNode.className !== "selected") {
					return;
				} else if (aTarget.classList.contains("on")) {
					aTarget.classList.remove("on");
				} else {
					aTarget.classList.add("on");
				} 
			})	
		}
		
	}



	//footer: 패밀리사이트 메뉴
	function footerWork() {
		var footerRightElemA = document.querySelector("#footer .family_site > a");
		var footerRightElemUl = document.querySelector("#footer .family_site > ul")

		footerRightElemA.addEventListener("click", function footerFamSite(e) {
			e.preventDefault();
			aTarget = this.parentNode;
			
			//display:block과 none을 이용한 애니메이션효과
			if (aTarget.classList.contains("on")){
				footerRightElemUl.style.opacity = "0"; 
				setTimeout( function() { aTarget.classList.remove("on"); }, 100);

			} else {
				footerRightElemUl.style.opacity = "0"; 
				aTarget.classList.add("on");
				setTimeout( function() { footerRightElemUl.style.opacity = "1"; }, 20 );
			}

		})

	}
	





}

