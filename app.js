// Total Questions: 30
// Section 1 – Objects (1–5)

// Q1.
// JavaScript Object kya hota hai? Real-world example ke sath explain karein.

// multiple values ko key values pair mai rkh skty hn

// Q2.
// Dot notation aur Bracket notation me kya difference hai?

// koi difference nhi

// Dono tarikon se name access karke dikhayein.

// const user = {

// name: "Hasan",

// age: 22

// };

// console.log(user.name);
// console.log(user["name"]);


// Q3.
// Niche diye object ka output batayein.

// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;


// console.log(student);

// Ali
// Karachi

// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?

// Example ke sath explain karein.

// Object.keys() — Sirf keys return karta hai Yani object ki saari property names (keys) ek array mein milengi.

// ["name", "age", "marks"]

// Object.values() — Sirf values return karta hai Yani object ki saari values ek array mein milengi.

// ["Haroon", 22, 85]

// Object.entries() — Keys aur values dono return karta hai Yani har property ki key aur value ko ek alag array mein rakhta hai. Isay array of arrays kehte hain.

// [
//   ["name", "Haroon"],
//   ["age", 22],
//   ["marks", 85]
// ]

// Q5.
// Ek function likhein jo object ke andar total properties count kare.

// const user = {
//     name: "Ali",
//     age: 20,
//     city: "Lahore"
// }

// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// console.log(countProperties(user));


// Section 2 – Arrays (6–10)

// Q6.
// Array aur Object me kya difference hai?

// Array mein hum multiple values ko store karte hain
// Object mein hum data ko key-value pairs ki form mein store karte hain.

// Q7.
// Output predict karein.

// const arr = [10,20,30];

// arr.push(40);
// arr.pop();

// console.log(arr);

// [10,20,30]

// Q8.
// Array ke first aur last element ko print karne ke 2 methods likhein.


// Q9.
// Ek function likhein jo array ka sum return kare.

// function sum(a, b, c) {
//     return a + b + c;
    
    
// }

// let result = sum(10, 20, 30);

// console.log(result);

// Q10.
// Ek array me duplicate values remove karein.

// const duplicatenumbers = [1,2,2,3,4,4,5];

// const numbers = [...new Set(duplicatenumbers)];

// console.log(numbers);

// const duplicatenumbers = [1,2,2,3,4,4,5];

// const numbers = new Set(duplicatenumbers);

// console.log(numbers);


// const duplicatenumbers = [1,2,2,3,4,4,5];

// const numbers = duplicatenumbers.filter((value, index) => {
//     return duplicatenumbers.indexOf(value) === index;
// });

// console.log(numbers);

// Section 3 – Destructuring (11–14)


// Q11.
// Destructuring kya hoti hai?

// JavaScript mein Destructuring ka matlab hai array ya object ke andar se values ko asaani se variables mein nikalna.

// Array aur Object dono ki syntax likhein.

// arr = ["Haroon"];
// obj = {
//     name: "Haroon"
// };

// Q12.
// Output predict karein.

// const colors = ["red","blue","green"];

// const [a,b,c] = colors;

// console.log(b);

// Blue

// Q13.
// Output batayein.

// const user = {
//     name: "Hasan",
//     age: 22
// };

// const {name, age} = user;

// console.log(age);

// 22

// Q14.
// Nested Object destructuring karein.

// const user = {
// name:"Ali",
// address:{
// city:"Karachi"
// }
// };

// City ko destructuring se nikalein.

// const {city} = user.address;

// console.log(city);

// karachi

// Section 5 – Rest & Spread Operator (19–22)

// Q19.
// Rest Operator aur Spread Operator me kya difference hai?

// Rest ka matlab hai baqi values ko jama karna.
// Spread ka matlab hai values ko phailana (expand karna).
// Rest Operator aur Spread Operator dono mein ... use hota hai

// Q20.
// Output predict karein.

// const arr = [10,20,30];
// const newArr = [...arr,40];
// console.log(newArr);

// [10,20,30,40];

// Q21.
// Output batayein.

// function total(...numbers){
//    console.log(numbers);
// }

// total(10,20,30,40);

// [10,20,30,40];


// Q22.
// 2 Objects ko merge karein.

// const obj1 = {
// name:"Ali"
// };

// const obj2 = {
// age:20
// };

// const result = {...obj1, ...obj2} ;

// console.log(result);


// Section 6 – Array Higher Order Methods (23–26)

// Q23.
// map() aur forEach() me kya difference hai?

// map() har element par kaam karta hai aur ek naya array return karta hai.
// forEach() bhi har element par kaam karta hai, lekin khud koi naya array return nahi karta.

// Q24.
// filter() ka use karke sirf even numbers return karein.

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(result);

// Q25.
// reduce() ka use karke array ka total sum nikalein.

// const numbers = [10, 20, 30];

// const result = numbers.reduce((sum, total) => {
//     return  sum + total
// }, 0);

// console.log(result);

// Q26.
// find() aur filter() me kya difference hai?

// find sirf pehla matching element deta h or single elem return krta h
// filter saarey matching elem deta h or new array return krta h

// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.

// call() foran execute krta h arguments alag alag deta h
// apply() foran execute krta h arg array mai deta h
// Bind() naya func return krta h baad mai execute krta h

// Q28.
// Output predict karein.

// const user = {
// name:"Hasan"
// };

// function greet(city){
//    console.log(this.name, city);
// }

// greet.call(user, "Karachi");

// Hasan Karachi

// Q29.
// Output batayein.


// const user = {
// name:"Ali"
// };


// function sayHello(country){

// console.log(this.name, country);

// }

// const result = sayHello.bind(user);


// result("Pakistan");

// Ali Pakistan

// const user = {
//     name : "Haroon"
// };

// function sayHello(country) {
//     console.log(this.name, country);
    
// }

// sayHello.apply(user, ["Karachi"]);

// Final Mixed Question (30)

// Q30.
// Niche diye code ka exact output likhein aur har line explain karein.

// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };

// const copy = {

// ...user

// };


// copy.skills.push("JavaScript");

// console.log(user);

// console.log(copy);


// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };

// const shallowCopy = Object.assign({}, user);

// console.log(shallowCopy);
// console.log(user);

// Is code me Shallow Copy hui hai ya Deep Copy?

// Shallow copy ui hai

// Is problem ko Deep Copy se kaise solve karenge?


//  let user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };


// const deepCopy = JSON.parse(JSON.stringify(user));

// deepCopy.name = "Haroon"

// console.log(deepCopy);
// console.log(user);

// Agar structuredClone() use karein to output me kya farq padega?

// kuch farq nhi parega

//  let user = {

// name: "Hasan",

// skills: ["HTML", "CSS"],

// address : {
//     city : "Karachi"
// }

// };

// let user1 = structuredClone(user);

// user1.address.city = "Lahore";

// console.log(user);
// console.log(user1);

