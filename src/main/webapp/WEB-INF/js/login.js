$(document).ready(function () {
    $("#loginBtn").click(function () {
        submit();
    })
    $("body").keydown(function () {
        if (event.keyCode=="13"){
            $('#loginBtn').click();
        }
    })
});

function submit() {
    var username = $.trim($("#username").val());
    var password = $.md5($.trim($("#password").val()));
    var region  =   $.trim($("#region").val());
    var reg = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){4,16}/;

    if (username==null||username===""){
        alert("賬號不能為空");
        $("#username").focus();
        return;
    }
    if ($('#password').val()==null||$('#password').val()==="") {
        alert("密碼不能為空");
        $("#password").focus();
        return false;
    }
    if (!reg.test($("#password").val())){
        alert("密碼格式不正確！密碼為4~16位,並且只能為字母和數字的組合");
        $("#password").focus();
        return false;
    }
    if (region==null||region===""){
        alert("請選擇所在地區");
        return;
    }
    $.ajax({
        type:"post",
        url:"/identify",
        async:true,
        data: {
            "username": username,
            "password": password,
            "region": region
        },
        dataType:"json",
        success:function (data) {
            if (data.status==="success") {
                window.location.href = "/index"
            }else{
                alert(data.info)
                history.back();
            }
        },
        error:function (data) {
            alert("错误");
        }
    })
}
