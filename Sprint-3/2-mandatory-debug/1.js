// Predict and explain first...
//  =============> return on its own means that the function ends without returning a value, so the result is undefined.
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// return on it's own means that the function wont refer to parameters and will come up as undefined. a+ b is never reached because it comes after return.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b
};

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
