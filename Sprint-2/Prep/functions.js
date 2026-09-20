console.log("In this exercise I will be learning different functions, and preactising them. ")

let userName = "Matthew"
let location = "Manchester"
let favoriteFood = "Jollof rice"

function myInfo(userName, location, favoriteFood) {
    console.log(`My name is ${userName}` )
    console.log(`I live in ${location}` )
    console.log(`My favorite food is ${favoriteFood}` )
}
myInfo(userName, location, favoriteFood)

sliceUserName = userName.slice(0, 4)
console.log(`My friends love to call me ${sliceUserName}`)

sliceLocation = location.lastIndexOf("h")
console.log(sliceLocation)

const number1 = "50"
const number2 = "100"
const result = Number(number1) + Number(number2)
console.log(result)

let hobby = "I love football and traveling"
let moreHobby = hobby.replaceAll("football", "swiming").replaceAll("traveling", "hiking")
console.log(moreHobby)

const passion = hobby.substring(6, 15)
console.log(passion)

const luckyNumber = "7"
const changeNumber = luckyNumber.padStart(5, "0")
console.log(changeNumber)

const anotherNumber = luckyNumber.padEnd(5, "0")
console.log(anotherNumber)