$(function() {
  $(".Code span").click(function () {
    // var val = $(".phone input").val();
    // if(val === "") {
    //   alert("账号不能为空");
    //   return ;
    // }

    var count = 60;
    //jquery要用setInterval()定时器，因为这里不会调用倒计时函数，要循环执行
    var interval = setInterval(() => {
      if (count <= 0) {
        //因为button是<input>元素，所以这里要用.val()方法
        $(".Code span").text("重新获取").css({ "pointer-events": "auto" });
        count = 60;
        //当倒计时结束，这里要清除定时器
        clearTimeout(interval);
      } else {
        $(".Code span").text(count + "s后重新获取").css({ "pointer-events":"none"});
        count--;
      }
    }, 1000);
  })
});
