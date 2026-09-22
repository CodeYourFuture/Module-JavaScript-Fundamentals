// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict the output would print the last digits of '42', '105', and '806' because the function name is 'getLastDigit' and it's been called by the input values as arguments

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The bug is in line 9, where 'getLastDigit()' is declared with no parameters
// Instead the function body reaches out to 'const num = 103' and disregards the values passed because the function does not declare any parameter 

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
