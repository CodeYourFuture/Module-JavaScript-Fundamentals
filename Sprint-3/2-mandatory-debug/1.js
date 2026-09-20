// Predict and explain first...
//  =============> write your prediction here
// Answer: I predict that what happens is `The sum of 10 and 32 is undefined` gets logged to the console.
// That is because even though the function sum has a return statement, it doesn't return anything. There
// is a value that is meant to be returned below the return statement, but because the function already returned
// it will never reach that line in execution. That is why it is greyed out.

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// Answer: Running the code logged "The sum of 10 and 32 is undefined" like I thought. I will fix the problem
// by moving a + b; in the function body to be on the same line as return, so it gets returned instead of undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Answer: now "The sum of 10 and 32 is 42" is logged.
