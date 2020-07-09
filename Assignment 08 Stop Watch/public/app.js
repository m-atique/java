var min = 0;
var sec = 0;
var centi = 0;
var min_val = document.getElementById("min");
var sec_val = document.getElementById("sec");
var centi_val = document.getElementById("centi");
var strt_btn = document.getElementById("st")
var interval;

function timer(){
    
    centi++;
    centi_val.innerHTML = centi;
    if (centi >= 100){
        sec++
        sec_val.innerHTML = sec;
        centi = 0;
        if(sec >= 60){
            min++;
            min_val.innerHTML = min;
            sec = 0;
        }

    }
    
    }


function start(){
    
    strt_btn.disabled = true;
    interval = setInterval(timer,10)

}
function stop(){
    clearInterval(interval)
    strt_btn.disabled = false;
}
function reset(){
    stop();
    centi_val.innerHTML = 0;
    sec_val.innerHTML = 0;
    min_val.innerHTML = 0;
    
}
