var winWidth, winHeight;

function init() {
    winWidth = $(window).innerWidth()
    winHeight = $(window).height()
    if (winWidth > 800 && !$('html').addClass('pc')) {
        $('#header').removeClass('on')
        $('.outlayer').removeClass('on')
        $('.nav').css({
            display: 'block',
            right: '0px'
        })
        $('html').addClass('pc').removeClass('mobile')
    } else if (winWidth < 800 && !$('html').hasClass('mobile')) {
        $('#header').removeClass('on')
        $('.nav').css({
            display: 'none',
            right: '-320px'
        })
        $('html').addClass('mobile').removeClass('pc')
    }
}

init()
// 이벤트 발생과 상관없이 최초 한번 현재 화면의 넓이를 구해서
// 800보다 크면 html에 클래스 pc를 붙여주고
// 800보다 작으면 html에 클래스 mobile을 붙여주는 
// 함수 init()을 작성한다.


$$(window).scroll(function () {
    var sct = $(this).scrollTop()
    //actNear 는 스크롤 탑값이 너무 크므로 .act값을 잡아서 스크롤값이 절반만와도 이벤트가 발생하도록 해주는 변수 
    var actNear = $('.act').offset().top - $(this).height() / 2
    //actul 관련 스크롤 이벤트
    if (sct >= actNear) {
        $('.article2 .article2ul .article2li').addClass('animate__fadeInUp')
        for (var i = 0; i < $('.actul .actli').length; i++) {
            $('.article2ul .article2li').eq(i).css({
                animationDelay: i * 0.5 + 's'
            }).addClass('animate__fadeInUp')
        }

    } else {
        $('.article2 .article2ul .article2li').removeClass('animate__fadeInUp')

    }
    //colum 관련 스크롤 이벤트
    var curriNear = $('.curriInfo').offset().top - $(this).height() / 2
    if (sct >= curriNear) {
        $('.column').eq(0).css({
            animationDelay: '0.5s',
            animationFillMode: 'both',
            animationDuration: '0.5s',
            animationName: 'fadeInLeft'
        })
        $('.column').eq(1).css({
            animationDelay: '0.5s',
            animationFillMode: 'both',
            animationDuration: '0.5s',
            animationName: 'fadeInUp'
        })
        $('.column').eq(2).css({
            animationDelay: '0.5s',
            animationFillMode: 'both',
            animationDuration: '0.5s',
            animationName: 'fadeInRight'
        })
    } else {
        $('.column').css({
            animationDelay: '0.5s',
            animationFillMode: 'both',
            animationDuration: '0.5s',
            animationName: 'fadeOut'
        })
    }

})