$(function(){

    //링크 이동
    $('nav a').on('click', function() {
        var gnbHref = $(this).attr('class');
        var nowTopWeb = $('#'+gnbHref).offset().top - 127;    
        var nowTopMo = $('#'+gnbHref).offset().top - 50;    
        
        if ($('body').hasClass('web')) {
            $('html, body').animate({'scrollTop': nowTopWeb}, 500) ;
            console.log('asdf');
        } else if ($('body').hasClass('mo')) {
            $('html, body').animate({'scrollTop': nowTopMo}, 500) ;
            $('#header nav').removeClass('on');
        }
        
    });

    function responsive(){
        var $wh = $(window).width();
        if ($wh <= 1024) {   
            $("body").removeClass("web");
            $("body").addClass("mo");
        } else {
            $("body").removeClass("mo");
            $("body").addClass("web");
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

    //상단 해더 메뉴
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });

    $(function() {
        $('.ham_btn').on('click', function() {         
            $('#header nav').addClass('on');
        });
        $('#header .close_menu').on('click', function(){
            $('#header nav').removeClass('on');
        });
        
    });

    //슬라이더
    $('.visual_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 350,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-out'
    });

});
