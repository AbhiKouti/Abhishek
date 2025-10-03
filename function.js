//function declaration
// hoisting - u can call the top of the function head
 oddeven(90)

 function oddeven(num){
    console.log(num)
 }

 oddeven(254)
//example 2
 function info(name,age,native){ //parameter
   console.log("my name is",name)
   console.log("my age ",age)
   console.log(`my native is ${native}`)
 }
 info("abhishek",22,"chennai")//arguments

 info("abi",26,"benglr")

 //function expretion

 let detail = function(name,age){
    return `I am ${name} and ${age} year old`
 }
 console.log(detail('abhishek',26))

 //ex 2
 let details=function(name,job_role){
   console.log(`mu name is`,name,`my job role is`,job_role)

 }
 details("abhishek","QA analyst")

 //arrow Function

 let arrow=(x)=>{
    return x*x
 }
console.log(arrow(10));
//ex 2
let movie=(name,ticket,snacks,petrol)=>{
   console.log("Movie name is",name,"and total expencess is",(ticket+snacks+petrol))
}
movie("A",200,1000,222)

movie("appu",333,22,123)

//imidiatly invoked function expresstion(IIFE)
(function(abejc){
   console.log("hello",abejc)
})("Hello")

//           Task 1
//deffined with arrow function
const area=(length,width)=>{
   console.log(length*width)
}
area(10,20)


area(30,40)
//eg 2
const areas=function (length,width){
   return(length*width)
}
console.log(areas(10,20))
//             Task 2
function Result(Tamil,English,Maths,Science,SS){
   console.log("persentage Is :",(Tamil+English+Maths+Science+SS)/500*100)
}
Result(85,65,89,49,99)


Result(49,58,78,74,79)