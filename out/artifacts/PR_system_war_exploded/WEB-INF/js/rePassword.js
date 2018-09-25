$(document).ready(function () {
    $("#resetBtn").click(function () {
        var id = $.trim($("#id").val());
        var username = $.trim($("#username").val());
        var oldPassword = $.trim($("#oldPassword").val());
        var newPassword = $.md5($.trim($("#newPassword").val()));
        var newPasswor1 = $.md5($.trim($("#newPassword1").val()));
        var reg = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){1,16}/;

        if(oldPassword==null||oldPassword===""){
            alert("請輸入舊密碼");
            $("#oldPassword").focus();
            return ;
        }
        if (newPassword==null||newPassword===""){
            alert("請輸入新密碼");
            $("#newPassword").focus();
            return;
        }
        if (newPasswor1==null||newPasswor1===""){
            alert("請再一次輸入密碼");
            $("#newPassword1").focus();
            return;
        }
        if(!reg.test($("#oldPassword").val())){
            alert("舊密碼格式不正確！密碼為4~16位,並且只能為字母和數字的組合");
            return false;
        }
        if (!reg.test($("#newPassword").val())){
            alert("新密碼格式不正確！密碼為4~16位,並且只能為字母和數字的組合");
            return false;
        }
        if (newPassword!=newPasswor1){
            alert("兩次輸入密碼不一致");
        }
        $.ajax({
            type:"post",
            url:"",
            async:true,
            data:{
                "id":id,
                "username":username,
                "password":newPassword
            },
            dataType:"json",
            success:function (data) {

            }
        })
    })

});