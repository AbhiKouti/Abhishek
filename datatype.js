//primitive datatype

let str="javascript"
console.log(str,typeof(str))

let num=15,numnum=20.222
console.log(num,typeof(num))
console.log(numnum,typeof(numnum))

let bool=true
console.log(bool,typeof(bool))

let bint=12345678n
console.log(bint,typeof(bint))

let colour; //given empty value
console.log(typeof(colour))

let dummy=null 
console.log(dummy,typeof(dummy)) //null means no value shows output as object


//non-primitive

let arr=["one",2,"three",4,"five"]//index starts from 0
console.log(arr)
console.log(arr[2])
console.log(typeof(arr))

let obj={   //Json Formet
    name:"shalu",
    age:10,
    native:"banglore"
}

console.log(obj)
console.log(obj.name)
console.log(typeof(obj))

//Function
function dummy(){
    console.log("hello world")
}

dummy() //calling the function 
//without calling outside the block functionoutput will not show

dummy()



dummy() //we can call multipal time