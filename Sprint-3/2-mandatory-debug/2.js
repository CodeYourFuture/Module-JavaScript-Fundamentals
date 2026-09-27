// Predict and explain first...
// we want to get the last digit of the number value 103

// Predict the output of the following code:
//I think it will give us the wrong answer due to not specifying the actual result of what we want which is the lastDigit.

// =============> Write your prediction here

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction

//This is the answer that i received , which is different from my initial thought.
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// =============> write the output here
// Explain why the output is the way it is
//the output is the same for all three due to the function always using the value 103.

// =============> write your explanation here
// By creating a constant to the value of 103 the number will always calculate the const. and this is, is not what the function wants us to do, so we would have to remove it.
//function -getLastDigit don't have a parameters which means that the other three values 42, 105, 806 will not be received by the function.
//this means we need to give the function a parameter.
//numToString changes the number into a string, this is so we can use the .slice() method.
//.slice(-1) will give us the last character.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
