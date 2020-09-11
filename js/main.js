(function ($) {
    $('.older_posts > a').on('click', function (e) {
        e.preventDefault()
        $('article5').addClass('blind')
        $('article6').addClass('blind')
        $('article7').addClass('blind')
        return false
    })
})(jquery)