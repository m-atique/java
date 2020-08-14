
Window.onload = get_data()
var task = document.getElementById("task_input");
var task_panal = document.getElementById("panal");
var todo_div = ""
var i = 0

function work(){
    var a = task.value;
    
    if(a != ""){
        i++
    
    var key = i;
    var wrk ={
        td:a
    }
    firebase.database().ref(i).set(wrk)
}
}


function add_todo(){
   
//--------------------------------- to add todo in firebase on clicking add buton
    work()
//--------------------------------  to show to do in innerbox2 on clicking add button
    show_todo()


}
//--------------------------------------  to show to do in innerbox2
function show_todo(){
    
     if(task.value != "")
    {
    todo_div=document.createElement("div");
    todo_div.setAttribute("class","tododiv text-left pl-1 pr-0 mt-2 col-11 col-lg-11 col-sm-11 col-md-11")
    
    var todo = document.createElement("input");
    todo.setAttribute("type","text")  
    todo.setAttribute("id",i)  
    todo.setAttribute("class"," col-8 col-lg-8 col-md-8 col-sm-8 pl-2  todo ")
    todo.setAttribute("value",task.value)
    todo_div.appendChild(todo)
    todo.disabled= true
    todo.setAttribute("onblur","disable_todo(this)")
    
    edit_btn()
    task_panal.appendChild(todo_div)
    delete_btn()
    
    task.value =""
    task.focus()
  }
 }
function edit_btn(){
    var edit = document.createElement("button")
    edit.setAttribute("class","panal_btn col-1 col-sm-1 col-md-1 col-md-1 col-1")
    edit.setAttribute("onclick","edit_task(this)")
    edit.innerHTML='<i class="fa fa-pencil"></i>';
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
    input_id =e.parentNode.children[0].id
    firebase.database().ref(input_id).remove()
    
}
// -------------------------------------------------edit task
function edit_task(e){
e.parentNode.children[0].disabled = false
e.parentNode.children[0].focus()


}

function disable_todo(e){
// if (e.keyCode === 13) {
// console.log(e.id)
input_id =e.id
input_value = e.value;
firebase.database().ref(input_id).set(input_value)
e.disabled=true;

}

function del_all(){
    task_panal.innerHTML="";

    firebase.database().ref().remove()    //----------delete all data from firbase
}

function get_data(){
    
    firebase.database().ref().once('value',function(data){
        var dt =data.val()

        for(var key in dt){
            i = key
            var td =dt[key]
            for(var t in td){
                      var tsk = td[t]

    todo_div=document.createElement("div");
    todo_div.setAttribute("class","tododiv text-left pl-1 pr-0 mt-2 col-11 col-lg-11 col-sm-11 col-md-11")
    
    var todo = document.createElement("input");
    todo.setAttribute("type","text")  
    todo.setAttribute("id",i)  
    todo.setAttribute("class"," col-9 col-lg-9 col-md-9 col-sm-9 pl-2 mr-3 todo ")
    todo.setAttribute("value",tsk)
    todo_div.appendChild(todo)
    todo.disabled= true
    todo.setAttribute("onblur","disable_todo(this)")
    
    edit_btn()
    task_panal.appendChild(todo_div)
    delete_btn()
    
                      
                  }
                  
        }
         
    })
}
console.log(firebase)
