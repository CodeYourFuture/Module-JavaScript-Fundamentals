// Predict and explain first...

// Predict the output of the following code:
// =============> The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

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
/*The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*/
// Explain why the output is the way it is
// =============> write your explanation here
//The output is this way as there is a num assigned before the function and function don't use the parameter num,
//so the output would only be the return of slice value for const num before the function.

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
//Function was not working correctly as it was returning num slice for const num that was assigned before the function, function should use parameter num to work correctly.
