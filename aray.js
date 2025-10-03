let one=["one","two","three"] //array works in index value starts from 0
console.log(one)
console.log(one[2])

//array methods

let fruit=["apple","orrangee","banana","papaya"]

fruit.push("kiwi")
console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.shift()
console.log(fruit)
fruit.unshift("grapes","dragonfruit")
console.log(fruit)
console.log(fruit.slice(0,3))//start to before end
console.log(fruit.slice(-2))

fruit.splice(3,0,"strawberry")//splice will do add remove & replace
console.log(fruit)
fruit.splice(5,1)
console.log(fruit)
fruit.splice(4,1,"blueberry","kiwi")
console.log(fruit)

console.log(fruit.includes("apple"))

let num=[1,5,3,4,1,5,2,1,6,1,7,1]
console.log(fruit.concat(num))
console.log(num.indexOf(1)) //starts from 0
console.log(num.lastIndexOf(1))

console.log(fruit.sort()) //arranges in assending order
console.log(fruit.reverse())//in desending order

console.log(fruit.join(" @"))
console.log(fruit.join(""))//joins how we give the comand
console.log(fruit.join("  **  "))