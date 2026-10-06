// Predict and explain first...
//  =============> I predict the code won't work because there's a ";" after return.

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

/* =============> The sum is undefined because the semicolon after return ends it too early, 
the function returns before adding a and b.*/
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
