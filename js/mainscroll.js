$(window).scroll(function () {
    var sct = $(this).scrollTop()
    var actNear = $('.article2').offset().top - $(this).height() / 2
    var act3Near = $('.article3').offset().top - $(this).height() / 2
    var act4Near = $('.article4').offset().top - $(this).height() / 2
    var act5Near = $('.article5').offset().top - $(this).height() / 2
    var act6Near = $('.article6').offset().top - $(this).height() / 2
    var act7Near = $('.article7').offset().top - $(this).height() / 2
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
    if (sct >= act5Near) {
        $(".article5").addClass("on");
    } else {
        $(".article5").removeClass("on");
    }
    if (sct >= act6Near) {
        $(".article6").addClass("on");
    } else {
        $(".article6").removeClass("on");
    }
    if (sct >= act7Near) {
        $(".article7").addClass("on");
    } else {
        $(".article7").removeClass("on");
    }

})