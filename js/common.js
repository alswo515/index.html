(function ($) {
  var sct = 0;

  //화면 처음 들어갔을떄 스핀 로딩화면
  // $(window).load(function () {
  //   $(".introAni").delay(500).fadeOut(500);
  // });

  //로딩화면 후 article1 의 시작 애니메이션
  var colorCode = ["red", "blue", "green", "yellow", "lime"];
  var mincnt = setInterval(minusCount, 1000);
  var k = 2;

  function minusCount() {
    k--;
    if (k === 0) {
      clearInterval(mincnt);
      $(".introAni").fadeOut(500);
      $(".article1").addClass("on");
      return false;
    }
    //배열변수를 사용해서 글자색깔을 바꿔주는코드
    // $('.introAni span').text(k + '초').css({
    //   color: colorCode[k]
    // });
  }




  //윈도우 리사이즈 이벤트 반응형
  init();


  var flag = true;

  function init() {
    var ww = $(window).innerWidth();
    if (ww > 767) {
      $("html").addClass("pc").removeClass("mobile");
      if (flag) {
        $(".nav").show();
        $(".depth1 > li").removeClass("on");
        $(".open_nav, .close_nav, .depth2").hide();
        flag = false;
      }
    } else if (ww <= 767) {
      $("html").addClass("mobile").removeClass("pc");
      if (!flag) {
        $(".open_nav").show();
        $(".nav, .depth2").hide();
        flag = true;
      }
    }
  }

  $(window).on("resize", function () {
    init();
  });



  
  //스크롤 탑값에따라 헤더아래쪽 선의 넓이 변경하기
  $(window).on("scroll", function () {
    var scollSize =
      $(document).height() - $("#header").height() - $(window).height();
    sct = $(this).scrollTop();
    var wid = (sct / scollSize) * 100 + "%";
    $(".scrolling-bar").css({
      zIndex: 99999999999999999999999,
      opacity: 1,
      width: wid,
    });
    //스크롤탑값에 따라 헤더구역 고정시키기
    if (sct >= 100 && flag) {
      $("#header")
        .css({
          position: "fixed",
          opacity: "0",
          height: "0px",
          backgroundColor: "rgba(255,255,255,0.9)",
          zIndex: "9999999",
        })
        .stop()
        .animate({
            height: "120px",
            opacity: "1",
          },
          500
        );
      flag = false;
    } else if (sct === 0 && !flag) {
      $("#header")
        .css({
          position: "relative",
          height: "0",
          opacity: "0",
          paddingBottom: "120px",
        })
        .stop()
        .animate({
            opacity: "1",
            height: "120px",
            backgroundColor: "rgba(255,255,255,0.9)",
          },
          500
        );
      flag = true;
    }

    //scrollTop() 값이 100이사잉 되면 맨위로 버튼보이고 ,100미만이면 숨기기 g
    if (sct >= 100) {
      $(".gotop").addClass("on").stop().animate({
          opacity: "1",
        },
        500
      );
    } else {
      $(".gotop").removeClass("on").stop().animate({
          opacity: "0",
        },
        500
      );
    }
  });

  //top 버튼 클릭시 스크롤 맨위로 올라가기
  $(".gotop").on("click", function () {
    $("body, html").stop().animate({
        scrollTop: 0,
      },
      100,
      "linear"
    );
  });

  //메인박스 로드메소드
  $("#containerBox").load("main.html");

  // pc화면에서 li a 클릭시 클릭이벤트 막기
  


  //pc 화면에서 depth1 호버시 depth2 보이게
  $(".depth1 > li").hover(
    function () {
      if ($("html").hasClass("pc")) {
        $(this).find(".depth2").stop().slideDown(500);
      }
    },
    function () {
      if ($("html").hasClass("pc")) {
        $(this).find(".depth2").stop().slideUp(500);
      }
    }
  );

  //햄버거 클릭시 네비박스 나타나기
  $("#header .open_nav").on("click", function () {
    $(this).next().stop().slideDown(300);
    $(this).hide();
    $(this).nextAll(".close_nav").css({
      display: "block",
    });
  });

  //닫기버튼 클릭시 네비박스 사라지기
  $("#header .close_nav").on("click", function () {
    $(this).prev().stop().slideUp(300);
    $(this).hide();
    $(this).prevAll(".open_nav").css({
      display: "block",
    });
    $(".depth2").hide();
    $(".nav .depth1 > li").removeClass("on");
  });

  //mobile 에서 header 구역의 li 메뉴 클릭시 이벤트 없애기
  // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴 보이게 하고,
  // 2단계 메뉴가 없으면 1단계메뉴 페이지 로드시키기
  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    if ($("html").hasClass("mobile")) {
      if ($(this).next().is(".depth2")) {
        $(this).next().toggleClass("on");
        $(this).next().stop().slideToggle(300);
        $(this).parent().siblings().each(function () {
          if ($(this).find(".depth2").css("display") === "block") {
            $(this).find(".depth2").slideUp(300);
            $(this).removeClass("on")
          }
        })
      } else if (!$(this).next().is(".depth2")) {
        var url = $(this).attr("href");
        $("#kimContainer").remove();
        $("#containerBox").load(url);
        $(".open_nav").show();
        $(".nav, .close_nav").hide();
        $(".depth1 > li").removeClass("on")
      }
    } 
    else if ($("html").hasClass('pc')) {
      var url = $(this).attr("href");
      $("#kimContainer").remove();
      $("#containerBox").load(url);
    }
  });
  //depth2 > li > a 클릭시 로드 메소드
  $(".depth2 > li > a").on("click", function (e) {
    e.preventDefault()
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

  //서브페이지에서 스크롤이벤트를 실행시킬려면
  //서브페이지에서 스크롤이벤트 스크립트를 작성한후에
  // common.js 에서 if문을 돌려서 조건을 추가해서 돌려야한다

  // 예를 들면
  // $(window).scroll(function(){
  //    if ($("#newContainer").children().is("#main_section")) {
  //          mainScroll();
  //     }
  //     if ($("#newContainer").children().is("#company_section")) {
  //       companyScroll();
  //     }
  // })

  //메인페이지의 스크롤 이벤트
  // function mainScroll() {  메인페이지 해당구역들의 스크롤애니메이션 프로그램  }
  //서브페이지의 스크롤이벤트
  // function companyScroll() {   컴퍼니페이지 해당구역들의 스크롤애니메이션 프로그램  }

  // 처음에 한번 sct = $(window).scrollTop() 값 당연히 구해야 하구요.

  //서브페이지 스크롤 이벤트
  sct = $(window).scrollTop();


//링크이동에따른 스크롤액션 함수호출
  $(window).scroll(function () {
    if ($("#kimContainer").children().is("#project_section")) {
      projectScroll();
    }
    if ($("#kimContainer").children().is("#section")) {
      sectionScroll();
    }
  });

//프로젝트 섹션 부분의 대한 스크롤 액션 함수
  function projectScroll() {
    sct = $(this).scrollTop();
    var project2 = $(".project_2").offset().top - $(this).height() / 2;
    var project3 = $(".project_3").offset().top - $(this).height() / 2;
    if (sct >= project2) {
      $(".project_2").addClass("on");
    } else if (sct === 0) {
      $(".project_2").removeClass("on");
    }
    if (sct >= project3) {
      $(".project_3").addClass("on");
    } else if (sct === 0) {
      $(".project_3").removeClass("on");
    }
  }

//메인 섹션 부분의 대한 스크롤 액션 함수
  function sectionScroll() {
    sct = $(this).scrollTop();
    var actNear = $(".article2").offset().top - $(this).height() / 2;
    var act3Near = $(".article3").offset().top - $(this).height() / 2;
    var act3TitNear = $(".article3_tit").offset().top - $(this).height() / 2;
    var act4Near = $(".article4").offset().top - $(this).height() / 2;
    var act5Near = $(".article5").offset().top - $(this).height() / 2;
    var act6Near = $(".article6").offset().top - $(this).height() / 2;
    var act7Near = $(".article7").offset().top - $(this).height() / 2;
    if (sct >= actNear) {
      $(".article2").addClass("on");
    } else if (sct === 0) {
      $(".article2").removeClass("on");
    }
    if (sct >= act3TitNear) {
      $(".article3_tit").addClass("on");
    } else if (sct === 0) {
      $(".article3_tit").removeClass("on");
    }
    if (sct >= act3Near) {
      $(".article3").addClass("on");
    } else if (sct === 0) {
      $(".article3").removeClass("on");
    }
    if (sct >= act4Near) {
      $(".article4").addClass("on");
    } else if (sct === 0) {
      $(".article4").removeClass("on");
    }
    if (sct >= act5Near) {
      $(".article5").addClass("on");
    } else if (sct === 0) {
      $(".article5").removeClass("on");
    }
    if (sct >= act6Near) {
      $(".article6").addClass("on");
    } else if (sct === 0) {
      $(".article6").removeClass("on");
    }
    if (sct >= act7Near) {
      $(".article7").addClass("on");
    } else if (sct === 0) {
      $(".article7").removeClass("on");
    }
  }
})(jQuery);