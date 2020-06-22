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
                                    // CHAPTER 26-30        (MATH METHODS)
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

// //___________ Task # 4________________
// var dice_user = prompt("Enter player name")

// var dice = Math.random()*6
// dice =Math.floor(dice);
// document.write("Value of DICE for  "+ dice_user + " = "+ dice)

// //___________ Task # 5________________
// var Head_selector = prompt("Enter player1 name")
// var Tail_selector = prompt("Enter player2 name")
// var coin = Math.random()*2
// coin =Math.floor(coin);
// if(coin === 1){
//     document.write(Head_selector +" "+ " win the toss")
// }else
// document.write(Tail_selector +" "+ " win the toss")

// //___________ Task # 6________________
// var selected_user = prompt("Enter player name")

// var num = Math.random()*100
// num =Math.floor(num);
// document.write("Winner of luckydraw is  "+ selected_user + " With number= "+ num)


// //___________ Task # 7________________
// var weight = prompt("please enter your age" );
// weight =weight.toLowerCase()


// if(weight.indexOf("k") != -1){
// weight= weight.slice(0, weight.indexOf("k"))
// var weight_int = parseInt(weight);
// document.write("Your weight is:"+" "+ weight_int);
// }
// else{
//     var weight_int = parseInt(weight);
// document.write("Your weight is:"+" "+ weight_int);
// }

// //___________ Task # 8________________
// var my_num = Math.random()*10
// my_num= Math.floor(my_num)

// var User_num = prompt("Enter your  number")

// if(User_num === my_num){
//     document.write( "Congragulation win the Game")
// }else
// document.write("OOOOPS You Loss the Game")

//  =================================================================================
                                    // CHAPTER 31-35        (DATE METHODA)
// ===================================================================================
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
//  //___________ Task # 1________________
// document.write(Date())

// //___________ Task # 2________________
//  var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//  var d =  new Date();
//  var  month = d.getMonth();
//  document.write("The current month is  " + month_name[month])

// //___________ Task # 3________________
// var d_large =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d_small =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var day = d.getDay()
// document.write("The current Day is  "+ d_small[day])
//___________ Task # 4________________
// var d_large =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d_small =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var day = d.getDay()
// if(day == 0|| day == 6){
//     document.write("It is Fun Day")
// }else
// document.write("The current Day is  "+ d_small[day])

// //___________ Task # 5________________
//  var d = new Date()
//  var  day_no = d.getDate();
//  if(day_no <= 15){
//  document.write("First fifteen days of the month")
//  }else
//  document.write("Last days of the Month")

// //___________ Task # 6________________
// var d = new Date();
// var milli_sec =d.getTime();
// document.write("The elapsed milli seconds since 01 jan 1970 =  "+milli_sec)

// //___________ Task # 7________________
// var d = new Date();
// var hours = d.getHours()
// if(hours <= 12){
//     document.write("<h2>"+"It is AM"+"</h2>")
// }else
// document.write("<h2>"+"It is PM"+"</h2>")

// //___________ Task # 8________________
// var laterdate = new Date("2020, Dec, 31")
// document.write("<h2>"+"Later Date: "+"</h2>"+laterdate);

// //___________ Task # 9________________
// var upcoming_ramzan = new Date("2021, Apr, 15");
// var up_sec = upcoming_ramzan.getTime()
// var last_ramzam = new Date ("2020, Apr, 24");
// var last_sec = last_ramzam.getTime();
// var difference = up_sec -last_sec
// var rem_days = difference/(1000*60*60*24)
// document.write("Days remainin in upcomimg ramzan = " +rem_days);

// //___________ Task # 10________________
// var ref_date = new Date("2020, Apr, 15");
// var ref_sec = ref_date.getTime()
// var ref2_date = new Date ("2020, jan, 01");
// var ref2_sec = ref2_date.getTime();
// var difference = ref_sec - ref2_sec
// var rem_days = difference/(1000*60)
// document.write("On reference date "+ ref_date +" " +rem_days +" has been passed away since 2015");

// //___________ Task # 11________________

// var d = new Date();
// document.write("Current Date: " + d +"<br>")
// var d_milli = d.getTime();
// var d_milli2 = d_milli - 3600000;
// var d2 = new Date(d_milli2)
// document.write(" and  01 hour ago It is "+ d2 )

// //___________ Task # 12________________
// var d = new Date();
// document.write("Current Date: " + d +"<br>")
// var d_milli = d.getTime();
// var d_milli2 = ((d_milli/(1000*60*60*24*365))-100)
// var d_milli3 = d_milli2*1000*60*60*24*365
// var d2 = new Date(d_milli3)
// document.write(" and  01 hour ago It is "+ d2 )

// //___________ Task # 14________________
//  var current_date = new Date();
//  var dob = new Date(prompt("Enter your date of birth","YYYY, MM, DD"))
//  var birth_year = dob.getFullYear()
//  dob = dob.getTime()
//  current_date2 =current_date.getTime();
//  var difference =current_date - dob

//  var age = difference/(1000*60*60*24*365)
//  age = Math.floor(age)
//  document .write("Your Age is: "+ age +"<br>");
//  document.write("You birth year is: "+ birth_year)
 
// //___________ Task # 15________________

