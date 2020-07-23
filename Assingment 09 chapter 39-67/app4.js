// //__________________________________//   CHAPTER 49-52  \\___________________________________________\\                                     

// // ----TASK # 1------
function show_modal(e){
    var modal = document.getElementById("md_div")
    var img = document.getElementsByTagName("img")
    var big_img = document.getElementById("img_md")
  
            modal.classList.remove('modal_close')
            modal.classList.add('modal_open')
            big_img.src= e.src
  }
function close_modal(){
    var modal = document.getElementById("md_div")
    modal.classList.add('modal_close')
    modal.classList.remove('modal_open')
}
