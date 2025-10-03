const { useSyncExternalStore } = require("react");

function goshop(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let go=true;
            if(go){
                resolve("I am ready for shopping")
            }
            else{
                reject("I am Not getting raady")
            }
        }, 3000);
    })   
}
function shopping(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let shop=true;
            if(shop){
                resolve("purchasing the cloths")
            }
            else{
                reject("searching for cloths")
            }
        }, 5000);
    })
}
function goback(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let back=false;
            if(back){
                resolve("going home after shopig")
            }
            else{
                reject("Still shoppig")
            }
        }, 2000);
    })   
}

// goshop().then((el)=>{console.log(el);return shopping()})
//         .then((el)=>{console.log(el);return goback()})
//         .then((el)=>{console.log(el);return console.log("happy shoping")})
//         .catch((err)=>{console.log("ERROR :",err)})
async function shoppy(){
    try{
        const a=await goshop()
        console.log(a)
        const b=await shopping()
        console.log(b)
        const c=await goback()
        console.log(c)
    }
    catch(err){
        console.log("ERROR :",err)
    }
}
shoppy()
