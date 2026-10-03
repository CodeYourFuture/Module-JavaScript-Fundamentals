// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I predict that the output of the console.log statements will be "The last digit of 42 is 3", 
// "The last digit of 105 is 3", and "The last digit of 806 is 3" because the getLastDigit 
// function always returns the last digit of the number 103, which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The getLastDigit function is not working properly because it always returns the last 
// digit of the number 103, regardless of the input. This is because the function does not 
// take any parameters and uses a global variable.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The getLastDigit function is not working properly because it does not take any parameters
// and uses a global variable. To fix the problem, we need to add a parameter to the function 
// so that it can take in a number and return the last digit of that number.