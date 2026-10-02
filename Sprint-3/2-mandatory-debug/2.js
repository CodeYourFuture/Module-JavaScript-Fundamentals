// Predict and explain first
// As per the code output should be the last digits of the given number .

// Predict the output of the following code:
// =============> Write your prediction here
//
// The output always be 3 3 3 3 3 3 3 but i thought output should be the last digits.

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
// In this variable num is constant and there is no any declaration in function name. Due to this reasons result always be 3.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
	return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit  each number.
// Explain why getLastDigit is not working properly - correct the problem
// To solve this problems we need to write variable in function.
