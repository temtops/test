// function sum(a,b){
//     return a + b
// }
// console.log(sum(2,3))

// class User {
//     constructor(sn,fn,dob,gender){
//         this.surname = sn;
//         this.first_name = fn;
//         this.dob = dob;
//         this.gender = gender;
//     }
//     age(){
//         let now = new Date();
//         let dob = new Date(this.dob);
//         let diff = now - dob;
//         return Math.floor(diff/(1000*60*60*24*365.25))
//     }
//     fullName(){
//         return `${this.surname} ${this.first_name}`
//     }
//     gend(){
//         return `${this.gender}`
//     }
// }
// let user1 = new User('Olatunji', 'Hameed', '1999-09-08')
// let user2 = new User('Ola', 'Ham', '1967-09-08')
// console.log("User1 FullName : " + user1.fullName())
// console.log("User2 FullName : " + user2.fullName())
// console.log("User2 age : " + user1.age())
// console.log("User2 age : " + user2.age())

// function max(arr){
//     let max = arr[0];
//     for(let v of arr){
//         if(v>=max) max = v
//     }
//     return max
// }
// console.log(max([1,3,4,3,5,2,1]))
// class Student extends User{
//     constructor(sn,fn,dob,gender,regNo,dateJoined,program, title = ""){
//         super(sn,fn,dob,gender)
//         this.registrationNumber = regNo;
//         this.dateJoined = dateJoined;
//         this.program = program;
//         if(title){
//             this.title = title
//         } else{
//             if(gender == "Male"){
//                 this.title = "Mr. "
//             } else{
//                 this.title = "Mrs"
//             }
//         }
//         // this.title = title ? title :(gender.toLowerCase() == 'male' ? 'Mr. ' : 'Mrs. ')
//         // this.title = title || (gender.toLowerCase() == 'male' ? 'Mr. ' : 'Mrs. ')
//     }
//     durationSpent(){
//         let DJ = new Date(this.dateJoined)
//         let now = new Date();
//          let WkD = now - DJ;
//          return Math.floor(WkD/(1000*3600*24*7))

//     }
//     Title(){
//         return this.title
//     }
// }
// let student1 = new Student("Ade", "Ola", "2002-09-05","female", 888767, "2023-06-05","FullStack");
// console.log(student1.durationSpent()) 
// console.log(student1.fullName()) 
// console.log(student1.age()) 
// console.log(student1.gend()) 
// console.log(student1.Title().slice(0,1).toUpperCase() + student1.Title().slice(1,4) + " " + student1.fullName()) 

function Sum(a = 0, ...b){
    let sum = a;
    for (const val of b) {
        sum += val
        
    }
    return sum
}
// console.log(Sum(2,2,2,3,3,4,3))
function prod(a=0, ...b){
    let product = a;
    for (const val of b) {
        product*=val
        
    }
    return product
}
module.exports = {Sum, prod,Factorial}

let User = {name:'olatunji', age:23, addr: 'Akobo'}
let {age, ...props} = User;
// console.log(props + '😂')
let scores = [1,2,3,3,4,5];
let allScores = [1,2,3,4,...scores];

function Factorial(num){
// if(num == 1){
//     return num
// } else{
//     return num*Factorial(num-1)
// }
return num==1 ? 1 : num* Factorial(num-1)
}
// There are diff types of Node Modules
//path, fs, os, event, http, util, ytt, zicb
console.log(__dirname)
