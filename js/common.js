(function ($) {




    $('#containerBox').load('main.html')

    $('.depth1 li a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })

    $('.logo > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })


})(jQuery)