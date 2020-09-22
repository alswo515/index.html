(function ($) {
    $(".older_posts a").toggle(
        function () {
            $('.project_3').removeClass('blind')
        },
        function () {
            $('.project_3').addClass('blind')
        }
    )

})(jQuery)