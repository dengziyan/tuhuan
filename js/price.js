 
    $(".circleChart#c0").circleChart({
        size: 200,
        value: 5000,
        text: 0,
        onDraw: function(el, circle) {
            circle.text('-'+Math.round(circle.value));
        }
    });
     $(".circleChart#c1").circleChart({
        size: 200,
        value: 400,
        text: 0,
        onDraw: function(el, circle) {
            circle.text('-'+Math.round(circle.value));
        }
    });
      $(".circleChart#c2").circleChart({
        size: 200,
        value: 90,
        text: 0,
        onDraw: function(el, circle) {
            circle.text('-'+Math.round(circle.value));
        }
    });
       $(".circleChart#c3").circleChart({
        size: 200,
        value: 50,
        text: 0,
        onDraw: function(el, circle) {
            circle.text('-'+Math.round(circle.value));
        }
    });
    setInterval(function() {
        $(".circleChart").circleChart({
            value: Math.random() * 100
        });
    }, 4000);
      setInterval(function() {
        $(".circleChart#c2").circleChart({
            value: Math.random() * 100
        });
    }, 6000);
    setInterval(function() {
        $(".circleChart#c1").circleChart({
            value: Math.random() * 100
        });
    }, 5000);