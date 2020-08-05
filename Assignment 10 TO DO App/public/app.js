var list = document.getElementById("list")

function addtask(){
    // var modal =  document.getElementById("input_modal")
    // modal.style.display = "none"
    var todo = document.getElementById("todo_task")
    var list_item = document.createElement('li')
    list_item.style.listStyle ="none";
    list_item.style.marginBottom= "8px"
    list_item.setAttribute("class","task_li")
    var list_item_text = document.createTextNode(todo.value)
    if(list_item_text.innerHTML !==""){
    list_item.appendChild(delete_btn())                        // insert delete by calling function delete_btn
    list_item.appendChild(edit_btn())                           // insert edit by calling function edit_btn
    list_item.appendChild(list_item_text)
    
    list.appendChild(list_item)
    todo.value=""
//--------------------------------------------- task periorty
    var p = document.getElementsByName("prefer")
    if(p[0].checked){
        list_item.style.borderLeft="2px solid red";
    }
    if(p[1].checked){
        list_item.style.borderLeft="2px solid green";
    }
    if(p[2].checked){
        list_item.style.borderLeft="2px solid yellow";
    }  
  }
}

//---------------------------------------------create dlete button
function delete_btn(){
    var del_btn = document.createElement("button")
    var btn_heading =document.createTextNode("Del")
    del_btn.appendChild(btn_heading)
    del_btn.setAttribute("id","del_btn")
    del_btn.setAttribute("class","li_btn")
    del_btn.setAttribute("onclick","delte_task(this)")
    return del_btn
}

//---------------------------------------------create edit button
function edit_btn(){
    var e_btn = document.createElement("button")
    var e_heading =document.createTextNode("Edit")
    e_btn.appendChild(e_heading)
    e_btn.setAttribute("id","e_btn")
    e_btn.setAttribute("class","li_btn")
    e_btn.setAttribute("onclick","update_task(this)")
    return e_btn
}
//---------------------------------------------delte task
function delte_task(e){
    e.parentNode.remove()
}
//---------------------------------------------delte task
function del_all(){
    list.innerHTML =""

}
//---------------------------------------------update task
function update_task(e){
    var val = e.parentNode.firstChild.nodeValue
    var e_task = prompt("Edit Task",val)
    e.parentNode.firstChild.nodeValue = e_task
}
//--------------------------------------------- get periorty
function get_priority(prefer){
    var choice = prefer
    
    return choice
   
}

function show_modal(){
    var modal =  document.getElementById("input_modal")
    modal.style.display = "block"
}

