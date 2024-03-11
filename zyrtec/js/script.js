jQuery(document).ready(function () {

    var $wh = $(window).width();

    if ($wh <= 1080) {

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            // console.log(scroll);
            if (scroll <= 1100) {
                // $(".sticky_btn").fadeIn();
            } else if (scroll > 1100) {
                // $(".sticky_btn").fadeOut();
            }
        });

    } else if ($wh > 1080) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            // console.log(scroll);
            if (scroll < 1900) {
                // $(".sticky_btn").fadeIn();
            } else if (scroll > 1900) {
                // $(".sticky_btn").fadeOut();
            }
        });

    }

    function responsive() {
        var $wh = $(window).width();

        if ($wh <= 1080) {
            $("body").removeClass("web");
            $("body").addClass("mobile");

        } else {
            $("body").removeClass("mobile");
            $("body").addClass("web");

        }
    }

    $(function () {
        $(window).load(function () {
            responsive();
        });
        $(window).resize(function () {
            responsive();
        });
    });

    var toggle = 0;

    $(".gnb_menu").click(function (e) {
        if ($("body").hasClass("mobile")) {
            if (toggle == 0) {
                $(".dim").show();
                $(".gnb_menu, #gnb").addClass("on");
                e.preventDefault();
                return toggle = 1;

            } else if (toggle == 1) {
                $(".gnb_menu, #gnb").removeClass("on");
                $(".dim").hide();
                return toggle = 0;
            }
        }
    });

    var $depth02 = $('.gnb_list > li > a');

    $depth02.on('click', function () {
        if ($(this).hasClass('on')) {
            $(this).next().slideUp();
            $(this).removeClass('on');
        } else {
            $('.depth02').slideUp();
            $depth02.removeClass('on');
            $(this).addClass('on').next().slideDown();
        }
    });

    $(".dim").click(function () {
        if (toggle == 1) {
            $("#gnb").slideUp();
            $(".gnb_menu").removeClass("on");
            $(".dim").hide();
            return toggle = 0;
        }
    });

    // 패밀리사이트
    $('.fam_ttl').on('click', function () {
        $('.f_family ul').toggle();
    });


});