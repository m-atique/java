// var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit molestias asperiores accusantium quasi ipsa iusto minima, dolorem debitis excepturi harum modi iure quas a eaque consequuntur tempora culpa. Earum, ullam!"

// function Readmore(){
// var paragraph = document.getElementById('para')
// paragraph.innerHTML=text;
// }


//2nd method
function Readmore(){
    var text = document.getElementById('txt2')
    var paragraph = document.getElementById('para')
    paragraph.innerHTML=text.innerHTML;
    }
// changing class of an image or object
function makebig(){
        var pic = document.getElementById('car')
        pic.className ='pic2'

    }

//     // changinng image on mouse over/out by 02 functions

// function pic_change(){
//         var pic = document.getElementById('car')
//         pic.src ='images/pic2.jpg'

//     }

//     function pic_changeback(){
//         var pic = document.getElementById('car')
//         pic.src ='images/pic1.jpg'


//     }


//changinng image on mouse over/out by 01 functions

function pic_change(id,src){
        var pic = document.getElementById(id)
        pic.src = src

    }
// get element bt tag name
// var text = document.getElementsByTagName('p')
// text[0].style.fontSize= '2em';


//CHANGE SYTYLE OF TAG ELEMENTS WITHIN THE DIV

function alternate_color(){
    var parent = document.getElementById('div1');
    var pera = parent.getElementsByTagName('p');
    
    for ( var i = 0; i < pera.length; i++){
        if(i%2 == 0){
        pera[i].style.backgroundColor ='green'
        }
    }
}