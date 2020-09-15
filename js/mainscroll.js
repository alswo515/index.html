$(window).scroll(function () {
    var sct = $(this).scrollTop()
    var actNear = $('.article2').offset().top - $(this).height() / 2
    var act3Near = $('.article3').offset().top - $(this).height() / 2
    var act4Near = $('.article4').offset().top - $(this).height() / 2
    console.log(actNear)
    if (sct >= actNear) {
        $(".article2").addClass("on");
    } else {
        $(".article2").removeClass("on");
    }
    if (sct >= act3Near) {
        $(".article3").addClass("on");
    } else {
        $(".article3").removeClass("on");
    }
    if (sct >= act4Near) {
        $(".article4").addClass("on");
    } else {
        $(".article4").removeClass("on");
    }

})