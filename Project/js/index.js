var num1 = document.getElementById("count1");
var num2 = document.getElementById("count2");
var num3 = document.getElementById("count3");
var num4 = document.getElementById("count4");


function animatedCounter(element,start,end,duration) {
    var range = end - start;
    var current = start;
    var increment = 0;
    if (end>start) {
        increment = 1;
    }
    else{
        increment = -1;
    }

    var timer = setInterval(function (){
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, duration);
}

animatedCounter(num1,1,232,30);
animatedCounter(num2,1,521,50);
animatedCounter(num3,1,1463,100);
animatedCounter(num4,1,15,150);