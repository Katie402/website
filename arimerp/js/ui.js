 
$(document).ready(function(){
     
    //user setting popup
    $(function() {
        $('.user_info a').on('click', function(){
            $('.user_box').fadeToggle(); 
        });

        $('.setting').on('click', function(){
            $('.user_box').fadeOut();
            $('.popup').fadeIn();
            $('.dim').fadeIn();
        });

        $('.popup .btn').on('click', function(){
            $('.popup').fadeOut();
            $('.dim').fadeOut();
        });

    });

    //header popup
    $(function() {
        $('.popup_body ul li strong').on('click', function(){
            $(this).toggleClass('on');
        });
    });

    //nav_left menutoggle 
    $('a.down').on('click', function(){
        $('a.down').toggleClass('up');
        $('.box_ttl02').toggleClass('hidden_line');
        $('.down_box').toggle();
    });
    

 });