// Predict and explain first...
// ===========> I predict the result will be undefined because the function returns before adding the numbers.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// ===========> The function returns before a + b is calculated, so the result is undefined.
// Finally, correct the code to fix the problem
// ===========> Changed the return statement so it returns a + b.
