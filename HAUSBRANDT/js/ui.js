window.onload = function() {

    var htmlElem = document.querySelector("html");
    
    //최상단 메뉴
    var topArrow = document.querySelector(".top_arrow");
    console.log(topArrow);
    topArrow.addEventListener("click", function topArrowWork(e) {
    e.preventDefault();
        if (topArrow.classList.contains("opened")) {
            topArrow.classList.remove("opened");
        } else {
            topArrow.classList.add("opened");
        }
    })


    //스크롤 이벤트
    
    var header = document.querySelector("header");

    document.addEventListener("scroll", function scrollWork() {
    var scrolledHeight = htmlElem.scrollTop;
        if (scrolledHeight < 145) {
            header.classList.remove("on");
        } else if (scrolledHeight > 145) {
            header.classList.add("on");
        }
    })


    // 언어메뉴
    var lang = document.querySelector(".lang");
    var langElemA = document.querySelector(".lang > a");

    lang.addEventListener("mouseenter", langWork);
    lang.addEventListener("mouseleave", langWork);

    function langWork(e) {
        e.preventDefault();
        if (e.type === "mouseenter") {
            langElemA.classList.add("on");
        } else if (e.type === "mouseleave") {
            langElemA.classList.remove("on");
        }
    }


    //메뉴 여닫기
    var mainTab = document.querySelector(".main_bar > li");
    
    mainTab.addEventListener("mouseenter", mainWork);
    mainTab.addEventListener("mouseleave", mainWork);

    function mainWork(e) {
        if (e.type === "mouseenter") {
            this.classList.add("on");
            searchElemField.classList.remove("on");
        
        } else if (e.type === "mouseleave") {
            this.classList.remove("on");
        }
    }

    //서브메뉴 여닫기
    var subTab = document.querySelectorAll(".sub_tab");

    for (var i = 0; i < subTab.length; i++) {
        subTab[i].addEventListener("mouseenter", subWork);
        subTab[i].addEventListener("mouseleave", subWork);        
    }

    function subWork(e) {
        if (e.type === "mouseenter") {
            this.classList.add("on");
        } else if (e.type === "mouseleave") {
            this.classList.remove("on");
        }
    }


    //서치 메뉴
    var searchElemA = document.querySelector(".search > a");
    var searchElemField = document.querySelector(".search > fieldset");

    searchElemA.addEventListener("click", function searchWork(e) {
    e.preventDefault();
        if (searchElemField.classList.contains("on")) {
            searchElemField.classList.remove("on");
        } else {
            searchElemField.classList.add("on");
        }
    })


    // 햄버거 메뉴 변경
    var trigger = document.querySelector(".menu_trigger");

    trigger.addEventListener("click", function triggerWork(e) {
    e.preventDefault();
        if (this.classList.contains("active")) {
            trigger.classList.remove("active");
            trigger.classList.remove("opened");
            document.querySelector("body").removeAttribute("style", "overflow:hidden;");
        } else {
            this.classList.add("active");	
            this.classList.add("opened");
            document.querySelector("body").style.overflow = "hidden";
        }
    })


    // 햄버거메뉴 서브 메뉴탭
    var openedTab = document.querySelector(".open_tab");
    
    openedTab.addEventListener("click", function triggerWork(e) {
    e.preventDefault();
        if (this.classList.contains("on")) {
            this.classList.remove("on");
        } else {
            this.classList.add("on");	
        }
    
    })
    

    // slider
    $(document).ready( function() {
    var aniDiv = document.querySelectorAll(".visual > li > .description");
    console.log(aniDiv[0]);
        var slider = $('.visual').bxSlider({
            auto: true,
            autoHover: true,
            autoControls: true,
            pager: false,
            // prevSelector: '.prev',
            // nextSelector: '.next',
            onSliderLoad: slideStart, 		//시작 슬라이드 인덱스(zero-base)
            onSlideNext: slideText,			// 1나오고, 0번, 2번 지운다
            onSlidePrev: slideText,
            onSlideAfter: function slideText() {
                slider.stopAuto();
                slider.startAuto();
            }
                        
        });
        
        function slideStart() {
            aniDiv[0].classList.add("active");
        };

        function slideText() {
            var prevNum;
            var nextNum;
            var slideNum = this.getCurrentSlide();
            aniDiv[slideNum].classList.add("active");
            
            if (slideNum === 0) {
                prevNum = aniDiv.length-1;
                nextNum = slideNum + 1;
            } else if (slideNum === aniDiv.length-1) {
                prevNum = slideNum - 1;
                nextNum = 0;
            } else {
                prevNum = slideNum - 1;
                nextNum = slideNum + 1;
            }
            aniDiv[prevNum].classList.remove("active");
            aniDiv[nextNum].classList.remove("active");
        };
    });


    //Video (parallax)
    var video = document.querySelector("video");

    document.addEventListener("scroll", function videoWork() {
        var scrolled = htmlElem.scrollTop;     
        var videoPos = (scrolled * 0.1) + "px";
        video.setAttribute("style", "transform:translateY(" + videoPos + ")");
    })

    //Video (jQuery parallax)
        // $(window).scroll(function() {
        //     var scrollTop = $(window).scrollTop();
        //     var imgPos = scrollTop / 2 + 'px';
        //     $('.hero').find('img').css('transform', 'translateY(' + imgPos + ')');
        // });



    //QNE (parallax)
    var layerBack = document.querySelector(".layer_back");

    document.addEventListener("scroll", function scrollLayerWork() {
        var scrolled = htmlElem.scrollTop;
        layerBack.style.backgroundPositionY = ( scrolled * 0.18 )+ "px";
    })

    
    //QNE (jQuery parallax)
        // $(window).scroll(function(e){
        //     parallax();
        // });

        // function parallax(){
        //     var scrolled = $(window).scrollTop();
        //     $('.layer_back').css('background-position-y',(scrolled*0.2)+'px');
        // }


    //footer
    var fSideMenus = document.querySelectorAll(".f_sidemenu");

    for (var i = 0; i < fSideMenus.length; i++) {
        fSideMenus[i].addEventListener("click", fMenuWork);
    }
    function fMenuWork(e) {
    e.preventDefault();

        if (this.classList.contains("opened")) {
            this.classList.remove("opened");  
        } else {
            this.classList.add("opened");
        }
    }


    //Top 버튼
    var fTop = document.querySelector(".top")
    
    document.addEventListener("scroll", function scrollFtWork() {
        var scrolledHeight = htmlElem.scrollTop;
        if (scrolledHeight > 700) {
            fTop.classList.add("on");
            document.querySelector(".top > a").classList.add("on");            
        } else if (scrolledHeight < 700) {
            fTop.classList.remove("on");
        }
    })
 

}

