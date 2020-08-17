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