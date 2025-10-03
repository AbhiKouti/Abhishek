//IF Statment
//let age=10

if(age>=18){
    console.log("adult")
}
//else

    else{
        console.log("focus on your studies")
    }

    //EX 2
    let marks=30

    if(marks>=35){
        console.log("Congrats You are PASSED")
    }
    else{
        console.log("(FAIL)Better luck next time")
    }
    //find odd or even
    //find leap year or not

    //else if
    let age=140

    if(age<=2 && age>0){
        console.log("Infant")
    }
    else if(age>2 && age<18){
        console.log("child")
    }
    else if(age>=18 && age<70){
        console.log("Adults")
    }
    else if(age>=70 && age<=120){
        console.log("Old Age")
    }
    else{
        console.log("Kindly chek the age")
    }

    //Task 1
   function info(name,age,tamil,kannada,English,Maths,SS){
    console.log("Name :",name)
    console.log("age :",age)
    let totalMark=tamil+kannada+English+Maths+SS
     console.log("total Marks :",totalMark)
     let marks=totalMark/500*100
    if(marks>=0 && marks<35){
        console.log("FAIL")
    }
    else if(marks>=35 && marks<=50){
        console.log("average")
    }
    else if(marks>=50 && marks<=70){
        console.log("GOOD")
    }
    else if(marks>=70 && marks<=90){
        console.log("VERY GOOD")
    }
    else if(marks>=90 && marks<=100){
        console.log("EXCELLENT")

    }
    else {
        console.log("Check the marks")
    }
   }
   info("shlini",15,65,75,65,67,88)
//takst 2 odd/even
const num=112

if(num%2==0){
    console.log("EVEN")
}
else {
    console.log("ODD")
}
//tak 3 Leap year
let Year=2021

if(Year%4==0){
    console.log("Leap Year")
}
else{
    console.log("Not Leap year")
}

//switch statement

let day="friday"
switch(day){
    case "monday":
        console.log("working day1 1")
        break;
    case "tuesday":
        console.log("working day 2")
        break;
    case "wednessday":
        console.log("working day 3")
        break;
    case "thursday":
        console.log("working day 4")
        break;
    case "friday":
        console.log("working day 5")
        break;
    default:
        console.log("holiday")
}

//task 1
let a=12
let b=3

let operator="+"
switch(operator){
    case "+":
        console.log(a+b)
        break;
    case "-":
        console.log(a-b)
        break;
    case "/":
        console.log(a/b)
        break;
    case "*":
        console.log(a*b)
        break;
    case "%":
        console.log(a%b)
        break;
    case "**":
        console.log(a**b)
        break;
    default:
        console.log("not exist")
}