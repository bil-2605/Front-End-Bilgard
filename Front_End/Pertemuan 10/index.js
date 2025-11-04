//Rest Parameter & Spread Operator
//1. Rest Parameter

// //Function tanpa Rest parameter
// const funct1 = (param1, param2, param3, param4, param5) => {
//     console.log(param1, param2, param3, param4, param5) ;
//     let hasil = 0;
//     arr.forEach((item)) => (hasil +=));
//     console.log(arr);
// };


//a. rest parameter bertipe Array
//b. rest parameter harus ada di terakhir dari parameter list
funct1("A", "B", "C", "D", "E");

const funct1 = (param1, param2, ...Rest) => {
    let hasil = 0;
    rest.forEach((item) => (hasil += item));
    console.log(hasil);
};

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

//2. Spread 
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(...numbers);

//Kegunaan SPerad Operator pada Array
//1. Duplikasi array
numbers.push(6);
const numbers2 = [... numbers];
console.log(numbers2);
//2. Menggabungkan Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combinerArr1 = arrr1.concat(arr2, arr3);
console.log(combinerArr1);
let combinerArr2 = [...arr1,...arr2,...arr3];
console.log(combinerArr2);

//Kegunaaan Spread Operator pada object
//1. Duplikasi Object
const student1 = {
    firstName: "Jhon",
    status: "Active",
};

const student2 ={ ...student1, addreas: "Manado"  };
console.log(student2);

//2. Menggabungkan Object
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const combineObj = { ...obj1, onj2 };
console.log(combineObj);
