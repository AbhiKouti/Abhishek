class info{
    name="Abhsihek"
    age=27
    Job_role="QA Analyst" //properties

    details(){ //function
        console.log("My Nmae is",this.name,"My age is",this.age,"My Job role is",this.Job_role)
}
}
let demo1=new info  //object creation

demo1.details()
console.log(demo1.name)

//class with constructor

class Infoo{
    constructor(name,age,hobby){
        this.name=name
        this.age=age
        this.hobby=hobby
    }

Namedei(){
    console.log("my name is",this.name)
}
agedi(){
    console.log("my age is",this.age)

}
hobbydi(){
    console.log("my hobby is",this.hobby)
}
}

let one=new Infoo("abhishek",22,"drawing")
one.Namedei()
one.agedi()
one.hobbydi()

let two=new Infoo("abinaya",22,"painting")
two.Namedei()
two.agedi()
two.hobbydi()

//Task 1
class Student{
    constructor(name,age,native,English,tamil,kannada,SS,science)
    {
        this.name=name
        this.age=age
        this.native=native
        this.English=English
        this.tamil=tamil
        this.kannada=kannada
        this.SS=SS
        this.science=science
    }
    nameDi(){
        console.log("My name is :",this.name)
    }
    ageDi(){
        console.log("age is :",this.age)
    }
    nativeDi(){
        console.log("native is :",this.native)
    }
    percentage(){
        console.log("percentage :",(this.English+this.tamil+this.kannada+this.SS+this.science)/500*100)
    }
}
let student1=new Student("abhishek",22,"Blr",65,76,84,76,87)
student1.nameDi()
student1.ageDi()
student1.nativeDi()
student1.percentage()

let student2=new Student("abinaya",22,"chennai",65,78,84,96,77)
student2.nameDi()
student2.ageDi()
student2.nativeDi()
student2.percentage()