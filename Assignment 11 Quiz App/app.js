var generate = document.getElementById("paper")
var exm = document.getElementById("exam")
var start= document.getElementById("ins")
var nxt = document.getElementById("nxt_btn")

var q= document.getElementById("quiz")
var a = document.getElementById("ans1")
var b = document.getElementById("ans2")
var c = document.getElementById("ans3")
var d = document.getElementById("ans4")
var z = document.getElementById("correct")


var no_of_quiz = 0;
var slide =[]



function generate_quiz(){
    exm.style.display = "none"
    generate.style.display = "block"
    
}
function take_quiz(){
    console.log(slide)
    generate.style.display = "none"
    exm.style.display = "block"
    nxt.style.display = "none"
    start.style.display = "block"
    for(i=0;i<slide.length;i++){
        slide[i].sty.display="none"
    }
    
   
}


    
function reset(){
    
    q.value ="";
    a.value ="";
    b.value ="";
    c.value ="";
    d.value ="";
    z.value =""; 
    }
function addquiz(){    
    var quizmodal = document.createElement("div")
    quizmodal.setAttribute("class","col-md-6 col-sm-6 col-lg-6 col-6 bg-warning mb-5")

    var qz= document.createElement("h4")
    var hd = document.createTextNode(q.value)
    qz.appendChild(hd)
    quizmodal.appendChild(qz)
    exm.appendChild(quizmodal)

    var op1 = document.createElement("input")
    op1.setAttribute("type","radio")
    op1.setAttribute("name","ans")
    op1.setAttribute("class","answers")
    var op1_text =document.createTextNode(a.value)
    op1.appendChild(op1_text)
    quizmodal.appendChild(op1)

    var op2 = document.createElement("input")
    op2.setAttribute("type","radio")
    op2.setAttribute("name","ans")
    op2.setAttribute("class","answers")
    var op2_text =document.createTextNode(b.value)
    op2.appendChild(op2_text)
    quizmodal.appendChild(op2)

    var op3 = document.createElement("input")
    op3.setAttribute("type","radio")
    op3.setAttribute("name","ans")
    op1.setAttribute("class","answers")
    var op3_text =document.createTextNode(c.value)
    op3.appendChild(op3_text)
    quizmodal.appendChild(op3)

    var op4 = document.createElement("input")
    op4.setAttribute("type","radio")
    op4.setAttribute("name","ans")
    op4.setAttribute("class","answers")
    var op4_text =document.createTextNode(d.value)
    op4.appendChild(op4_text)
    quizmodal.appendChild(op4)

    no_of_quiz++
    quizmodal.setAttribute("id",no_of_quiz)
    var quiz = document.getElementById(no_of_quiz)
    slide += quiz
    console.log(slide)

    
}
function start_quiz(){
    start.style.display = "none"
    nxt.style.display = "block"
   // slide.style.display ="block"
    
    // for (i=1;i<=no_of_quiz;i++){
    //     if(i>1){
    //         var hiden_slides = document.getElementById(i)
    //         hiden_slides.style.display= "none"

    //     }
    // }

    
}



// function next_quiz(){ 
//     for (i=1;i<=no_of_quiz;i++){
        
//             var hiden_slides = document.getElementById(i)
//             hiden_slides.style.display= "none"

//         }
//     }




//     slide.style.display ="none"


//     var nxt_slide = document.getElementById(no_of_quiz+1)
//     console.log(nxt_slide)
//     nxt_slide.style.display ="block"

//  }


