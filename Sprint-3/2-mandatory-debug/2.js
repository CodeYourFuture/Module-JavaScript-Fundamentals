// Predict and explain first...const num is declared outside the function, so it is not accessible inside the function. This will cause a ReferenceError.
// To fix this, we should pass the number as a parameter to the function and use that parameter inside the function.

// Predict the output of the following code:
// =============> Write your prediction here 3,3,3

//const num = 103;

//function getLastDigit() {
//return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> 2,5,6
// Explain why the output is the way it is
// =============> the output is the way function is called with an argument, so the function is able to access the value of the argument passed to it and return the last digit of that number.
//  The function is not using the variable num declared outside the function, so it does not cause a ReferenceError.
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

const num = 103;

function getLastDigit(n) {
  return n.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
