// Predict and explain first...

// I predict the result will be undefined because the return statement
// does not return the result of a + b.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The function returns immediately when it reaches the return statement.
// Because there is no value after return, the function returns undefined.
// The line a + b is never reached.

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);