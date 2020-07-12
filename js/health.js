$(function(){
    var num=0;
    var timee;
    var n=0;
//轮播图
    function zou(){
        timee=setInterval(function(){
            num=num+1;
            if(num==6){
                n=0;
            }
            if(num>6)
            {
                num=0; 
                $('.spanbox ul').css('left', -520*num+'px'); 
                num=1;
            }
            $('.spanbox ul').animate({'left':-520*num+'px'});
        },1000);	
    }
    zou();

//鼠标放上图片
    $('.spanbox li').hover(function() {		
        clearInterval(timee);
    }, function() {
        zou();
    });
//鼠标放上左右键（绿色加深）
    $('.spanbox span').hover(function() {
        console.log($(this).index());
        $(this).css('background', 'rgba(0, 0, 0, 0.8)');
    }, function() {
        $(this).css('background', 'rgba(0, 0, 0, 0.5)');
    });

// 左按键
    $('.spanbox .left').click(function(event) {
        num=num-1;
        if(num<0)
        {
            num=6;
            $('.spanbox ul').css('left', -520*num+'px'); 
            num=5;
        }
        $('.spanbox ul').animate({'left':-520*num+'px'});

    });
//右按键
    $('.spanbox .right').click(function(event) {
        num=num+1;
        if(num==6){
            n=0;
        }
        if(num>6)
        {
            num=0; 
            $('.spanbox ul').css('left', -520*num+'px'); 
            num=1;
        }
        $('.spanbox ul').animate({'left':-520*num+'px'});
    });

//测试
    $('.spanbox span').click(function(event) {
        console.log(event.target)
        console.log($(this).index());

    });


})
console.log(444444)