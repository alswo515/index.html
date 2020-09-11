(function ($) {
    $(".depth1 > li").hover(
        function () {
            $(this).find(".depth2").stop().slideDown(700);
        },
        function () {
            $(this).find(".depth2").stop().slideUp(500);
        }
    );
})(jQuery)