//program to combine two objects
const obj1 = {
  title: "Manan",
  age: 18,
};
const obj2 = {
  title1: "Shruti",
  age1: 19,
};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


//if we use same parameters then we only got last one we cannot use same parameters while combining two obj

//program to remove all elements in one statement
const arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;
console.log(arr);

//rest parameters
function sumAll(...numbers) {
  let total = 0;
  for (const num of numbers) { // 'numbers' is a real array, so you can iterate over it
    total += num;
  }
  return total;
}
console.log(sumAll(1, 2, 3));        
console.log(sumAll(1, 2, 3, 4, 5));
