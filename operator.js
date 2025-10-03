//arithamatic operator

function arithmatic(){
    let a=25
    let b=15
    console.log(a+b)
    console.log(a-b)
    console.log(a/b)
    console.log(a**b)
    console.log(a%b) //a module b
    a++
    console.log(a)
    b--
    console.log(b)
}

arithmatic(25,15)

//assignment operator
function assignment(){
    let a=20
    let b=10

    console.log(a+=b)  //a=a+b
    console.log(a-=b)
    console.log(a/=b)
    console.log(b**=a)
    console.log(b%=a)
}
assignment()

//equality

function equality(){
    let a=10
    let b=20
    let c="10"

    console.log(a==b)
    console.log(a==c)

    console.log(a===b)
    console.log(a===c)
}

equality()

//comparison operator

function comparison(){
    let a=10
    let b=20
    let c=10
    let d="20"

    console.log(a<b)
    console.log(a>b)
    console.log(a<=b)
    console.log(a>=c)
    console.log(b!==d)
    console.log(b!=d)
}

comparison()


//logical operator

function logical(){
    let a=10
    let b=20
    let c="10"

    console.log(a<b && a==c) //both are correct then true
    console.log(a<b || a===c)//any one is correct then true
    console.log(a>b && a<b)//any one is correct then in the and operator then false

}

logical()

//ternary operator
let age=15

let output=(age>=18) ? "adult":"child"

console.log(output)

//Exx=2
let marks=70

let Result=(marks>=35)?"PASS":"FAIL"

console.log(Result)