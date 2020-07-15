$(function(){
    spanner();
    mobSpan();
    resetPic();
})


//大轮播（屏幕变小后修改图片）
function resetPic(){
    if($(window).width()<1109){
        $('main .carousel-inner li').eq(0).children('img').attr('src','../images/innovative-start-banner-app.jpg');
        $('main .carousel-inner li').eq(1).children('img').attr('src','../images/future-start-banner-app.jpg');
        $('main .carousel-inner li').eq(2).children('img').attr('src','../images/about-us-banner-app.jpg');
        $('main .carousel-inner li').eq(3).children('img').attr('src','../images/about-us-banner-app-2.jpg');
        // $('main .carousel-inner li img').css('height','300px');
        console.log(99999999)
    }
}

//当页面变化刷新
$(window).resize(function(event) {
  if($(window).width()>1109) return;
  resetPic();
  // location.reload()
});

//5图轮播
function spanner(){
        var num=0;
            var timee;
            var n=0;
        //轮播图
            function zou(){
                // console.log($(window).width());
                timee=setInterval(function(){
                    if($(window).width()>992){
                        num=num+1;
                        if(num>5)
                        {
                            num=0; 
                            $('.spanbox ul').css('left', -20*num+'%'); 
                            num=1;
                        }
                        $('.spanbox ul').animate({'left':-20*num+'%'});
                        $('.spanbox ul li').eq(num+2).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                        $('.spanbox ul .describe').eq(num+2).addClass('current');
                        $('.spanbox ul li').eq(num+2).siblings('').children('.describe').removeClass('current');
                    }else if($(window).width()>768){
                        num=num+1;
                        if(num>5)
                        {
                            num=0; 
                            $('.spanbox ul').css('left', -36*num+'%'); 
                            num=1;
                        }
                        $('.spanbox ul').animate({'left':-36*num+'%'});
                        $('.spanbox ul li').eq(num+1).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                        $('.spanbox ul .describe').eq(num+1).addClass('current');
                        $('.spanbox ul li').eq(num+1).siblings('').children('.describe').removeClass('current');
                    }else{
                        num=num+1;
                        if(num>5)
                        {
                            num=0; 
                            $('.spanbox ul').css('left', -100*num+'%'); 
                            num=1;
                        }
                        $('.spanbox ul').animate({'left':-100*num+'%'});
                        $('.spanbox ul li').eq(num).css('transform','scale(1)').siblings('').css('transform','scale(1)');
                        $('.spanbox ul .describe').eq(num).addClass('current');
                        $('.spanbox ul li').eq(num).siblings('').children('.describe').removeClass('current');
                        }
                },2000);    
            }
            zou();

        //3种屏幕下的左右按键
            if($(window).width()>992){
                // 左按键
                $('.spanbox .left').click(function(event) {
                    num=num-1;
                    if(num<0)
                    {
                        num=6;
                        $('.spanbox ul').css('left', -20*num+'%'); 
                        num=5;
                    }     
                    $('.spanbox ul').animate({'left':-20*num+'%'});
                    $('.spanbox ul li').eq(num+2).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num+2).addClass('current');
                    $('.spanbox ul li').eq(num+2).siblings('').children('.describe').removeClass('current');
                });
                //右按键
                $('.spanbox .right').click(function(event) {
                    num=num+1;
                   if(num>5)
                    {
                        num=0; 
                        $('.spanbox ul').css('left', -20*num+'%'); 
                        num=1;
                    }       
                    $('.spanbox ul').animate({'left':-20*num+'%'});
                    $('.spanbox ul li').eq(num+2).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num+2).addClass('current');
                    $('.spanbox ul li').eq(num+2).siblings('').children('.describe').removeClass('current');
                });
            }else if($(window).width()>768){
                // 左按键
                $('.spanbox .left').click(function(event) {
                    num=num-1;
                    if(num<0)
                    {
                        num=6;
                        $('.spanbox ul').css('left', -36*num+'%'); 
                        num=5;
                    }     
                    $('.spanbox ul').animate({'left':-36*num+'%'});
                    $('.spanbox ul li').eq(num+1).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num+1).addClass('current');
                    $('.spanbox ul li').eq(num+1).siblings('').children('.describe').removeClass('current');
                });
                //右按键
                $('.spanbox .right').click(function(event) {
                    num=num+1;
                   if(num>5)
                    {
                        num=0; 
                        $('.spanbox ul').css('left', -36*num+'%'); 
                        num=1;
                    }       
                    $('.spanbox ul').animate({'left':-36*num+'%'});
                    $('.spanbox ul li').eq(num+1).css('transform','scale(1.2)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num+1).addClass('current');
                    $('.spanbox ul li').eq(num+1).siblings('').children('.describe').removeClass('current');
                });
            }else{
                 // 左按键
                $('.spanbox .left').click(function(event) {
                    num=num-1;
                    if(num<0)
                    {
                        num=6;
                        $('.spanbox ul').css('left', -36*num+'%'); 
                        num=5;
                    }     
                    $('.spanbox ul').animate({'left':-100*num+'%'});
                    $('.spanbox ul li').eq(num).css('transform','scale(1)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num).addClass('current');
                    $('.spanbox ul li').eq(num).siblings('').children('.describe').removeClass('current');
                });
                //右按键
                $('.spanbox .right').click(function(event) {
                    num=num+1;
                   if(num>5)
                    {
                        num=0; 
                        $('.spanbox ul').css('left', -36*num+'%'); 
                        num=1;
                    }       
                    $('.spanbox ul').animate({'left':-100*num+'%'});
                    $('.spanbox ul li').eq(num).css('transform','scale(1)').siblings('').css('transform','scale(1)');
                    $('.spanbox ul .describe').eq(num).addClass('current');
                    $('.spanbox ul li').eq(num).siblings('').children('.describe').removeClass('current');
                });
            }

        //鼠标放上图片
            $('.spanner').hover(function() {        
                clearInterval(timee);
            }, function() {
                zou();
            });
        //鼠标放上左右键（绿色加深）
            $('.spanbox span').hover(function() {
                console.log($(this).index());
                $(this).css('background', 'rgba(0, 0, 0)');
            }, function() {
                $(this).css('background', 'rgba(0, 0, 0)');
            });

}

