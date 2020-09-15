(function ($) {



    $(".depth1 > li").hover(
        function () {
            $(this).find(".depth2").stop().slideDown(500);
        },
        function () {
            $(this).find(".depth2").stop().slideUp(500)
        }
    );
    var sct = 0;
    $(window).scroll(function () {
        sct = $(this).scrollTop();

        //scrollTop() 값이 100이사잉 되면 맨위로 버튼보이고 ,100미만이면 숨기기
        if (sct >= 100) {
            $('.gotop').addClass('on').stop().animate({
                opacity: '1'
            }, 500)
        } else {
            $('.gotop').removeClass('on').stop().animate({
                opacity: '0'
            }, 500)
        }
    });

    $('.gotop').on('click', function () {
        $('body, html').stop().animate({
            scrollTop: 0
        }, 100, 'linear')
    }) //gotop버튼클릭시 스크린 탑값을 맨위로
})(jQuery)