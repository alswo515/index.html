(function ($) {



    //gotop버튼클릭시 스크린 탑값을 맨위로

    // $('.older_posts a').on('click', function (e) {
    //     e.preventDefault()
    //     $('.article5').removeClass('blind')
    //     $('.article6').removeClass('blind')
    //     $('.article7').removeClass('blind')
    // })

    $(".older_posts a").toggle(
        function () {
            $('.article5').removeClass('blind')
            $('.article6').removeClass('blind')
            $('.article7').removeClass('blind')
        },
        function () {
            $('.article5').addClass('blind')
            $('.article6').addClass('blind')
            $('.article7').addClass('blind')
        }
    )


})(jQuery)