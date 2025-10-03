//Systax
//for(initialization;condition;increment/decrement){
////code to run
//}

for(let i=1;i<=10;i++)
{
    console.log("hello");
}

let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i
    console.log(sum);
}

let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i//sum=sum+i
}console.log(sum);

let str="hello";
for(let i=0;i<str.length;i++)
{
    console.log(str[i])
}

let str="hello";
for(let i=0;i<5;i++)
{
    console.log(str[i])
}

//While Loop
//while(condition){
//code to run
//}
let i=2
while(i<=5){
    i++
    console.log(i);
}
//do while
let i=2
do{
    console.log("hello");
    i++;
}while(i<=5)
//for. of loop itrate by using value
let arr=["apple",'bannana','orrange'];
for(let fruit of arr){ //can be writern as for(let i=0;i<arr.length;i++)
    console.log(fruit);
}
//for in loop itrate by using key
const data={
    name:'abhishek',
    age:27,
}
for(let key in data){
    console.log(data[key]);
}
//ex2
const data={
    name:'abhishek',
    age:27,
}
for(let key in data){
    console.log(key+":"+data[key]);
}

let str="Abhi"       //Reverse A String 
let empty=""
for(let i=str.length-1;i>=0;i--){
    empty+=str[i] //empty=empty+str[i]
   
} console.log(empty)

//task 1 day9
let contry=["India","Japan","USA"]
contry.push("UK","SA")
console.log(contry)
console.log(contry.concat("Rushia"))
contry.pop()
console.log(contry)
contry.shift()
console.log(contry)
contry.unshift("Affrica","Srilanka")
console.log(contry)

//Task2
let number=5;
for(let i=1;i<=10;i++){
    table=number*i;
    console.log(i,"* 5 =",table);
}
//for each
let ar=[1,2,3,4]
ar.forEach((val,ind,arr)=>{
    console.log(val,ind,arr)
})
//MRF(map,reduce,filter)
//map
let array=[1,2,3,4,5,6,7,8,9,10]

let mul=array.map((el)=>el*2)
console.log(mul)
//filter
let even=array.filter((el)=>el%2==0)
console.log(even)
//reduce
let summ=array.reduce((acc,val)=>acc+val,1000)//acc=accumulater val=value lastly assined acc value is 1000 
//if not assigned it will start from 0 acc=0,1,2,3,...
console.log(summ)
//Task
let arrr=["abhi","abb","appu","abinaya","Trendnologi","trend"]
let nam=arrr.filter((el)=>el.length>3)
console.log(nam)
let upper=nam.map((el)=>el.toUpperCase())
console.log(upper)