// var Customer_Name = "Waqar Ahmad"
// var Current_Month =  "June"
// var Number_of_units = 480
// var Charges_per_unit = 15
// var Net_Amount_Payable_indate = (Number_of_units*Charges_per_unit)
// Net_Amount_Payable_indate = Number(Net_Amount_Payable_indate.toFixed(2))
// var Late_Payment_Surcharge = 350
// var Gross_Amount_Payable_after =  (Net_Amount_Payable_indate + Late_Payment_Surcharge)
// Gross_Amount_Payable_after = Number(Gross_Amount_Payable_after.toFixed(2))
// document.write("<h2>"+ "K-ELECTIC BILL"+"</h2>")
// document.write("Customer Name: " + Customer_Name +"<br>")
// document.write("Billing Month: " +Current_Month +"<br>")
// document.write("Number of units: " + Number_of_units +"<br>")
// document.write("Charges per Unit: " + Charges_per_unit +"<br>"+"<br>")
// document.write("Net Amount Payable (within Due Date) : " + Net_Amount_Payable_indate +"<br>")
// document.write("Charges per unit: " + Late_Payment_Surcharge +"<br>")
// document.write("Gross Amount Payable (after Due Date): " + Gross_Amount_Payable_after +"<br>")


//  =================================================================================
                                    // CHAPTER 36-38        (Functions)
// ===================================================================================
//  //___________ Task # 1________________
// function show_date(){
//     document.write(Date())
// }

// show_date()
// //___________ Task # 2________________
// function fullname_greet(first_name, last_name,){
    
//     var full_name = first_name +" "+ last_name
//     document.write("Welcome "+ full_name +" to the Sylani Smit ")
// }

// fullname_greet( "ateeq","akram")

// //___________ Task # 3________________
// function num_sum(a,b){
//     var a = prompt("Enter your first number");
//     var a = prompt("Enter your first number");
//     var c = (+a)+(+b);
//     document.write("Sum  of numbe1 and number2  = "+ c)

// }

// num_sum(0,0)


// //___________ Task # 4________________
// function num_sum2(num1, opr ,num2){
//     if(opr === '+'){
//         var c = (+num1)+(+num2);
//         document.write( num1 + opr + num2+   "="+ " "+ c +"<br>")
//     }
//     if(opr === '-'){
//         var c = (+num1)-(+num2);
//         document.write( num1 + opr + num2+   "="+ " "+ c +"<br>")
//     }
//     if(opr === '*'){
//         var c = (+num1)*(+num2);
//         document.write( num1 + opr + num2+   "="+ " "+ c +"<br>")
//     }
//     if(opr === '/'){
//         var c = (+num1)/(+num2);
//         document.write(  num1 + opr + num2+   "="+ " "+ c +"<br>")
//     }
//     if(opr === '%'){
//         var c = (+num1)%(+num2);
//         document.write( num1 + opr + num2+   "="+ " "+ c +"<br>")
//     }
       
       
    
//     }
    
//     num_sum2(12,"+",23)
//     num_sum2(23,"*",45)


// //___________ Task # 5________________
// function squar(a){
//     document.write(a*a)
// }

// squar(3)
// //___________ Task # 6________________

// function factorial(a){
//     if(a > 0 ){
//         return a* factorial(a)
        
//     }
// }

// //___________ Task # 7________________
// function count(start,end){
// for(i = start; i<= end; i++){
// document.write(i + ",")
// }
// }

// count(1,10)
// //___________ Task # 8________________
// function hypo(base, prependicular){
//     function squar(a){
//         var c =a*a
//         return c
//     }

//     var hypotan = (squar(base)+squar(prependicular))**0.5
//     hypoton2 =Math.round(hypotan)
//     document.write("The value of Hypotinous is: " +hypoton2)
// }

// hypo(12,23)

// //___________ Task # 9________________
// function rect_area(width, height){
//     var area = width*height
//     document.write ("Area of rectangle = "+ area)
// }

// rect_area(12,12)
// rect_area(width= 12,height = 23)

// //___________ Task # 10________________
// function palindome(a){

//     for(i=a.length-1; i>=0; i--){
//          var reverse = a[i]
         
//     }
//     for (i= 0;i<a.length; i++){
//         var original = a[i]
//     }
//     if(reverse === original){
//         document.write("The given word is palindome")
//     }else
//     document.write("oops try again")
// }
// palindome("civic")

//___________ Task # 11________________
// // function title(para){
//     var user_input = prompt("Please enter a string")
//  document.write("User Input:"+" "+ user_input+"<br>")
 
// var lower = user_input.toLowerCase().split("")
// for(i = 0 ;i<user_input.length;i++){

//     lower[i] = lower[i].toUpperCase() + lower[i].slice(1)
//     document.write(lower+"<br>")
// }


// // }

//___________ Task # 12_______________



//___________ Task # 13________________


//___________ Task # 14________________



//  =================================================================================
                                    // CHAPTER 36-38        (DATE METHODA)
// ===================================================================================
//  //___________ Task # 1________________


//___________ Task # 2________________



//___________ Task # 3________________

//___________ Task # 4________________



//___________ Task # 5________________

//___________ Task # 6________________



//___________ Task # 7________________


//___________ Task # 8________________



//___________ Task # 9________________


//___________ Task # 10________________



