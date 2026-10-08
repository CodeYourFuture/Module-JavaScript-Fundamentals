// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict all three lines will say the last digit is 3, because getLastDigit
// has no parameter and always uses the global num, which is 103.

// const num = 103;
//
// function getLastDigit() {
//   return num.toString().slice(-1);
// }
//
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
// getLastDigit is declared with no parameters, so the arguments 42, 105 and 806
// are ignored. Inside the function, num refers to the global constant 103.
// 103.toString() is "103" and .slice(-1) takes the last character, "3", every time.

// Finally, correct the code to fix the problem
// =============> write your new code here
// Give the function a parameter so it uses the number passed in, and remove the global num.
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// It ignored its input because it had no parameter. Adding num as a parameter means
// each call works on the number it was given.
