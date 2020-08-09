var outerbox = document.getElementById("outerbox")
var innerbox = document.getElementById("innerbox")
var user_name = document.getElementById("user_name")
var user = document.getElementById("user")
var mcq = document.getElementById("mcq")
var quiz_no = document.getElementById("quiz_no")
var no_of_quiz =0;
var user_ans =""
var score = 0;



outerbox.style.display="block"
innerbox.style.display="none"
function show_innerbox(){
    no_of_quiz=0
    score =0
    outerbox.style.display="none"
    innerbox.style.display="block"
    user.innerHTML= user_name.value.toUpperCase()

    exam()

}
function show_outerbox(){
    innerbox.style.display="none"
    outerbox.style.display="block"
    mcq.innerHTML=""

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
        "options": ["animal","Cpu_part", "devops","Computer language"],

    },
    
    {
        "qz" : "Bootstrap is aliberary of",
        "ans" : "Css",
        "options": ["Css","Jscript", "c#","pyhthon language"],

    },
    {
        "qz" : "x++ means",
        "ans" : "x+1",
        "options": ["x-1","x=0", "x+1","None"],

    },
    {
        "qz" : "This course is",
        "ans" : "Easy",
        "options": ["Hard","Easy", "Normal","Above all"],

    },
    
    
        
]
// ---------------------------------------------------------------------------------
function exam(){
    for(i=no_of_quiz;i<quiz.length;i++){
        var q= document.createElement("h4")
        q.setAttribute("class","quiz col-12 ")
        var q_text = document.createTextNode(quiz[i]["qz"])
        q.appendChild(q_text)
        mcq.appendChild(q)
      
        for(j=0;j<quiz[i]["options"].length;j++){
            var op = document.createElement("input")
            op.setAttribute("type","radio")
            op.setAttribute("name","option")
            op_labl = document.createElement("label")
            op_text = document.createTextNode(quiz[i]["options"][j])
            op_labl.setAttribute("class","ops  col-md-8")
            op_labl.setAttribute("onclick","get_score(this)")
            op_labl.appendChild(op)
            op_labl.appendChild(op_text)
            mcq.appendChild(op_labl)

        }
        var nxt = document.createElement("button")
        nxt.setAttribute("class","outerbox_btn col-4")
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
    result()
    if(no_of_quiz !== quiz.length){
        mcq.innerHTML=""
        exam() 
       
        
    }
    else{
        mcq.innerHTML=""
        var score = document.createElement("button")
        score.setAttribute("class","outerbox_btn col-12 text-center")
        score_text = document.createTextNode("Rsult")
        score.setAttribute("onclick","final_result()")
        score.appendChild(score_text)
        mcq.appendChild(score)
        

    }
   
}    

function get_score(e){
    user_ans = ""
    user_ans = e.childNodes[1].nodeValue
}

function result(){
     if(user_ans === quiz[quiz_no.innerText-1]["ans"]){
         score += 10
     } 
}

function final_result(){
    mcq.innerHTML =""
   
    var msg= document.createElement("h1")

    var msg_text = document.createTextNode(user.innerHTML+ " Your Score is "+score+"/"+no_of_quiz*10)
    msg.setAttribute("class","text-light col-12 text-center")
    msg.appendChild(msg_text)
    mcq.appendChild(msg)
    user.innerHTML=""
    quiz_no.innerHTML =""
}

