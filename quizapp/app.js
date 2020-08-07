var home = document.getElementById("home")
var adm_div = document.getElementById("adm_div")
var user_div = document.getElementById("user_div")
var paper_div = document.getElementById("paper_div")
var tak_quiz = document.getElementById("tak_quiz")
var exm = document.getElementById("exm")
var adm = document.getElementById("adm")
var home = document.getElementById("home")
var pwd = document.getElementById("pwd")
var user = document.getElementById("user")
var user_name = document.getElementById("user_name")
var sb = document.getElementById("sb_btn")
var sqz = document.getElementById("sqz_btn")

    show_home()


// -----------------------------------------------------------------------------------show inputs on button clicks
function show_user(){
   home.style.display = "none"
   user_div.style.display= "block"
   adm_div.style.display= "none"
   paper_div.style.display= "none"
    tak_quiz.style.display= "none"
   
}

function show_adm(){
    home.style.display = "none"
    user_div.style.display= "none"
    adm_div.style.display= "block"
    paper_div.style.display= "none"
    tak_quiz.style.display= "none"
}

function show_home(){
    home.style.display = "block"
    user_div.style.display= "none"
    adm_div.style.display= "none"
    paper_div.style.display= "none"
    tak_quiz.style.display= "none"
    
}
function add_quiz(){
    home.style.display = "none"
    user_div.style.display= "none"
    adm_div.style.display= "none"
    paper_div.style.display= "block"
    tak_quiz.style.display= "none"
    

}
function start_quiz(){
    home.style.display = "none"
    user_div.style.display= "none"
    adm_div.style.display= "none"
    paper_div.style.display= "none"
    tak_quiz.style.display= "block"

}

// ---------------------------------------------------------------------------------------functionality to add qiz
var no_of_quiz = 0;
var q = document.getElementById("quiz")
var a = document.getElementById("ans1")
var b = document.getElementById("ans2")
var c = document.getElementById("ans3")
var d = document.getElementById("ans4")
var ans = document.getElementById("correct")



function reset(){
    
    q.value ="";
    a.value ="";
    b.value ="";
    c.value ="";
    d.value ="";
    ans.value =""; 
    }
// function addquiz(){    
    // var quizmodal = document.createElement("div")
    // quizmodal.setAttribute("class","col-md-6 col-sm-6 col-lg-6 col-6 bg-warning mb-5")

    // var qz= document.createElement("h4")
    // var hd = document.createTextNode(q.value)
    // qz.appendChild(hd)
    // quizmodal.appendChild(qz)
    // exm.appendChild(quizmodal)

    // var op1 = document.createElement("input")
    // op1.setAttribute("type","radio")
    // op1.setAttribute("name","ans")
    // op1.setAttribute("class","answers")
    // var op1_text =document.createTextNode(a.value)
    // op1.appendChild(op1_text)
    // quizmodal.appendChild(op1)

    // var op2 = document.createElement("input")
    // op2.setAttribute("type","radio")
    // op2.setAttribute("name","ans")
    // op2.setAttribute("class","answers")
    // var op2_text =document.createTextNode(b.value)
    // op2.appendChild(op2_text)
    // quizmodal.appendChild(op2)

    // var op3 = document.createElement("input")
    // op3.setAttribute("type","radio")
    // op3.setAttribute("name","ans")
    // op1.setAttribute("class","answers")
    // var op3_text =document.createTextNode(c.value)
    // op3.appendChild(op3_text)
    // quizmodal.appendChild(op3)

    // var op4 = document.createElement("input")
    // op4.setAttribute("type","radio")
    // op4.setAttribute("name","ans")
    // op4.setAttribute("class","answers")
    // var op4_text =document.createTextNode(d.value)
    // op4.appendChild(op4_text)
    // quizmodal.appendChild(op4)

    // no_of_quiz++
    // quizmodal.setAttribute("id",no_of_quiz)
    // tak_quiz.style.display="block"
   
// }

function addquiz(quiz ,right,op1,op2,op3,op4){
    questions={}
    options = []
    quiz = q.value
    right= ans.value
    op1= a.value
    op2= b.value
    op3= c.value
    op4= d.value
    questions["qiuz"]=quiz
    questions["answer"] = right
    questions["options"] = options
    options[1] =op1
    options[2] =op2
    options[3] =op3
    options[4] =op4
    return questions

}

function add_quizdiv(){
    var quizmodal = document.createElement("div")
    quizmodal.setAttribute("class","col-md-6 col-sm-6 col-lg-6 col-6 bg-warning mb-5")
    var qz= document.createElement("h4")

}


