$(window).scroll(function () {
    var sct = $(this).scrollTop()
    var actNear = $('.article2').offset().top - $(this).height() / 2
    console.log(actNear)
    if (sct >= actNear) {
        $(".article2").addClass("on");
    } else {
        $(".article2").removeClass("on");
    }

})