// Predict and explain first...
//  =============> write your prediction here

// it will return syntax error

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// There is a semicolon after return.

// Finally, correct the code to fix the problem.
// Later I discovered having a line between return and a + b gives another undefined error message
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

