(function ($) {




    $('#containerBox').load('main.html')

    $('.depth1 > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#containerBox').load(url)
    })


    $('.older_posts > form > button').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
    })


})(jQuery)