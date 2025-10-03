let one="welcome to trednologies \nhello \t hii"    // n indicats print next and next line also /t indicats Tab
let two='hello world \nhello \thii'
let three=`hello hii don't "old is gold" 
trednologies ${one}`//${}indicats print the one line also

console.log(one)
console.log(two)
console.log(three)



let str="Welcome to Chennai" //index starts from 0 | length starts from 1

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())//print all the letters in small letters (Total lower case letters)
console.log(str.charAt(4))//charecter 
console.log(str.indexOf("e"))    //helps to find first index
console.log(str.lastIndexOf("e"))//helps to find the last index 
console.log(str.includes("Chennai"))
console.log(str.slice(0,7))//cut the spacified letters
console.log(str.slice(-7))// "-" minus represents count starts from last like -7-6-5-4-3-2-1 as Chennai
console.log(str.replace("Chennai","Bangalore"))

let join="      hello hii   "
console.log(join)
console.log(join.trim())//trims the space or tab in the first an last
console.log(str.concat(join))
console.log(str.startsWith("Welcome"))
console.log(str.endsWith("Chennai"))
console.log(str.split("c"))
