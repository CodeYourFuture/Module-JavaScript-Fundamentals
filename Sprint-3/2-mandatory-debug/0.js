// Predict and explain first...

// =============> write your prediction here
// I believe the function will calculate 10 x 32

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// After calling multiply(10, 32), the result is undefined because there is no return statement
// It can still print 320 because console.log() prints the result inside the function

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  console.log(a * b);
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
