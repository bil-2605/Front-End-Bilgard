//Nama: Bryan Miracles Manueke
//Exercise #01
//Buatlah program untuk menghitung BMI dimana menggunakan 
//1. IIFE
//2. Callback Fu6nction
//yang memiliki parameter dan return value  

// 1. IIFE
let bmiIIFE = (function(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return "BMI anda: " + bmi;
})(60, 1.7);
console.log(bmiIIFE);

// 2. Callback Function
function hitungBMI(berat, tinggi, callback){
    return callback(berat, tinggi);
}

let bmiCallback = hitungBMI(60, 1.7, function(berat, tinggi){
    return "BMI anda: " + (berat / (tinggi * tinggi));
});
console.log(bmiCallback);



