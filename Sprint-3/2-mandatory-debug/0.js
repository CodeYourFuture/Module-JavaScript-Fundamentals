// Predict and explain first...

// =============> write your prediction here

// =============> Prediction: The function will log 320 to the terminal when called, but the template string will evaluate to "The result of multiplying 10 and 32 is undefined" because the function does not return a value but rather 'console.log(a * b)'.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here 

// =============> Explanation: When I logged the code in my console, I got this message(The result of multiplying 10 and 32 is undefined). This is because, in JavaScript, every function returns 'undefined' by default unless a 'return' keyword is directly used. Calling console.log() inside a function only outputs to the console without passing a value back. Replacing console.log() with return inside the function body allows the calculated result (320) to be passed directly into the template string.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // output 320