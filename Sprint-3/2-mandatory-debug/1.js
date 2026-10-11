// Predict and explain first...
//  =============> write your prediction here:This is the error:The sum of 10 and 32 is undefined.
// The code will run without a syntax error, but it will return undefined instead of 42.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here:
//The problem is that return; immediately ends the function://return;
//a + b;

//if we write anything after return(next line)is unreachable, so a + b doesn't run. The function therefore returns undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
