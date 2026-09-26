// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Answer below:
// There is a constant variable num with value 103, the code should print last digit of the constant variable.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Answer below:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3


// Explain why the output is the way it is
// =============> write your explanation here
// Answer below:
// The code kept repeating same value for all log because of the constant variable decleared before the function and used inside the function.

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

// Answer below:

// The global constant variable outside the function has affected the code and caused it to always reference the last number of the global variable
// To fix this, getLastDigit needed its own parameter, so num comes from whatever you pass in