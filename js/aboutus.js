 


//屏幕变小后修改图片
function resetPic(){
    if($(window).width()<1109){
        $('main .carousel-inner li').eq(0).children('img').attr('src','images/innovative-start-banner-app.jpg');
        $('main .carousel-inner li').eq(1).children('img').attr('src','images/future-start-banner-app.jpg');
        $('main .carousel-inner li').eq(2).children('img').attr('src','images/about-us-banner-app.jpg');
        $('main .carousel-inner li').eq(3).children('img').attr('src','images/about-us-banner-app-2.jpg');
        // $('main .carousel-inner li img').css('height','300px');
        console.log(99999999)
    }
}

$(window).resize(function(event) {
  if($(window).width()>1109) return;
  resetPic();
  // location.reload()
});

//下面的字幕轮播
function litSpan(){
    var timer;
    var num=-1;
    function msgRun(){
      timer = setInterval(function(){
        num=num+1;
        // $('#carousel-example-generic .bg .part').eq(num).addClass('current').siblings('').removeClass('current');
        $('main .detail .li').eq(num).addClass('current').siblings('').removeClass('current');
        if(num>3){
          num=-1;
         }
      },2000);
    }
   msgRun();
}
  

//重置轮播图时间
function setTime(){
    $('.carousel').carousel({
      interval: 2000
    })
}


//

$(function(){
    litSpan();
    setTime();
    resetPic();
})








