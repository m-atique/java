//  function to show numbers in user_input screen

function getnumber(num){
   var show_input = document.getElementById("show_input");
   show_input.value += num 
}
//------------------------------------------------------------
// function to clear  user input screen

function getclear(num){
    var show_input = document.getElementById("show_input");
    show_input.value = "" 
    show_result.value ="";
 }

 //-----------------------------------------------------------
//  function to get result on result screen

function getresult(){
    var show_result = document.getElementById("show_result");
    
    show_result.value = eval(show_input.value)

    var show_history = document.getElementById("show_history");
    show_history.value += show_input.value + " = " + show_result.value + "\n"
    
 }

 //-----------------------------------------------------------
//  //  function to get result on result screen

// function gethistory(){
//     var show_history = document.getElementById("show_history");
//     show_history.value = show_input.value + " = " + show_result.value
//  }

 //-----------------------------------------------------------