// Predict and explain first...
//  =============> write your prediction here
// I predict "The sum of 10 and 32 is undefined", because return is on its own line
// and a + b is on the next line.

// function sum(a, b) {
//   return;
//   a + b;
// }
//
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Actual output: The sum of 10 and 32 is undefined
// return; with nothing after it ends the function immediately and returns undefined.
// The line a + b is never reached. return must be followed by the value on the same line.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// The sum of 10 and 32 is 42