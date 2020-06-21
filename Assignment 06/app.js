//  =================================================================================
                                    // CHAPTER 21-25
// ===================================================================================
// //___________ Task # 1________________
// var first_name = prompt("enter your first name ");
// var last_name = prompt("enter your last name ");

// var full_name =first_name +" "+ last_name
// alert("Welcome"+" "+ full_name+" "+ "to the new world of javascript")

// //___________ Task # 2________________
// var fav_phone = prompt("your favorite phone");

// document.write("My favorite phone is :"+" "+ fav_phone+ "<br>"+"Length of string:"+" "+ fav_phone.length)

//___________ Task # 3________________
// var word = "Pakistani"
// document.write("String:"+" "+ word +"<br>"  +  "Index of 'n':"+" "+word.indexOf("n"))


// //___________ Task # 4________________
// var word2 = "Hello World"
// document.write("String:"+" "+ word2 +"<br>"  +  "Last Index of 'l':"+" "+word2.lastIndexOf("l"))

// //___________ Task # 5________________

// var word3 = "pakistani"
// document.write("String:"+" "+ word3 +"<br>"  +  "Character at  Index 3:"+" "+word3.charAt(3))

// //___________ Task # 6________________

// var first_name = prompt("enter your first name ");
// var last_name = prompt("enter your last name ");

// alert("Welcome"+" "+ first_name.concat(last_name)+" "+ "to the new world of javascript")

//___________ Task # 7________________
// var city ="hyderabad"
// var city2 = city.replace("hyder","Islam")
// document.write( "City:" + city+"<br>"+ "city after replacement:" + " "+city2)


////___________ Task # 8________________
// var message = "Ali and Sami are best friends. They play cricket and football together."
// message = message.replace(/and/g,"&")
// document.write(message)

// //___________ Task # 9________________
//  var num ="472";
//  document.write("Value:"+" "+ num+"<br>"+ "Type:"+" "+ typeof num +"<br>")
//  var num2 = +num;
//  document.write("Value:"+" "+ num2+"<br>"+ "Type:"+" "+ typeof num2+"<br>")
 
// //___________ Task # 10________________
// var user_input = prompt("Please enter a string")
// document.write("User Input:"+" "+ user_input+"<br>")
// document.write("Upper Case:"+" "+ user_input.toUpperCase()+"<br>")


// //___________ Task # 11________________
// var user_input = prompt("Please enter a string")
//  document.write("User Input:"+" "+ user_input+"<br>")
 
// var lower = user_input.toLowerCase()
// var title = lower[0].toUpperCase() + lower.slice(1)
//  document.write(title+"<br>")


// //___________ Task # 12________________
// var num = 33.56
// document.write("Number:"+" "+ num + "<br>");
// var result = num.toString();

// var result2=result.replace(result[result.indexOf(".")],"")
// document.write("Result:"+" "+result2)

// //___________ Task # 13________________
// var user_input = prompt("User name")
// for (i=0;i<user_input.length ; i++){
//     if(user_input[i]=="@"||user_input[i]=="!"||user_input[i]==","||user_input[i]=="."){
//       alert("Please Enter a Valid user name")  
//     }

// }
// //___________ Task # 14________________
// var bakery_list = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user_input =prompt("Enter your desired item")
// user_input=user_input.toLowerCase()

// for( var i=0; i<bakery_list.length;i++){
//     if(user_input === bakery_list[i]){
//         document.write(bakery_list[i]+" "+ "is avaialble at"+" "+ "index"+" "+ i +" "+"in our bakery"+"<br>" )
        
//      }else 
//      document.write(user_input+" "+ "is  not avaialble  in our bakery" +"<br>")
//      break;
//     } 
    
//___________ Task # 15________________



////___________ Task # 16________________
// var  university = "University of Karachi";
// var uni_arry = university.split('')
// for (i=0;i<uni_arry.length;i++){
//     document.write(uni_arry[i]+"<br>" )
// }
// //___________ Task # 17________________
// var user_input = prompt("Enter input");
// document.write("User Input:"+""+user_input +"<br>")
// user_array =user_input.split('')
// var poped_char = user_array.pop();
// document.write("Last character of input:" +" "+poped_char )
//___________ Task # 18________________
// var text ="The quick brown fox jumps over the lazy dog"
// document.write("TEXT"+" "+ text +"<br>")

// var number = occurrences(text,"the")
// document.write("number of occurrences of word the is"+" "+ number +"<br>")

//  =================================================================================
                                    // CHAPTER 26-30        (rounding number and control string)
// ===================================================================================
//  //___________ Task # 1________________
// var number = 3.45214
// var number1= Math.round(number);
// var number2 = Math.ceil(number);
// var number3 = Math.floor(number);
// document.write("Original Number="+number +"<br>");
// document.write("Rounded Number="+number1+"<br>");
// document.write("Ceiling Number="+number2+"<br>");
// document.write("Floor Number="+number3+"<br>");

 //___________ Task # 2________________
// var number = -2.65214
// var number1= Math.round(number);
// var number2 = Math.ceil(number);
// var number3 = Math.floor(number);
// document.write("Original Number="+number +"<br>");
// document.write("Rounded Number="+number1+"<br>");
// document.write("Ceiling Number="+number2+"<br>");
// document.write("Floor Number="+number3+"<br>");
//___________ Task # 3________________
// var number = -23434
// var number1 = Math.abs(number)
// document.write("Original Number="+" "+number +"<br>");
// document.write("Absolute Number="+" "+number1+"<br>");

//___________ Task # 4________________



//___________ Task # 5________________



//___________ Task # 6________________



//___________ Task # 7________________
var weight = prompt("please enter your age" );
weight =weight.toLowerCase()


if(weight.indexOf("k") != -1){
weight= weight.slice(0, weight.indexOf("k"))
var weight_int = parseInt(weight);
document.write("Your weight is:"+" "+ weight_int);
}
else{
    var weight_int = parseInt(weight);
document.write("Your weight is:"+" "+ weight_int);
}

//___________ Task # 8________________




//___________ Task # 9________________



//___________ Task # 10________________

