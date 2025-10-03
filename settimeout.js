// function dummy(){
//     setTimeout(() => {
//         console.log("timeout")
//     }, 2000);
// }
// dummy()

function brush(){
    setTimeout(() => {
        console.log("Time taken to brush is 1500")
    }, 1500);
}
function bath(){
    setTimeout(() => {
        console.log("Time taken for bath is 2000")
    }, 2000);
}
function ready(){
    setTimeout(() => {
        console.log("Time taken to ready is 1000")
    }, 1000);
}
function eat(){
    setTimeout(() => {
        console.log("Time taken to Eat is 4000")
    }, 4000);
}
function relax(){
    setTimeout(() => {
        console.log("time taken to relax is 500")
    }, 500);
}

brush()
bath()
ready()
eat()
relax()

//Task 1 on class n constructor refer file class for this task(task 1)
// class Students{
//         constructor(names,section,marks){
//              setTimeout(() => {
//         this.names=names
//         this.section=section
//         this.marks=marks
//     }, 1500); 
//     }
//     NameDi(){
//         setTimeout(() => {
//              console.log("My Nmae Is :",this.names)
//         }, 500);
//     }
//     SectionDi(){
//         console.log("Section Is :",this.section)
//     }
//     marksDi(){
//         console.log("Persentage Is :",this.marks)
//     }
//     function Percntage(English,Kannada,Tamil,SS,Science) {
//             let totalmarks=English+Kannada+Tamil+SS+Science
//         console.log("Toatal Marks :",totalmarks)
//         this.marks=totalmarks/500*100
//     }
//     let student1=[
//            {names:"Abhishek",section:"B",marks:this.marks}
//     ]
//     let student2=[
//         {names:"abinaya",section:"A",marks:this.marks}
//     ]
// }

// let one=new Students("abhishek","B",35)
// one.NameDi()
// one.SectionDi()
// one.marksDi()
