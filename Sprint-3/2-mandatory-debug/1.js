// Predict and explain first...

// Prediction: I predict that the function will return undefined
// because return stops the function before a + b can be calculated.

//  =============> write your prediction here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Explanation: The original code used return on its own line.
// When JavaScript reaches return, the function stops and returns
// undefined. The line a + b is therefore never used.
// We need to return a + b together.

// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here