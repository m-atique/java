var outerbox = document.getElementById("outerbox")
var innerbox = document.getElementById("innerbox")
var user_name = document.getElementById("user_name")
var user = document.getElementById("user")
var mcq = document.getElementById("mcq")
var quiz_no = document.getElementById("quiz_no")
var no_of_quiz =0;
var score = 0;



outerbox.style.display="block"
innerbox.style.display="none"
function show_innerbox(){
    outerbox.style.display="none"
    innerbox.style.display="block"
    user.innerHTML= user_name.value
    exam()

}
function show_outerbox(){
    innerbox.style.display="none"
    outerbox.style.display="block"

}

// ------------------------------------------------------------------questions

quiz=[
    {
        "qz" : "What is the Basic Unit of memory?",
        "ans" : "Bit",
        "options": ["Bytes","Bit","Mb","Gbs"],

    },
    {
        "qz" : "What is python",
        "ans" : "Computer language",
        "options": ["animal","Cpu_part", "devops","Computer laguage"],

    },
    
        
]
// ---------------------------------------------------------------------------------
function exam(){
    for(i=no_of_quiz;i<quiz.length;i++){
        var q= document.createElement("h4")
        q.setAttribute("class","quiz col-8")
        var q_text = document.createTextNode(quiz[i]["qz"])
        q.appendChild(q_text)
        mcq.appendChild(q)
      
        for(j=0;j<quiz[i]["options"].length;j++){
            var op = document.createElement("input")
            op.setAttribute("type","radio")
            op.setAttribute("name","option")
            op_labl = document.createElement("label")
            op_text = document.createTextNode(quiz[i]["options"][j])
            op_labl.setAttribute("class","ops col-6")
            op_labl.appendChild(op)
            op_labl.appendChild(op_text)
            mcq.appendChild(op_labl)

        }
        var nxt = document.createElement("button")
        nxt.setAttribute("class","outerbox_btn")
        nxt_text = document.createTextNode("Next")
        nxt.setAttribute("onclick","next_quiz()")
        nxt.appendChild(nxt_text)
        mcq.appendChild(nxt)

        no_of_quiz++
        quiz_no.innerHTML= no_of_quiz
        break
       
    }
   
}

function next_quiz(){
    if(no_of_quiz !== quiz.length){
        mcq.innerHTML=""
        exam() 
    }
    else{
        mcq.innerHTML=""
        var score = document.createElement("button")
        score.setAttribute("class","outerbox_btn")
        score_text = document.createTextNode("Score")
        score.setAttribute("onclick","score_quiz()")
        score.appendChild(score_text)
        mcq.appendChild(score)
        

    }
   
}    
