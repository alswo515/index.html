(function ($) {

  //화면 처음 들어갔을떄 스핀 로딩화면
  // $(window).load(function () {
  //   $(".introAni").delay(500).fadeOut(500);
  // });

  //로딩화면
  var colorCode = ['red', 'blue', 'green', 'yellow', 'lime']
  var mincnt = setInterval(minusCount, 1000)
  var k = 2

  function minusCount() {
    k--;
    if (k === 0) {
      clearInterval(mincnt)
      $('.introAni').fadeOut(500)
      return false
    }
    //배열변수를 사용해서 글자색깔을 바꿔주는코드
    $('.introAni span').text(k + '초').css({
      color: colorCode[k]
    });

  }

  //메인박스 로드메소드
  $("#containerBox").load("main.html");

  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#kimContainer").remove();
    $("#containerBox").load(url);
  });

})(jQuery);