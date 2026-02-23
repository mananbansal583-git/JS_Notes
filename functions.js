function myFunction() {
  console.log("Welcome!!");
  console.log("I am learning JS :)");
}
myFunction(); //function protect us from redundancy (repeat rate)

function myfun(msg) {
  //msg = parameter -> input
  console.log(msg);
}
myfun("Manan Bansal"); //Manan Bansal -> argument

//function for sum of two numbers
function sum(a, b) {
  console.log(a + b);
}
sum(6, 7);
//ORRRR
function another_sum(x, y) {
  s = x + y;
  return s;
}
let val = another_sum(6, 7);
console.log(val);
//agar return statement use karni hai to vo value return karta hai and use print karwane ke liye you have to store it in variable outside the function and print it , and return ke baad kuch bhi likh do vo execute nhi hoga

//and jo yeh parameters hai vo sirf function block tak hi valid hai function/scope ke baad they are not accessible

//sum using arrow function -> part of modern JS

const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(3, 4));

//multiplication using arrow function
const arrowMult = (a, b) => {
  return a * b;
};
console.log(arrowMult(3, 4));

//function that counts vowel
function count_vowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
count_vowel("apnacollege");

//forEach method
//syntax is arr.forEach(callBackFunction)
//in JS we can pass function as parameters

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  //value at each idx
  console.log(val);
});
//ORRRR

let arr1 = ["pune", "mumbai", "delhi"];
arr1.forEach((val, idx, arr1) => {
  console.log(val.toUpperCase(), idx, arr1);
});

//what are higher order function/methods -> forEach is higher order function , they are that takes function as a parameter , or returns fucntions as a value

//Print the square of each no in array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((val) => {
  console.log(val * val);
});

//Some more array methods
//1.Map -> creates a new array with the result of some operations . The value its callback returns are used to form new array , very similar to forEach but difference it returns new array and forEach gives only values

let num1 = [34, 56, 67];
let newArray = num1.map((val) => {
  return val * val;
});
console.log(newArray);

//2. Filter -> Creates a new array that gives true for condition/filter

let arr2 = [1, 34, 65, 44, 64];
let newArr = arr2.filter((val) => {
  return val % 2 == 0;
});
console.log(newArr);

//3. Reduce -> Performs some operations & reduce the array to a single value . It returns that single value
let arr3 = [1, 2, 3, 4];
const output = arr3.reduce((res, curr) => {
  return res + curr;
});
console.log(output);

//finding largest is simpler with reduce
let arr4 = [1, 5, 6, 3, 8];
const out = arr4.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(out);

//Take a number n as input from user. Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.
let n = 5;
let arr5 = [];

for (let i = 1; i <= n; i++) {
  arr5[i - 1] = i;
}
const sum1 = arr5.reduce((res, curr) => {
  return res + curr;
});
console.log(sum1);

const prod = arr5.reduce((res, curr) => {
  return res * curr;
});
console.log(prod);
