
// var count =0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }

//  interval = setInterval(timer,1000)
// setTimeout(function() {
//     clearInterval(interval)
    
// }, 5000);


// function timeout(){
//     console.log('min')
// }
// setTimeout(timeout,3000)
var centi = 0;
var  sec;
var min;

function timer(){
    centi++
    console.log(centi)
}

sec=setInterval(timer,1000);
setTimeout(function(){
    clearInterval(sec)
}, 5000);