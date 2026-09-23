// Predict and explain first...
//  =============> write your prediction here
// I guess the function will return error or undefined because the return; 

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); */

// =============> write your explanation here
// The problem is the semicolon immediately after return that prevent to reach out to a + b

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