//手机轮播
function mobSpan(){
        var timer;
        var num=0;
        function gogo(){
            clearInterval(timer)
            timer=setInterval(function(){
                num++;
                if(num==5){
                    num=0;
                }
                //显示字幕
                $('.mobSpan .txtBox li').eq(num).addClass('current').siblings().removeClass('current'); 
                $('.mobSpan .icon li').eq(num).css('backgroundColor','rgba(59,190,122,.9)').siblings().css('backgroundColor',''); 
                $('.mobSpan .moblie img').eq(num).css({'opacity':1,'transition':'1s'}).siblings().css('opacity',0);
                        
            },2000)
        }
        gogo();
        // 点击索引
        $('.mobSpan .icon li').click(function(event) {
            num=$(this).index();
            // $(this).addClass('current');
            // $(this).siblings().removeClass('current');
            $('.mobSpan .txtBox li').eq(num).addClass('current').siblings().removeClass('current'); 
            $('.mobSpan .icon li').eq(num).css('backgroundColor','rgba(59,190,122,.9)').siblings().css('backgroundColor',''); 
            $('.mobSpan .moblie img').eq(num).css({'opacity':1,'transition':'1s'}).siblings().css('opacity',0);
        });






         // 给div增加鼠标移入移出事件
        $('div').hover(function() {
            // 鼠标移入停止定时器
            clearInterval(timer)
        }, function() {
            // 鼠标移出开始定时器
            gogo();
        });

           //看前一张图片 
        $('#left').click(function(event) {
            num--;
            if(num<0){
                num=5;
            }
            $('ul').css('left', -num*520+'px');
            $('ol li').eq(num).addClass('current');
            $('ol li').eq(num).siblings().removeClass('current');
        });
        // 看后一张图片 
        $('#right').click(function(event) {
            num++;
            if(num>5){
                num=0;
            }
            $('ul').css('left', -num*520+'px');
            $('ol li').eq(num).addClass('current');
            $('ol li').eq(num).siblings().removeClass('current');
        });
}