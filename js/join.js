(function ($) {

    $('*').css({
        outline: 'none'
    })


    $('#joinform').submit(function () { // submit 이벤트는 폼에서 발생함

        // 아이디 유효성 체크 : 글자수는 3~5, 특수문자제외
        var idtxt = $('#id_enter').val() // tsalt
        if (idtxt.length >= 4 && idtxt.length <= 16) {
            for (var i = 0; i < idtxt.length; i++) {
                var ch = idtxt.charAt(i);
                if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
                    // alert('아이디는 대소문자, 숫자만 가능합니다.')
                    $('#id').text('아이디는 대소문자, 숫자만 가능합니다.')
                    $('#id_enter').css({
                        border: '1px solid #f00'
                    })
                    $('#id_enter').focus()
                    $('#id_enter').select()
                    return false
                }
            }
        } else {
            alert('아이디는 3~5글자 범위입니다.')
            $('#id_enter').css({
                border: '1px solid #f00'
            })
            $('#id_enter').focus()
            $('#id_enter').select()
            return false
        }

        // id입력상자만 포커스 했을때 뒤에 "필수항목입니다." 문구 표시하기
        $('#id_enter').focus(function () {
            $(this).after('<strong>필수항목입니다.</strong>')
        }).blur(function () {
            $(this).next().remove()
        })

        var name = $('#name').val()
        var namech = /^[가-힣]+$/
        if (!(namech.test(name))) {
            alert('한글이 아닙니다.')
            $('#name').focus()
            $('#name').select()
            return false
        }


        // 이메일 유효성 체크
        var email = $('#email').val()
        var emailchk = /^[a-zA-Z0-9]+$/ // 특수문자 제외 
        if (!emailchk.test(email)) {
            alert('이메일 형식이 틀립니다.')
            $('#email').focus()
            $('#email').select()
            return false
        }


        //비밀번호 유효성 체크  : 첫글짜는 대소문자만,반드시 숫자와 특수문자를 1개이상 조합해서  10~12글자 범위

        var pass1 = $('#pasword_enter').val()
        var pass2 = $('#pasword_agin').val()
        var cheack1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
        //? : 처음부터 다시 조사하라
        //. : 은 임이의 모든 문자(숫자,특수문자,영문대소문자)
        //* : 0번이상 나올수있음
        // ^ : 대괄호 ([])  ^은 NOT 을 의미함
        if (pass1.length >= 10 && pass1.length <= 16) {
            if (!cheack1.test(pass1)) {
                alert('비밀번호 첫글자는 영문 대소문자만 허용하며, 반드시 숫자와 특수문자 1개 이상을 조합해주세요.')
                $('#pasword_enter').css({
                    border: '1px solid #f00'
                })
                $('#pasword_enter').focus()
                $('#pasword_enter').select()
                return false
            }
        } else {
            감사합니다
            alert('비밀번호 글자수는 10글자에서 ~16글자 범위입니다.')
            $('#pasword_enter').css({
                border: '1px solid #f00'
            })
            $('#pasword_enter').focus()
            $('#pasword_enter').select()
            return false
        }


        //비밀번호와 비밀번호 확인 일치여부 점검
        //비밀번호 확인란이 비어있으면 "비밀번호 확인을 입력해주세요"
        //일치하지 않으면 "비밀번호를 정확히 입력해 주세요 "경고창 띄우고,나머지는 다른 오류표시와 동일하게 할것
        if (pass2.length === 0) {
            alert('비밀번호 확인을 입력하지 않았습니다')
            $('#pasword_enter').css({
                border: '1px solid #f00'
            })
            $('#pasword_enter').focus()
            $('#pasword_enter').select()
            return false
        } else if (!(pass1 === pass2)) {
            alert("비밀번호를 정확히 입력해 주세요.")
            $('#pasword_agin').css({
                border: '1px solid #f00'
            })
            $('#pasword_agin').focus()
            $('#pasword_agin').select()
            return false
        }

        // 비밀번호 칸에 포커스했을때  #warning에 '비밀번호 첫글자는 영문 대소문자만 허용하며, 반드시 숫자와 특수문자 1개 이상을 조합해주세요..' 문구 표시
        $('#pasword_enter').focus(function () {
            $(this).next().text('비밀번호 첫글자는 영문 대소문자만 허용하며, 반드시 숫자와 특수문자 1개 이상을 조합해주세요..')
        }).blur(function () {
            $(this).next().text('')
        })

        //\d{1} = 숫자 1를 표현하는 의미 01\d{1} 1~9
        //휴대폰 번호 , 첫번째칸은 01(0~9),두번째 칸은 숫자 (3~4), 세번째 칸은 숫자 4개
        var tel1 = $('#sellp').val()
        var tel2 = $('#sellp02').val()
        var tel3 = $('#sellp03').val()
        if (/^01\d{1}$/.test(tel1)) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#sellp').focus()
            $('#sellp').select()
            return false
        } else if (!/^\d{3,4}$/.test(tel2)) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#sellp02').focus()
            $('#sellp02').select()
            return false
        } else if (!/^\d{4}$/.test(tel3)) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#sellp03').focus()
            $('#sellp03').select()
            return false
        }
        return false // 유효성 체크후에는 제거할 것
    })

    $('input').focus(function () {
        $(this).css({
            background: 'pink'
        })
    }).blur(function () {
        if ($(this).val().length === 0) {
            $(this).css({
                border: '1px solid #f00',
                background: ''
            })
        } else {
            $(this).css({
                border: '1px solid #ddd',
                background: ''
            })
        }
    })

    // 스킬에서 전부체크 체크 여부에 따라 나머지 체크박스들을 동일하게 제어하기
    //prop ('checked') : 체크여부 파악 값이 true , false  checked 이면 true, checked안돼있으면 false
    $('input:checkbox').on('click', function () {
        var bool = $(this).prop('checked')
        $('.skill > input:checkbox').prop('checked', bool)
    })

})(jQuery)