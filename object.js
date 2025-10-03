let electronic=[
{
    name:"havels",
    price:4000
},
{
    name:"smart",
    price:4434
}
]
console.log(electronic[1].name)

//ex -2
let company = [
  "Trendnologies", 
  2025,                 
  ["Chennai","Coimbatore","Bangalore"],   
  {                           
    department: "QA",
    employees: [
      { name: "Abinaya", role: "Test Engineer", skills: ["Playwright", "Selenium", "API Testing"] },
      { name: "Gajendran", role: "Developer", skills: ["Java", "Spring Boot", "Docker"] }
    ]
  },
  [                    
    { project: "AutoShop360", status: "Ongoing" },
    { project: "QuickCart", status: "Completed" }
  ]
];

console.log(company[3].employees[0].skills[1])
console.log(company[4][0].project)

//task 1(16-09-2025)
let array=[]
array.push(10,20,30)
console.log(array)
array.pop()
console.log(array)
array.unshift(5)
console.log(array)
array.shift()
console.log(array)

let str="Abhishek" //reverse
console.log(str.split('').reverse().join(''))