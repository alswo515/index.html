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


$(window).resize(function () {
    init()
})