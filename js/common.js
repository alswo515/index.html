(function ($) {

  //화면 처음 들어갔을떄 스핀 로딩화면
  // $(window).load(function () {
  //   $(".introAni").delay(500).fadeOut(500);
  // });

  //로딩화면 후 article1 의 시작 애니메이션
  var colorCode = ['red', 'blue', 'green', 'yellow', 'lime']
  var mincnt = setInterval(minusCount, 1000)
  var k = 2

  function minusCount() {
    k--;
    if (k === 0) {
      clearInterval(mincnt)
      $('.introAni').fadeOut(500)
      $(".article1").addClass("on");
      return false
    }
    //배열변수를 사용해서 글자색깔을 바꿔주는코드
    $('.introAni span').text(k + '초').css({
      color: colorCode[k]
    });

  }

  // var scollSize = $(document).height() - $(window).height();
  // var delayBar;
  // $(window).on("scroll", function () {
  //   var sct = $(this).scrollTop();

  //   $(".scrolling-bar").css({
  //     zIndex: 999999999999,
  //     opacity: "1",
  //     width: ($(sct).scrollTop() / scollSize) * 100 + "%",
  //   });
  //   console.log($("#header").height())
  //   if (sct >= $("#header").height()) {
  //     $("#header").animate({
  //       background: 'rgba(255,255,255,0.9)'
  //     }, 400, )
  //   } else {
  //     $('#header').animate({
  //       background: 'rgba(255,255,255,1)'
  //     }, 400, )
  //   }
  // });
  var scollSize = $(document).height() - $('#header').height() - $(window).height();
  var flag = true;
  $(window).on("scroll", function () {
    //스크롤 탑값에따라 헤더아래쪽 선의 넓이 변경하기
    var sct = $(this).scrollTop();
    var wid = (sct / scollSize) * 100 + '%';
    $(".scrolling-bar").css({
      zIndex: 99999999999999999999999,
      opacity: "1",
      width: wid
    });
    //스크롤탑값에 따라 헤더구역 고정시키기
    if (sct >= 178 && flag) {
      $("#header").css({
        position: 'fixed',
        opacity: '0',
        height: '0px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        zIndex: '9999999'
      }).stop().animate({
        height: '178px',
        opacity: '1'
      }, 500)
      flag = false;
    } else if (sct === 0 && !flag) {
      $("#header").css({
        position: 'relative',
        height: '0',
        opacity: '0',
        paddingBottom: '178px'
      }).stop().animate({
        opacity: '1',
        height: '178px',
        backgroundColor: 'rgba(255,255,255,0.9)'
      }, 500)
      flag = true;
    }
  });




  //메인박스 로드메소드
  $("#containerBox").load("main.html");

  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#kimContainer").remove();
    $("#containerBox").load(url);
  });
  //푸터구역 사이트맵 로드 메소드
  $("#footer .link > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#kimContainer").remove();
    $("#containerBox").load(url);
    $(window).scrollTop() === 0;
  });




})(jQuery);