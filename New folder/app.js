function show_hide(){
    var x = document.getElementById("openbtn");
    var btnpanal =document.getElementById("btnpanal")
  if (x.innerHTML === "OPEN") {
    x.innerHTML = " CLOSE";
    mtext.style.display = "none"; 
    cover.style.position = "relative"
    cover.style.top  = "200px"
    cover.style.margin-top  == "-100px"
    cover.style.margin-left == "-200px"

  } else {
    x.innerHTML = "OPEN"; 
    mtext.style.display = "block"
    cover.style.position = "relative"
    cover.style.top  = "0px"
    cover.style.margin-top  == "-100px"
    cover.style.margin-left == "-200px"
    history.style.display = "block"

 }

}
// function history_show()
// var h = document.getElementById("hbtn");
//   if (h.innerHTML === "HISTORY") {
//     x.innerHTML = " CLOSE";
//     cover.style.display = "none"; 
//   }else {
//     x.innerHTML = " CLOSE";
//     cover.style.display = "block"; 
//   }


//======================================================================
function getnumber(num){
   
    var inputnum = document.getElementById("inputnum")
    inputnum.value += num
}

function getclear(){
   
  var inputnum = document.getElementById("inputnum")
  inputnum.value = "";
}

function getresult(){
   var ans = document.getElementById("result")
    var calc = document.getElementById("inputnum")
    ans.value =eval(calc.value)
}

