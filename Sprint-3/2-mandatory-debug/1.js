// Predict and explain first...
// Prediction: The output will say undefined because return exits the function
// before the addition expression can run.

function sumBeforeFix(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sumBeforeFix(10, 32)}`);

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Observed before the fix: undefined.
// Explanation: A newline immediately after return ends the return statement.
// The function returns undefined and the following expression is unreachable.
// Finally, correct the code to fix the problem
// The corrected function above returns the sum.
