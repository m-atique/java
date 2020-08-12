var task = document.getElementById("task_input");
var task_panal = document.getElementById("panal");
var todo_div = ""
function add_todo(){
    todo_div=document.createElement("div");
    
    todo_div.setAttribute("class","tododiv text-left pl-1 pr-0 mt-2 col-11 col-lg-11 col-sm-11 col-md-11")
    var todo = document.createElement("input");
    
    todo.setAttribute("type","text")    
    todo.setAttribute("class"," col-9 col-lg-9 col-md-9 col-sm-9 pl-2 mr-3 todo ")
    todo.setAttribute("value",task.value)
    todo_div.appendChild(todo)
    todo.disabled= true
    todo.setAttribute("onblur","disable_todo(this)")
    edit_btn()
    task_panal.appendChild(todo_div)
    delete_btn()
    
    task.value =""
}
function edit_btn(){
    var edit = document.createElement("button")
    edit.setAttribute("class","panal_btn col-1 col-sm-1 col-md-1 col-md-1 col-1")
    edit.setAttribute("onclick","edit_task(this)")
    edit.innerHTML='<i class="fa fa-pencil"></i>';
    // edit.appendChild(edit_txt)
    todo_div.appendChild(edit)
}
function delete_btn(){
    var del = document.createElement("button")
    del.setAttribute("class","panal_btn col-1")
    del.setAttribute("onclick","del_task(this)")
    del.innerHTML='<i class="fa fa-trash"></i>'
    todo_div.appendChild(del)
}
// ------------------------------------------------- delete todo_div
function del_task(e){
    e.parentNode.remove()
}
// -------------------------------------------------edit task
function edit_task(e){
e.parentNode.children[0].disabled = false
e.parentNode.children[0].focus()
}
function disable_todo(e){
e.disabled=true;
}
