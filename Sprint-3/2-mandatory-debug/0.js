// Predict and explain first...

// =============> write your prediction here
// I predict it prints 320 on one line, then
// "The result of multiplying 10 and 32 is undefined".
// multiply logs the answer but never returns it.

// function multiply(a, b) {
//   console.log(a * b);
// }
//
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Actual output:
// 320
// The result of multiplying 10 and 32 is undefined
// console.log only prints a value to the terminal; it does not send it back to
// the caller. A function with no return statement returns undefined, so the
// template literal receives undefined. The 320 appears first because multiply
// runs (and logs) while the template literal is being built.

// Finally, correct the code to fix the problem
// =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// The result of multiplying 10 and 32 is 320