  //字幕轮播
  var timer;
      var num=-1;
      function msgRun(){
        timer = setInterval(function(){
          num=num+1;
          $('#carousel-example-generic .bg .part').eq(num).addClass('current').siblings('').removeClass('current');
          $('main .detail .li').eq(num).addClass('current').siblings('').removeClass('current');
          if(num>3){
            num=-1;
           }
        },6000);
      }
     msgRun();

 // //字幕轮播
 //  var timer;
 //      var num=-1;
 //      function msgRun(){
 //        timer = setInterval(function(){
 //          num=num+1;
 //          $('.part').eq(num).addClass('current').siblings('').removeClass('current');
 //          if(num>3){
 //            num=-1;
 //           }
 //        },6000);
 //      }
 //     msgRun();





