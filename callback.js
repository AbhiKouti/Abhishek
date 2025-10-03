function orderfood(dummy){
    setTimeout(() => {
        console.log("i am going to order food")
    dummy()//delivery()
    }, 2000);
}

function delivery(){
    setTimeout(() => {
        console.log("Order is being processed")
    }, 1000);
}

orderfood(delivery)

//callback hell
function brush(woo){
    setTimeout(() => {
        console.log("Time taken to brush is 1500")
        woo()
    }, 1500);
}
function bath(b){
    setTimeout(() => {
        console.log("Time taken for bath is 2000")
        b()
    }, 2000);
}
function ready(c){
    setTimeout(() => {
        console.log("Time taken to ready is 1000")
        c()
    }, 1000);
}
function eat(d){
    setTimeout(() => {
        console.log("Time taken to Eat is 4000")
        d()
    }, 4000);
}
function relax(){
    setTimeout(() => {
        console.log("time taken to relax is 500")
    }, 500);
}

brush(()=>{
    bath(()=>{
        ready(()=>{
            eat(relax)
        })
    })
})