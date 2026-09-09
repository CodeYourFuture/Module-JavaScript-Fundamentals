// Predict and explain first...

// =============> write your prediction here
// The output will be:
// 320
// The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply(10, 32) runs the function and console.log(a * b) prints 320.
// However, the function does not have a return statement.
// A JavaScript function without a return statement returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
