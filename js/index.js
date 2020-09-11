(function ($) {
    $(".depth1 > li").hover(
        function () {
            $(this).find(".depth2").stop().slideDown(500);
        },
        function () {
            $(this).find(".depth2").stop().slideUp(500).css({
                textAlign: 'center',
                display: 'inline-block',
                position: 'absolute',
                top: '100%',
                right: "0",
                display: 'none',
                lineHeight: '2',
                zIndex: '999'
            });
        }
    );
})(jQuery)