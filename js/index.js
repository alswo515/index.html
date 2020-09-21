(function ($) {



    //gotop버튼클릭시 스크린 탑값을 맨위로

    // $('.older_posts a').on('click', function (e) {
    //     e.preventDefault()
    //     $('.article5').removeClass('blind')
    //     $('.article6').removeClass('blind')
    //     $('.article7').removeClass('blind')
    // })

    $(".older_posts a").toggle(
        function () {
            $('.article5').removeClass('blind')
            $('.article6').removeClass('blind')
            $('.article7').removeClass('blind')
        },
        function () {
            $('.article5').addClass('blind')
            $('.article6').addClass('blind')
            $('.article7').addClass('blind')
        }
    )


    // 포트폴리오 갤러리 클릭 이벤트시 팝업박스 작동
    var href
    var src
    var alt
    var lieq
    $('.article2 > .article2li > a').on('click', function (e) {

        e.preventDefault();
        lieq = $(this).parent().index()
        $('.article2_Popup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', src)
        $('.popupList > div > a > img').attr('alt', alt)
    })

    // ---------------엑스버튼이나 배경을 클릭시 사진이 닫히는 함수들
    $('.article2_Popup .close, .article2_Popup').on('click', function () {
        $('.article2_Popup').removeClass('on')
    })

    $('.popupList').on('click', function (e) {
        e.stopPropagation();
        //즉 클릭이벤트를 일어날시 이벤트가 없어지지 않는것을 방지하는 메소드
    })
    // ------------화살표 클릭에의한 이벤트문에 인덱스번호를 지목하는 함수
    function changeList(ind) {
        href = $('.article2 > .article2li').eq(ind).find('a').attr('href')
        src = $('.article2 > .article2li').eq(ind).find('img').attr('src')
        alt = $('.article2 > .article2li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'src': src,
            'alt': alt
        }).css({
            opacity: '0.5'
        }).stop().animate({
            opacity: '1'
        }, 500)
    }

    // -----------화살표 클릭시 이전사진으로 넘어가는 함수
    $('.popupList .prev').on('click', function () {
        --lieq;
        if (lieq < 0) {
            lieq = 7;
        }
        changeList(lieq)
    })

    //------------------화살표 클릭시 다음사진으로 넘어가는 함수
    $('.popupList .next').on('click', function () {
        ++lieq;
        if (lieq > 7) {
            lieq = 0;
        }
        changeList(lieq)
    })


})(jQuery)