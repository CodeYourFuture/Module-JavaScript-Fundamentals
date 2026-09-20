// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Answer: I believe that when we run the code we will get a Reference Error, because we are trying to
// call a function getLastDigit with an argument even though the function doesn't have any parameters.
// Or possibly the error might reference num in the function body being undefined.

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// Answer: I was wrong, there was no error message. Instead
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// was logged to the console. There was no Reference Error about num being undefined in the function body
// because num IS defined, just above the function and has global scope, so it is reachable by the function.
// Also, no error was thrown due to calling the function with arguments even though it accepted no parameters.
// This is because JavaScript is a dynamic/forgiving language that rather removes surplus information and keeps
// executing the code than stops it and gives an error message. So any surplus arguments passed into a function
// call just gets ignored. That is why the passed arguments have no effect on the function's return value.
// To make them have effect, I will add a parameter to the function, and call it num. Then when num gets accessed
// in the function body, it will not be the value of the global num, but instead the function-local parameter
// num.

// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// Answer: now it works as expected
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6
