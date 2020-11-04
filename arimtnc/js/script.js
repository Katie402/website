window.onload = function(){
    
    function responsive(){

        var $wh = $(window).width();

        if ($wh <= 768)
        {
            $("body").removeClass("web");
            $("body").addClass("mobile");
        }else{
            $("body").removeClass("mobile");
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
    jQuery(function( $ ){    

        if ($(window).width() < 1000) {

            $('.all_btn').on('click', function(){
                $(this).toggleClass('on');
                $('.dim').fadeToggle();
                $('.full_menu').toggleClass('on');
            });

            $('.depth2').removeClass('on');
            $('.depth1_ttl').on('click', function(e){
                // e.preventDefault();

                var _this = $(this).next('.depth2');

                if($(this).hasClass('on')){
                    $('.depth1_ttl').removeClass('on');
                    $('.depth2').removeClass('on').slideUp('slow');
                } else {
                    $('.depth1_ttl').removeClass('on');
                    $(this).addClass('on');

                    $('.depth2').not(_this).removeClass('on').slideUp('slow');
                    _this.slideDown('slow');
                    _this.addClass('on');
                }
            });
        

            $(function(){
                $('.sub_srch_menu > li').each(function(index, item) {
                    $(item).click(function(){
                        $('.mention > li').removeClass().eq(index).addClass('on');
                    });
                });
            });

        
        } 

    });



    // top
    $(function(){
        $( '.top' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
            return false;
        } );
    });

    $(document).ready(function(){

        //sticky tab
        $(window).scroll(function(){
            var bodyOffset = jQuery('body').offset();
            var bookBox = $('.sub_tab');

            // console.log( $(window).scrollTop() );

            if ( $(window).scrollTop() > 520 ) {
                bookBox.addClass('fixed');
            
            } else {
                bookBox.removeClass('fixed');

            }
        });
    });

    


    $(function(){
        if ( $('#container').hasClass('member') ) {
            $('#header').css('position', 'relative');
        }
    });
    

    //tab on
    $(function(){
        var $container = $("#container");

        if ( $container.hasClass('feature') ) {
            $('.sub_tab li:nth-child(1) a').addClass('on');
        } else if ( $container.hasClass('item') || $container.hasClass('item02') ) {
            $('.sub_tab li:nth-child(2) a').addClass('on');
        } else if ( $container.hasClass('edu') ) {
            $('.sub_tab li:nth-child(3) a').addClass('on');
        } else if ( $container.hasClass('price') ) {
            $('.sub_tab li:nth-child(4) a').addClass('on');
        } else if ( $container.hasClass('client') ) {
            $('.sub_tab li:nth-child(5) a').addClass('on');
        } else if ( $container.hasClass('case') || $container.hasClass('case_view')) {
            $('.sub_tab li:nth-child(6) a').addClass('on');
        } else {
            return;
        }
    });

    //tab on
    $(function(){
        var $container = $("#container");

        if ( $container.hasClass('service01') ) {
            $('.sub_tab li:nth-child(1) a').addClass('on');
        } else if ( $container.hasClass('service02') ) {
            $('.sub_tab li:nth-child(2) a').addClass('on');
        } else if ( $container.hasClass('service03') ) {
            $('.sub_tab li:nth-child(3) a').addClass('on');
        } else {
            return;
        }
    });

    //tab on
    $(function(){
        var $container = $("#container");

        if ( $container.hasClass('news') ) {
            $('.sub_tab li:nth-child(1) a').addClass('on');
        } else if ( $container.hasClass('faq') ) {
            $('.sub_tab li:nth-child(2) a').addClass('on');
        } else if ( $container.hasClass('inquiry') ) {
            $('.sub_tab li:nth-child(3) a').addClass('on');
        } else if ( $container.hasClass('tech') ) {
            $('.sub_tab li:nth-child(4) a').addClass('on');
        } else {
            return;
        }
    });


    $('.tab_ttl').on('click', function(){
        $('.m_sub_tab ul').toggle();
        $('.tab_ttl').toggleClass('on');
    });
    


};
