
$(function(){

	//인트로 아이콘들 표정 랜덤으로 나타나기
	$(document).ready(function () {
		var $children = $(".intro .col");
		var interval = setInterval(function () {
			var $d = $children.not(".change");
			var $el = $d.eq(Math.floor(Math.random() * $d.length));
			$el.addClass('change');
			setTimeout(function() { $el.removeClass('change'); }, 1000 );
			if ($d.length == 1) {
				clearInterval(interval);
			}
		}, Math.floor((Math.random() * 4500) + 500));
	});

	//반딧불이 효과 - fireFlies effect
	function fireFlies(){

		var fireflies = 8;
		var $container = $(".firefly_box");
		var $containerWidth = $container.width();
		var $containerHeight = $container.height();

		for (var i = 0; i < fireflies; i++) {
		var firefly = $('<div class="firefly"></div>');
		TweenLite.set(firefly, {
			x: Math.random() * $containerWidth,
			y: Math.random() * $containerHeight
		});
		$container.append(firefly);
			flyTheFirefly(firefly);
		}

		function flyTheFirefly(elm) {
			var flyTl = new TimelineMax();
			var fadeTl = new TimelineMax({
				delay: Math.floor(Math.random() * 2) + 1,
				repeatDelay: Math.floor(Math.random() * 6) + 1,
				repeat: -1
			});

			fadeTl.to(
				[elm],
				0.25,
				{ opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
				Math.floor(Math.random() * 6) + 1
			);

			flyTl
				.set(elm, {scale: Math.random() * 0.75 + 0.5})
				.to(elm, Math.random() * 100 + 100, {
				bezier: {
					values: [
						{
						x: Math.random() * $containerWidth,
						y: Math.random() * $containerHeight
						},
						{
						x: Math.random() * $containerWidth,
						y: Math.random() * $containerHeight
						}
					]
				},
				onComplete: flyTheFirefly,
				onCompleteParams: [elm]
			});
		};
	};

	//인트로 탭 클릭
	var tabElements = $('.intro .tab, .intro .tab_box');

	tabElements.each(function(idx, item){
		$(item).on('click', function(e){

			if ($(this).hasClass('on')) {
				tabElements.removeClass('on');
			} else {
				tabElements.removeClass('on');

				tabElements.eq(idx).addClass('on');
				$(this).next().addClass('on');

				// index 우선순위 변경
				tabElements.parents('.menus').css('z-index','2');
				$(this).parents('.menus').css('z-index','1');
			}
		})
	});

	//skroll.js 실행, 인트로 숨기기, 섹션들 보이기
	$(function(){

		var $wrapper = $('.wrapper'),
			$intro = $('.intro'),
			$mobile = $('.mobile'),
			$introBtn = $('.intro .intro_btn'),
			$introBtnGo = $('.intro .intro_btn_go'),
			$sky = $('#sky'),
			$fog= $('#fog'),
			$bgCloud = $('.bg_cloud'),
			$mainVisual = $('.main_visual'),
			$sec02 = $('#sec02'),
			$sec01Ttl = $('#sec01 .sec_ttl');

		// skrollr.js
		function skrollrWork(){
			var sInit;
			if($intro.hasClass('fade') && $(window).width() > 980) {
				if(typeof skrollr.get() === 'undefined') { // skrollr 인스턴스가 없는 경우에만 초기화(플러그인이 존재할 경우)
					sInit = skrollr.init({
						render: function(data) {
							//현재 스크롤 높이
							$('#scroll-num').text(data.curTop);
						},
						easing: {
							WTF: Math.random,
							inverted: function(p) {
								return 1-p;
							}
						},
					});
					// $('body').css('height', 'auto');
				}
			} else {
				if(typeof skrollr.get() !== 'undefined') { // skrollr 인스턴스가 있는 경우에만 제거(플러그인이 초기화된 경우)
					skrollr.get().destroy();
					// body 태그 높이를 기본값으로 변경
					$('body').css('height', 'auto');
				}
			}
		}

		$(document).ready(function(){
			skrollrWork();

			$introBtn.on('click', function() {
				$intro.addClass('fade');
				skrollrWork(); //skrollr.js
				fireFlies(); //반딧불이 효과
			});
		});

		$(window).on('resize', function(){
			skrollrWork();
		});

		// 모바일 기기 체크하기
		var isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

		if (isMobile) { // 모바일일때
			// skrollr.init 함수 호출 시 mobileCheck 콜백 함수를 정의
			skrollr.init({
				mobileCheck: function() {
					if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
						return false;
					}
					return true; // 모바일 장치가 아닌 경우에는 스크롤링을 활성화
				},
				forceHeight: false // 모바일 장치에서 스크롤링을 비활성화
			});

		} else { //모바일 아닐때

		}

		//인트로 버튼 클릭 후 이벤트 발생
		$introBtnGo.on('click', function(e){

			setTimeout(function(){
				$bgCloud.stop().animate({top: '0',}, 1200, 'easeInOutCubic' );
				$intro.stop().animate({top: '-100%',}, 600, 'easeInExpo' );
				$mainVisual.addClass('shown');
			}, 200);

			$mobile.slideUp(500); //인트로 숨기기
			$wrapper.show(1000);//wrapper 보여주기


			//SECTION 01 - 메인 비주얼 효과
			$(window).scroll(function(e){
				e.preventDefault();
				if( $(window).width() ){
					if( $(window).scrollTop() > 0 ){
						$bgCloud.stop().animate({top: '-100%',}, 300, 'easeInOutCubic' );
						$sec01Ttl.stop().animate({opacity: '0',}, 300, 'easeInOutCubic' );
						$sky.add($fog).addClass('hidden');
					} else {
						$bgCloud.stop().animate({top: '0',}, 300, 'easeInOutCubic' );
						$sec01Ttl.stop().animate({opacity: '1',}, 300, 'easeInOutCubic' );
						$sky.add($fog).removeClass('hidden');
						$sec02.addClass('cloud');
					};
				}
			});


			//SECTION 02
			$(document).ready(function(){
				colSlider();
			});
			$(window).on('resize', function(){
				colSlider();
			});

			function colSlider(){
				var $colSlider = $('#sec02 .col_slider');
				var slideCount = null;

				if($(window).width() > 1600){

					//랜덤 resize 시 슬라이더가 재 생성되기 때문에 각 미디어쿼리마다 unslick을 넣어줌
					if ($colSlider.hasClass('slick-initialized')) {
						$colSlider.slick('unslick');
					}

					$( document ).ready(function() {
						$colSlider.slick({
							arrows: true,
							speed: 200,
							dots: false,
							infinite: true,
							slidesToShow: 3,
							slidesToScroll: 1,
							cssEase: 'linear',
							centerMode: true,
							prevArrow:'.slick-prev',
							nextArrow:'.slick-next',
						});
					});

				} else if ( ($(window).width() <= 1600 ) && ($(window).width() > 980) ) {
					if($colSlider.hasClass('slick-initialized')) {
						$colSlider.slick('unslick');
					}

					$( document ).ready(function() {
						$colSlider.slick({
							arrows: true,
							speed: 200,
							dots: false,
							infinite: true,
							slidesToShow: 2,
							slidesToScroll: 1,
							cssEase: 'linear',
							centerMode: true,
							prevArrow:'.slick-prev',
							nextArrow:'.slick-next',
						});
					});

				} else { //980이하부터 unslick

					if($colSlider.hasClass('slick-initialized')) {
						$colSlider.slick('unslick');
					}

				};

				//슬라이더 slidecount
				$colSlider.on('init', function(event, slick){
					slideCount = slick.slideCount;
					setSlideCount();
					setCurrentSlideNumber(slick.currentSlide);
				});

				$colSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setCurrentSlideNumber(nextSlide);
				});

				function setSlideCount() {
					var $el = $('.visual_count').find('.total');
					$el.text(slideCount);
				}

				function setCurrentSlideNumber(currentSlide) {
					var $el = $('.visual_count').find('.current');
					$el.text(currentSlide + 1);
				}

			};

			//SECTION 04
			var slick;
			slick = {
				slider : [],
				item : [
					$('#sec04 .img_slider'),
					$('#sec04 .me_desc'),
				],
				opt : [
					{autoplay: true,autoplaySpeed: 5000,speed: 1000,arrows: false,fade: true,cssEase: 'linear',infinite: true,},
					{autoplay: true,arrows: false,vertical: true,cssEase: 'linear',infinite: true,},
				],
				set : function(){
					$.each(slick.item, function(index){
						slick.slider[index] = slick.item[index].slick(slick.opt[index]);
					});
				}
			}

			if(slick.item.length > 0){
				slick.set();
			}

		});


	});

	// 위로가기 버튼
	$(function(){
		$( '.top_btn' ).click( function() {
			$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
			return false;
		} );
	});

});