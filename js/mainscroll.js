$(window).scroll(function () {
    var sct = $(this).scrollTop()
    //actNear 는 스크롤 탑값이 너무 크므로 .act값을 잡아서 스크롤값이 절반만와도 이벤트가 발생하도록 해주는 변수 
    var actNear = $('.article2').offset().top - $(this).height() / 2
    console.log(actNear)
    //actul 관련 스크롤 이벤트
    if (sct >= actNear) {
        $(".article2").addClass("on");
    } else {
        $(".article2").removeClass("on");
    }

})