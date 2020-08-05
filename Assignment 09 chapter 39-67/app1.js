// //__________________________________//   CHAPTER 38-42   \\___________________________________________\\                                     

// ----TASK # 01------

function power(a,b){
    document.write("Power of "+ a + " up to " + b + " = "+ a**b)
}
power(2,3)

// ----TASK # 02------

function leap(year){
    if(year%4 == 0){
        document.write("<br>" +"The year "+ year + "is a leap year")
    }
    else{
        document.write("<br>" +" Sorry! The year "+ year + " is not a leap year")
    }
    
}

leap(2020)

// ----TASK # 03------
function area_of_triangle(a,b,c){
    function S_value(a,b,c){
        s = (a+b+c)/2
        return s
        console.log(s)
    }
    s = S_value(a,b,c)
    area = s*((s-a)*(s-b)*(s-c));
    document.write("<br>" +"AREA of Triagle = " + area)

}

area_of_triangle(2,3,4)

// ----TASK # 04------
function avrage (sub1,sub2,sub3){
    avg = (sub1+sub2+sub3)/3
    return avg
}
function percentage(sub1,sub2,sub3){
    total =100;
    obtained = sub1+sub2+sub3;
    percent = obtained *100/300
    return percent
}

function mark_sheet(sub1,sub2,sub3){
    avg_marks = avrage(sub1,sub2,sub3)
    marks_percentage = percentage(sub1,sub2,sub3)
    document.write("<br>"+ "Avrage Marks per Subject is = "+ avg_marks);
    document.write("<br>"+ "Percntage  is = "+ marks_percentage +"%");
}

mark_sheet(80,70,90)

// ----TASK # 05------
function index_of_char(word,ind){
    var word_ar = word.split("")
    var i = 0;
    while(i<word_ar.length){
        if(word_ar[i] == ind){
        document.write("<br>"+"Index of "+'"'+ ind + '"' +" in "+ word +" is "+ i)
        }
    i++
    }   
}
index_of_char( 'ateeq','q')

// ----TASK # 06------

function delete_vowel(text){
     para = text.replace(/[aeiouAEIOU]/g, "");
    console.log(para)
    }
delete_vowel("there lived a king")
// ----TASK # 07------


// ----TASK # 08------

function distnce_m(distance){
    m_dist = distance*1000
    document.write("<br>"+"Distance in meters  "+ m_dist)
}
function distnce_cm(distance){
    cm_dist = distance*1000 *100
    document.write("<br>"+`Distance in centi meters  ${cm_dist}`)
}
function distnce_ft(distance){
    ft_dist = distance*3280.8399
    document.write("<br>"+"Distance in feets  "+ ft_dist)
}
function distnce_inch(distance){
    inch_dist = distance*3280.8399*12
    document.write("<br>"+"Distance in inches  "+ inch_dist)
}
var distance = +prompt("Distance b/w cities in Km  ");
document.write("<br>"+"<h4>"+"DISTANCE CALCULATOR"+"</h4>")
distnce_m(distance);
distnce_cm(distance);
distnce_ft(distance);
distnce_inch(distance);

// ----TASK # 09------
function overtime(h){
    if(h>=40){
       var extra = h*12
       return extra
    }
    else{
        alert("You  don,t work overtime")
    }
}

h = +prompt("Enter the over time");
document.write("<br>"+"<h4>"+"Overtime Calcultor"+"</h4>")
document.write("<br>"+"Overtime pay for extra "+ h + " is "+ overtime(h))


//----TASK # 10------
function dominate(a){
    var h =a/100
    var h2 = Math.trunc(h)
    var r = a%100
    var f = r/50
    var f2 =Math.trunc(f)
    var r2 = a%50
    var t = r2/10
    var t2 = Math.trunc(t)
    var r3 = a%10
  document.write("<br>"+"You will have " +h2 +" hundred, "+f2+ " fifty notes  "+t2+ " tens notes and "+r3 + " rupees")
        
}
var a = prompt("Enter Amount  ")
dominate(a)