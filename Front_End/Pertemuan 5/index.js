// //IIFE & Callback Function
// // 1. IIFE (Imediately Invoked Function Expression)
// //    Sel-Executing anonymous Function
// (function (fullname) {
//     console.log("Hello World " + fullname);
// })("jhon");

// console.log(output);

// IFFE & Callback Function
// 2. Callback 
// function passed into another function as an argument 

function greetings(callback){
    callback();
}
// callback function must be anonymous funciton
greetings(function (){
    console.log("hello world callback");
});

//callback with parameter & return value
function greetings(callback) {
    return callback("jhon");   // perlu return agar hasilnya bisa ditangkap
}
//callback function must be anonymous function
let output = greetings(function (fullname) {
    return "Hello " + fullname;
});
console.log(output)


//Exercise #01
//Buatlah program untuk menghitung BMI dimana menggunakan 
//1. IIFE
//2. Callback Function
//yang memiliki parameter dan return value  