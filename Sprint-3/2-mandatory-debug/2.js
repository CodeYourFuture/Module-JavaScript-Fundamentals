// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// =============> Prediction: The code will print '3' for all three log statements instead of '2', '5', and '6'.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// =============> Output: The last digit of 42 is 3 The last digit of 105 is 3 The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// =============> Explanation: The function getLastDigit() was defined without  parameters, so JavaScript ignored the arguments (42, 105, 806)  passed during the function calls. Instead, the function continuously accessed the global variable num (103), converted it to a string, and sliced off the last character ('3') every time.
 
// Finally, correct the code to fix the problem

// =============> Fix: Pass a parameter into getLastDigit so it receives the inputs, and use that parameter inside the function body instead of the outer variable. 
// =============> write your new code here

// const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);  // output The last digit of 42 is 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // output The last digit of 105 is 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // output The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


