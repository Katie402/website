
$(function(){

    introWork();

    //randomly emotional imgs in Intro
    $(document).ready(function () {
        var $children = $(".intro .col");
        var interval = setInterval(function () {
            var $d = $children.not(".on");
            var $el = $d.eq(Math.floor(Math.random() * $d.length));
            $el.addClass('on');
            setTimeout(function() { $el.removeClass('on'); }, 1000 );
            if ($d.length == 1) {
                clearInterval(interval);
            }
        }, Math.floor((Math.random() * 4500) + 500));
    });


    //intro
    function introWork(){
        var tab = $('.intro .tab');
        var tabBox = $('.intro .tab_box');

        //clicking tabs in mobile
        tab.each(function(idx, item){
            $(item).on('click', function(e){

                if ($(this).hasClass('on')) {
                    tab.removeClass('on');
                    tabBox.removeClass('on');

                } else {
                    tab.removeClass('on');
                    tabBox.removeClass('on');

                    tab.eq(idx).addClass('on');
                    $(this).next().addClass('on');

                    // changing z-index
                    tab.parents('.menus').css('z-index','2');
                    $(this).parents('.menus').css('z-index','1');
                }
            })
        });

        //clicking tab_boxes,
        tabBox.each(function(idx, item){
            $(item).on('click', function(e){
                e.preventDefault();

                if ($(this).hasClass('on')) {
                    tab.removeClass('on');
                    tabBox.removeClass('on');

                } else {
                    tab.removeClass('on');
                    tabBox.removeClass('on');

                    tabBox.eq(idx).addClass('on');
                    $(this).prev().addClass('on');

                    // change z-index
                    tabBox.parents('.menus').css('z-index','2');
                    $(this).parents('.menus').css('z-index','1');
                }
            })
        });

    };


    //hidden Intro, shown sections
    $(function(){

        AllWork();

        // skrollr.js
        function skrollrWork(){
            var sInit = skrollr.init({
                render: function(data) {
                    //Log the current scroll position.
                    $('#info').text(data.curTop);
                },
                easing: {
                    WTF: Math.random,
                    inverted: function(p) {
                        return 1-p;
                    }
                }

            });

            if($(window).width() > 980) {
                sInit;
            } else if($(window).width() <= 980) { //960부터 destroy 되지만 body의 scroll width가 8px이라서 브라우저 별 $(window).width() 크기가 모두 달라짐. 각 width 값을 잡기가 불가능하여 스크롤 width:0 줌
                sInit.destroy();
            }
        };

        $(document).ready(function(){
            skrollrWork();
        });

        $(window).on('resize', function(){
            skrollrWork();
        });

        /* All section */
        function AllWork() {
            var $wrapper = $('.wrapper');
            var $intro = $('.intro');
            var $mobile = $('.mobile');
            var $introBtn = $('.intro .intro_btn_go');
            var $sky = $('#sky');
            var $fog= $('#fog');
            var $bgCloud = $('.bg_cloud');
            var $mainVisual = $('.main_visual');
            var $sec01 = $('#sec01');
            var $sec02 = $('#sec02');
            var $sec01Ttl = $('#sec01 .sec_ttl');
            var $info = $('#info');
            var $progress = $('#progress');
            var $skrollrBody = $('#skrollr-body');


            // 모바일 기기 체크하기
            function isMobile() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            if (isMobile()) {
                // 모바일이면 실행될 코드 들어가는 곳
                $info.removeAttr('id');
                $progress.removeAttr('id');
                $skrollrBody.removeAttr('id');
                $('section').removeAttr('data-start');
                $('div').removeAttr('data-0');
                $('section').removeAttr('data-500');
                $('section').removeAttr('data-750');
                $('section').removeAttr('data-2000');
                $('section').removeAttr('data-3000');
                $('div').removeAttr('data-end');

            } else {
                // 모바일이 아니면 실행될 코드 들어가는 곳
                fireFlies(); //fireFlies effect
            }

            //when click the button of mobile,
            $introBtn.on('click', function(e){
                sec01Work(); //section01
                // sec02Work(); //section02

                setTimeout(function(){
                    $bgCloud.stop().animate({
                        top: '0',
                    }, 1500, 'easeInOutCubic' );
                    $intro.stop().animate({
                        top: '-105%',
                    }, 1000, 'easeInExpo' );
                    $mainVisual.addClass('shown');
                }, 200);

                // $wrapper.addClass('unfixed');
                $mobile.slideUp(500); //hidden mobile
                $wrapper.show(1000);//shown wrapper

                //section01
                function sec01Work(){
                    $(window).scroll(function(e){
                        //imgs effects in main visual
                        e.preventDefault();
                        if( $(window).width() ){
                            if( $(window).scrollTop() > 0 ){
                                $bgCloud.stop().animate({
                                    top: '-100%',
                                }, 300, 'easeInOutCubic' );
                                $sec01Ttl.stop().animate({
                                    opacity: '0',
                                }, 300, 'easeInOutCubic' );
                                $sky.addClass('hidden');
                                $fog.addClass('hidden');
                            } else {
                                $bgCloud.stop().animate({
                                    top: '0',
                                }, 300, 'easeInOutCubic' );
                                $sec01Ttl.stop().animate({
                                    opacity: '1',
                                }, 300, 'easeInOutCubic' );
                                $sky.removeClass('hidden');
                                $fog.removeClass('hidden');
                                $sec02.addClass('cloud');
                            };
                        }
                    });
                };

                //section02
                // function sec02Work() {
                //     $(window).on('scroll touchmove', function(){
                //         if ($('#sec02').hasClass('skrollable-after')){
                //             $("#sec02 .col_img").addClass('on');
                //         }
                //     });
                // };

                //slick section02
                $(function() {
                    $(document).ready(function(){
                        colSlider();
                    });
                    $(window).on('resize', function(){
                        colSlider();
                    });

                    //col_slider
                    function colSlider(){
                        var $colSlider = $('#sec02 .col_slider');
                        var slideCount = null;

                        if($(window).width() > 1280){

                            //랜덤 resize 시 슬라이더가 재생성되기 때문에 각 미디어쿼리마다 unslick을 넣어줌
                            if ($colSlider.hasClass('slick-initialized')) {
                                $colSlider.slick('unslick');
                            }

                            $( document ).ready(function() {
                                $colSlider.slick({
                                    arrows: true,
                                    speed: 0,
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

                        } else if ( ($(window).width() <= 1280 ) && ($(window).width() > 980) ) {
                            if($colSlider.hasClass('slick-initialized')) {
                                $colSlider.slick('unslick');
                            }

                            $( document ).ready(function() {
                                $colSlider.slick({
                                    arrows: true,
                                    speed: 0,
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

                        } else if ($(window).width() <= 980 ){

                            if($colSlider.hasClass('slick-initialized')) {
                                $colSlider.slick('unslick');
                            }

                        };

                        //slidecount
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

                });

                //slick section04

                var $imgSlider = $('#sec04 .img_slider');
                var $txtSlider = $('#sec04 .me_desc');

                $( document ).ready(function() {
                    $imgSlider.slick({
                        autoplay: true,
                        autoplaySpeed: 5000,
                        speed: 1000,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        infinite: true,
                    });

                    $txtSlider.slick({
                        autoplay: true,
                        // autoplaySpeed: 4000,
                        // speed: 400,
                        arrows: false,
                        vertical: true,
                        // verticalScrolling: true,
                        cssEase: 'linear',
                        infinite: true,
                    });

                });


                // var words = document.getElementsByClassName('word');
                // var wordArray = [];
                // var currentWord = 0;

                // words[currentWord].style.opacity = 1;
                // for (var i = 0; i < words.length; i++) {
                // splitLetters(words[i]);
                // }

                // function changeWord() {
                // var cw = wordArray[currentWord];
                // var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
                // for (var i = 0; i < cw.length; i++) {
                //     animateLetterOut(cw, i);
                // }

                // for (var i = 0; i < nw.length; i++) {
                //     nw[i].className = 'letter behind';
                //     nw[0].parentElement.style.opacity = 1;
                //     animateLetterIn(nw, i);
                // }

                // currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
                // }

                // function animateLetterOut(cw, i) {
                // setTimeout(function() {
                //         cw[i].className = 'letter out';
                // }, i*80);
                // }

                // function animateLetterIn(nw, i) {
                // setTimeout(function() {
                //         nw[i].className = 'letter in';
                // }, 340+(i*80));
                // }

                // function splitLetters(word) {
                // var content = word.innerHTML;
                // word.innerHTML = '';
                // var letters = [];
                // for (var i = 0; i < content.length; i++) {
                //     var letter = document.createElement('span');
                //     letter.className = 'letter';
                //     letter.innerHTML = content.charAt(i);
                //     word.appendChild(letter);
                //     letters.push(letter);
                // }

                // wordArray.push(letters);
                // }

                // changeWord();
                // setInterval(changeWord, 4000);

            });

        };

    });


    //fireFlies effect
    function fireFlies(){

        var fireflies = 25;
        var $container = $(".firefly_box");
        var $containerWidth = $container.width();
        var $containerHeight = $container.height();
        // var master = new TimelineMax();

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


    // top button
    $(function(){
        $( '.top_btn' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
            return false;
        } );
    });

});

// var aniBox = $('.ani_box');

    // aniBox.each(function(){
    //   var _this = $(this);

    //   $(window).scroll(function(){
    //     if( $(window).width() ){
    //         if( $(window).scrollTop() > ( $this.offset().top + ( $(window).height()/2)  ) ){
    //         _this.addClass('active');
    //       }
    //     } else {
    //         _this.removeClass('active');
    //     }
    //   });

    // });

// $('#sec02').mousewheel(function(e, delta) {

//     $('#sec02 .col_box').scrollLeft -= (delta * 0);
//     // e.preventDefault();
// });


// $(function() {

                //     $slickCol = false;
                //     //col_slider
                //     function colSlider(){
                //         if($(window).width() > 768){
                //             if(!$slickCol){
                //                 $('#sec02 .col_slider').slick({
                //                     arrows: true,
                //                     speed: 0,
                //                     dots: false,
                //                     infinite: true,
                //                     slidesToShow: 3,
                //                     slidesToScroll: 3,
                //                     cssEase: 'linear',
                //                     centerMode: true,
                //                     prevArrow:'.slick-prev',
                //                     nextArrow:'.slick-next',
                //                     responsive: [
                //                         {
                //                             breakpoint: 1240,
                //                             settings: {
                //                                 slidesToShow: 2,
                //                                 slidesToScroll: 2,
                //                             }
                //                         },
                //                     ]
                //                 });
                //                 $slickCol = true;
                //             }
                //         } else if($(window).width() <= 768) {

                //             if($slickCol){
                //                 $('#sec02 .col_slider').slick('unslick');
                //                 $slickCol = false;
                //             }
                //         };

                //     };

                //     $(document).ready(function(){
                //         colSlider();
                //     });
                //     $(window).on('resize', function(){
                //         colSlider();
                //     });
                // });
