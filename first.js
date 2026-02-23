// console.log("Hello World!")
// console.log("Manan Bansal")
// console.log("I love JavaScript")
// let x=BigInt("123")
// let y=Symbol("Hello World!")
// let student1 ={
//     fullName : "Manan Bansal",
//     age :18,
//     cgpa : 9.5,
//     isPass : true,
// };
// student1["name"]="Manan"
// student1["age"]=student1["age"]+1
// console.log(student1)
// console.log(student1["age"]);
// console.log(student1.age);
// console.log(typeof(student1))

// const Profile ={
//     fullName: "Shardha Khapra",
//     Posts: 195,
//     followers: 569000,
//     following: 4,
// }
// console.log(Profile)
// console.log(typeof Profile["fullName"])


// //conditional statement
// //Syntax
// let age = 19
// if (age > 18)
// {
//     console.log("Yeah you are eligible to vote")
// }
// else if (age == 18)
// {
//     console.log("You are eligible to vote ")
// }
// else
// {
//     console.log("You are not eligible to vote")
// }

// mode = "dark"
// if (mode === "dark") console.log(mode); //This will also work but only if you have to give one condition only but it is not a good practice

// /*Ternary operator  , it takes 3 operands
// a ? b : c
// a = condition
// b= if true then apply
// c= if not true then apply
// */

// let result = age >= 18 ? "adult" : "not adult"
// console.log(result);



// // in JS we have prompt and alert
// alert("Hello World");  //this is one time popup
// fullName=prompt("Enter your name") //this is also one time popup but it take input as well
// console.log("Hello",fullName)

// n = prompt("Enter a number : ");
// if (n % 5 ==0)
// {
//     console.log("It is divisible by 5")
// }
// else
// {
//     console.log("It is not divisible by 5")
// }


// //grading system
// let score = prompt("Enter your score :");
// let grade;

// if (score >= 90 && score <= 100)
// {
//     grade = "A";
// }
// else if (score >=70 && score <= 89)
// {
//     grade = "B"
// }
// else if (score >= 60 && score <= 69)
// {
//     grade = "C"
// }
// else
// {
//     grade = "F"
// }
// console.log("According to your score , your grade was : ",grade)

// LOOPS

// //for loop

// for (let i = 1 ; i <= 5 ; i++)
// {
//     console.log(i);
// }

// console.log("Loop has ended")

// let sum = 0
// for (let i = 1 ; i <= 10 ; i++)
// {
//     sum += i;
// }
// console.log(sum)

// //while loop

// let i = 1 ;
// while (i <= 5)
// {
//     console.log("i =",i)
//     i++;
// }

// //do while loop

// let j = 20;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);

// //for-of loop
// //it is for string and arrays

// let str1 = "MananBansal"
// for (let i of str1)  //iterators -> characters
// {
//     console.log(i)
// }

// //for-in loop
// //it is for objects

// let student ={
//     fullName : "Manan Bansal",
//     age : 18,
//     college : "Chitkara University",
//     cgpa : 9.5
// };
// for (let key in student)
// {
//     console.log("key =", key , ";" ,"value =", student[key]);
// }


// //game of number guessing
// let gameNum = 17;
// let userNum = prompt("Guess the game number :");

// while (gameNum != userNum){
//     userNum = prompt("You entered the wrong number . Guess again :");  //input in prompt come in string format
// }
// console.log("Congratulations ! , You entered the correct number")

// //template literals
// let specialStrings = `This is a template literals`
// console.log(specialStrings)

// let obj ={
//     item : "pen",
//     cost : 10
// };
// console.log("The cost of",obj.item,"is",obj.cost,"rupees");
// console.log(`The cost of ${obj.item} is ${obj.cost} rupees`)  //this is done with template literals otherwise is no diff between string and TL , this ${expression} is known as string interpolation
// console.log(`Sum of numbers are : ${1+2+3}`)
// //escape characters are \n -> next line , \t -> tab space , escape char also count in str length but it is considered as one word
// console.log("MananBansal".length) //space is also considered in length
// console.log("Manan\tBansal".length)
// let str="  Manan Bansal"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim()) //removes whitespaces only from start and end
// //this methods don't change the old string it creates the new string , they are IMMUTABLE
// /*string methods
// str.slice(start,end?) //returns part of string , end index is non inclusive
// str1.concat(str1) //joins str2 to str1 , this returns new string not change the existing
// str.replace(searchVal,newVal)
// str.charAt(idx)
// */
// str1 = "Manan";
// str2 = "Bansal";
// res = str1.concat(str2);  //or str1 + str2 will also work same
// console.log(res)

// str1 = "hellololo"
// console.log(str1.replace("lo","p"))  //it will replace first matching value not all
// console.log(str1.replaceAll("lo","p"))  //it will replace all
// console.log(str1.charAt(1))
// //generally strings are immutable we can't change them directly but with methods we can

// fullName=prompt("Enter your full name")
// console.log(`${"@"}${fullName}${fullName.length}`)


// //arrays
// let marks=[99,89,79,69,59]
// console.log(marks)
// console.log(marks.length) //property

// //arrays is a special type of "object"

// for (let i = 0 ; i <= marks.length ; i++){
//     console.log(marks[i])
// }

// for (let el of marks){
//     console.log(el)
// }

// sum = 0
// let marks1 = [85,97,44,37,76,60]
// for (let i of marks1){
//     sum += i;

// }
// console.log(sum/marks1.length)

// /*array methods
// push() -> add to end , changes in original array
// pop() -> delete from end and return , change in original array
// toString() -> converts array to string , no change in original array , it return single string
// concat() -> join multiple arrays & return results , new array
// unshift() -> add to start
// shift() -> delete from return and start
// */
//  let marvelHeroes = ["thor", "spiderman" , "ironman"];
//  let dcHeroes = ["superman" , "batman"]
//  let heroes = marvelHeroes.concat(dcHeroes)   //it will be the new array
//  console.log(heroes)
//  marvelHeroes.unshift("Antman");
//  console.log(marvelHeroes);   //it only add in front
//  let val = marvelHeroes.shift()    //it only remove from starting
//  console.log("deleted",val);

//  let numbers = [0,1,2,3,4,5,6,7,8,9];
//  console.log(numbers.slice(0,3));
//  console.log(numbers.slice(0));
//  numbers.splice(1,5,11,12);
//  console.log(numbers)




