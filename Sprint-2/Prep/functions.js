console.log("In this exercise I will be learning different functions, and preactising them. ");

let userName = "Matthew";
let location = "Manchester";
let favoriteFood = "Jollof rice";

function myInfo(userName, location, favoriteFood) {
    console.log(`My name is ${userName}` )
    console.log(`I live in ${location}` )
    console.log(`My favorite food is ${favoriteFood}` )
};
myInfo(userName, location, favoriteFood);

sliceUserName = userName.slice(0, 4);
console.log(`My friends love to call me ${sliceUserName}`);

sliceLocation = location.lastIndexOf("h");
console.log(sliceLocation);

const number1 = "50";
const number2 = "100";
const result = Number(number1) + Number(number2);
console.log(result);

let hobby = "I love football and traveling";
let moreHobby = hobby.replaceAll("football", "swiming").replaceAll("traveling", "hiking");
console.log(moreHobby);

const passion = hobby.substring(6, 15);
console.log(passion);

const luckyNumber = "7";
const changeNumber = luckyNumber.padStart(5, "0");
console.log(changeNumber);

const anotherNumber = luckyNumber.padEnd(5, "0");
console.log(anotherNumber);

const carPrice = 30000.50;
const updatedCarPrice = Math.floor(carPrice);
console.log(updatedCarPrice);

const addNumber = 20;
const addNumber2 = 30;
const addNumber3 = addNumber + addNumber2;
const addNumberResult = Math.random() * addNumber3
console.log(addNumberResult);

const repeatedText = "one, two, three";
const lastOnePosition = repeatedText.lastIndexOf("one");
console.log(lastOnePosition);

// const yourName = prompt("Please enter your name: ");
// const yourLocation = prompt("Please enter your location: ");
// const yourHobby = prompt("Enter your hobby: ");
// const yourFavoriteFood = prompt("Please enter your favorite food: ")

// function userInfo(yourName, yourLocation, yourHobby, yourFavoriteFood) {
//     console.log(`Your name is ${yourName}`)
//     console.log(`You live in ${yourLocation}`)
//     console.log(`Your hobby is ${yourHobby}`)
//     console.log(`Your favorite food is ${yourFavoriteFood}`)
// }

// userInfo(yourName, yourLocation, yourHobby, yourFavoriteFood)
// Chrome devOps prompt function, variable and parameters
