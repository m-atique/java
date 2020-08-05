// //__________________________________//   CHAPTER 49-52  \\___________________________________________\\                                     

// // ----TASK # 1------
document.write("<br>"+"<h2>"+"TASK 01  (i)"+"</h2>"+"<br>")
document.write("please check out app5.js ")
var main_cnt=document.getElementById("main_content")            //------------(i)

document.write("<br>"+"<h2>"+"TASK 01  (ii)"+"</h2>"+"<br>")
document.write("pleasae check consol")                               //------------(ii)
console.log(main_cnt.childNodes)

var render_html = main_cnt.getElementsByClassName("render")   //-------------(iii)
document.write("<br>"+"<h2>"+"TASK 01  (iii)"+"</h2>"+"<br>")
for(i=0;i<render_html.length;i++){
    document.write(render_html[i].innerHTML + "<br>")
}

document.write("<br>"+"<h2>"+"TASK 01  (iv - v)"+"</h2>")
document.write("please check out app5.js ")
var form_cnt = document.getElementById("form_content")        //-------------(iv)
var update_value = "waqar"
form_cnt.childNodes[3].value = update_value 


form_cnt.childNodes[7].value ="satti"                       //-------------(v)
form_cnt.childNodes[11].value ="Waqarsatti@gmail.com"


// // ----TASK # 2------
document.write("<br>"+"<h2>"+"TASK 02  (i)"+"</h2>")                 //------------(i)
document.write("Node type of content having id form_content is  " + form_cnt.nodeType)

document.write("<br>"+"<h2>"+"TASK 02  (ii)"+"</h2>")                 //------------(ii)
document.write("Node type of content having id lastName is  " + main_cnt.childNodes[2].nodeType +"<br>")
document.write("Node type of child of  lastName is  " + main_cnt.childNodes[2].firstChild.nodeType)

document.write("<br>"+"<h2>"+"TASK 02  (iii)"+"</h2>")  
document.write("<br>"+"The value before update is "+ main_cnt.childNodes[2].firstChild.nodeValue)   //------------(iii)
main_cnt.childNodes[2].firstChild.nodeValue =  "Last Name: The Rock"
document.write("<br>"+"The value after update is "+ main_cnt.childNodes[2].firstChild.nodeValue) 


document.write("<br>"+"<h2>"+"TASK 02  (iv)"+"</h2>")                  //-------------(iv)
document.write("pleasae check consol")    
console.log("Firstchild  of id main_content is:")
console.log(main_cnt.firstChild)
console.log("lastchild  of id main_content is:")
console.log(main_cnt.lastChild)
document.write("please check console")


document.write("<br>"+"<h2>"+"TASK 02  (v)"+"</h2>")                  //-------------(v)
document.write("pleasae check consol")    
console.log("previousSibling of id LastName is:")
console.log(main_cnt.childNodes[2].previousSibling)
console.log("nextSibling of id LastName is:")
console.log(main_cnt.childNodes[2].nextSibling)

document.write("<br>"+"<h2>"+"TASK 02  (vi)"+"</h2>")                  //-------------(vi)
document.write("pleasae check consol")    
var email_node = document.getElementById("email")
console.log("parent of id email is:")
console.log(email_node.parentNode)
console.log("nodetype of of id email is is:")
console.log(email_node.nodeType)



















