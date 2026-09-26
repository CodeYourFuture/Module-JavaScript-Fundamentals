// Predict and explain first...

// =============> write your prediction here
// It will probably print 320 so it will multiply the 10 by 32 and then undefined because the multiply() is not returning anything

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function prints 320, but because there is no return statement, multiply(10, 32) evaluates to undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
