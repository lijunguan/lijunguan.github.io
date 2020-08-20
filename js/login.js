$(function(){
    $(".login_body_top li").eq(0).on("click",function(){
        // $(".login_body_account").removeClass("appear").addClass("ati");
        // $(".bogin_body_b").addClass("appear"); 
       $(".login_body_account").css({ display: "none" });
       $(".bogin_body_b").css({display: "block"});
        
    })

    $(".login_body_top li").eq(1).on("click", function () {
        // $(".bogin_body_b").removeClass("appear").addClass("ati");
        // $(".login_body_account").addClass("appear");
       $(".login_body_account").css({ display: "block" });
       $(".bogin_body_b").css({ display: "none" });
    })
})


// 登录验证模块
// 账号验证

$(function () {
    $(".btn input").click(function () {
        var value = $(".Login_interface_t .account").val();
        var pass = $(".Login_interface_w .password").val();
        // 判断手机号
        var phone = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        // 判断邮箱
        var mail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (phone.test(value) === true || mail.test(value) === true) {
             alert("验证成功");
            window.location.href = "http://localhost:52330/ ";

        } else {
            alert("请输入正确的账号密码");
        }


    })
    
});