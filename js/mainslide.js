$(".visualRoll").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    speed: 600,
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false,
    prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
})

$(".main_rolling_pc  .plpa").on("click", function () {
    if ($(this).find("i").hasClass("fa-pause")) {
        $(".visualRoll").slick("slickPause")
        $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    } else {
        $(".visualRoll").slick("slickPlay")
        $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    }
})