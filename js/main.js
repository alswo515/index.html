(function ($) {
    $('.older_posts > form > button').on('click', function (e) {
        e.preventDefault()
        $('article4').removeClass('blind')
        return false
    })
})(jquery)