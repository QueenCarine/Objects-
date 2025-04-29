// 1.Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the
//  salary by 10% for employees who have the position "developer" and print the updated employee list. 
function Employee(name,position,salary){

    this.name=name;
    this.position=position;
    this.salary=salary;
}


let employees=[
    new Employee("Queen","Developer",1000),
    new Employee("Karen","CEO",2000),
    new Employee("Carine","CTO",500),
    new Employee("Saloi","Developer",1000),
    new Employee("Keza","Developer",1000)
]
employees.filter(worker=>{
    if(worker.position =="Developer"){
        worker.salary*=1.10
    }
})
console.log(employees)

//2. Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the
//  products that are inStock: true, and sort the available products by price in ascending order. (5 pts)
function instock(products) {
    let availableProducts = products.filter(item => item.inStock === true)
        products.sort((a,b) => a.price - b.price)
        console.log(products)
        console.log (availableProducts);
  }
  let products = [
    {name: "Rice",
      price: "1000",
      inStock: true
    },
    {name: "maize",
      price: "500",
      inStock: true
    },
    {name: "sorghum",
      price: "200",
      inStock: false
    },
    {name: "sugar",
      price: "400",
      inStock: false
    },
    {name: "salt",
      price: "50",
      inStock: true
    }
  ]
  instock(products)

  //3. Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates 
  // and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)
const students=(grades)=>{
    for(let student in grades){
      let scores = grades[student]

      let average = scores.reduce((sum,score)=>sum +score,0)/scores.length
      let Status = average > 70 ? "Pass":"Fail"

      console.log(`${student}: Average Scores = ${average} - ${Status}`)
    }
}

let grades ={
Queen:[60,40,20,15,55],
Carine:[25,40,70,89,10],
Keza:[62,90,60,55,85]
}


students(grades)

//4. Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently 
// (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)
const User=(username,email,isActive)=>{

    this.username = username
    this.email = email
    this.isActive = isActive
 }

 let users = [
    {username:"Jacky",email:"jacky@gmail.com", isActive:true},
    {username:"Bonette",email:"bonette@gmail.com", isActive:true},
    {username:"Keza",email:"keza@gmail.com", isActive:true},
    {username:"Akeza",email:"akeza@gmail.com", isActive:true},
    {username:"Queen",email:"queen@gmail.com", isActive:true}
 ]

 users.map(user =>{
    if(Math.random()<0.5)
        user.isActive = false;
})
users.filter(user  => {
    if(user.isActive)
    console.log(user.username)})

5. // You have an array of destination objects, each with name, distance (in km),
//  and budgetRequired (in dollars). Write a function that accepts a maximum distance and
//  a budget and returns all destinations the user can afford and reach within that distance.
//  If none are found, return "No destinations available under your budget and distance". (5 pts)

const destination=(maxDistance,budget)=>{
   let availableDestination = destinations.filter(place => 
       place.distance<=maxDistance && place.budgetRequired <=budget
   );

   if(availableDestination.length >0){
       console.log(availableDestination)
   }else{
       console.log("No destination available under your budget and distance")
   }
    
}



let destinations =[
   {name:"Greece",distance:2000,budgetRequired:7000},
   {name:"England",distance:4000,budgetRequired:5000},
   {name:"Kigali",distance:2500,budgetRequired:7500},
   {name:"Korea",distance:1000,budgetRequired:2500}

]

destination(2000,2500)
