// $(function() {
// 	$(".grid-col1 li").mouseenter(function() {
// 	// $(this).css("background-color","red");
// 	var index = $(this).index();

// 	var a = $(this).parents('.grid-col1').find('.grid-contents > div').eq(index).html();
// 	console.log(a)
// })
// $(".grid-col1 li").mouseleave(function() {
// 	$(this).css("background-color","#6e6568");
// })
// });
//轮播图鼠标切换

$(function(){
	var arr = ["banner.jpg","banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
	var len = $(".circle li").length;
	var indexs = 1;
	initData(null);
	var val;
	function initData(x){
		if (x != null) {
			indexs = x;
		}
		console.log("indexs1:"+indexs)
		val = setInterval(function(){//定时器
			loadImg();
		},3000);
	}

	 $(".circle li,.grid-col2-t img").hover(//鼠标移入
          function(){
          	clearInterval(val);
            
            $(this).addClass("current").siblings().removeClass("current");

            var index = $(this).index();
			$(this).parent().siblings().children().attr({src: "images/" + arr[index]});
			
          },
          function(){//鼠标移出
          	var index = $(this).index();          	
          	var ind = index + 1;
          	initData(ind);

          	
          }
     );

	

	function loadImg(){
		
		if (indexs >= len) {
			indexs = 0;
		}
		// console.log("indexs3:"+indexs)
		$(".circle li").eq(indexs).addClass("current").siblings().removeClass("current");//改变小圆点背景颜色
		$(".circle li").eq(indexs).parent().siblings().children().attr({src: "images/" + arr[indexs]});//改变图片地址
		
		indexs++;
	}

	var index = 0;
	$(".grid-col2-t .arrow-l,.grid-col2-t .arrow-r").click(function(){
		var ls = $(".circle li");
		
		clearInterval(val);

		for(var i = 0; i < ls.length; i++){
			if($(ls[i]).hasClass("current")){
				if($(this).hasClass("arrow-r")){
					if ($(ls[i]).index() == ls.length - 1) {
						index = 0;
					} else {
						index = $(ls[i]).index() + 1;
					}
				} else {
					if($(ls[i]).index() == 0){
						index = ls.length -1;
					} else {
					index = $(ls[i]).index() - 1;
					}
				}
				$(".circle li").eq(index).addClass("current").siblings().removeClass("current");//改变小圆点背景颜色
				$(".circle li").eq(index).parent().siblings().children().attr({src: "images/" + arr[i]});//改变图片地址
				break;
			}
		}
	
	})		
	
	
//轮播图鼠标切换结束				

	
})			
	