// Predict and explain first...
//  =============> write your prediction here
// it will print the following: `The sum of 10 and 32 is undefined'

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// the function sum doesn't return any value. The arithmetic operation doesn't execute because it's defined after 'return'
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
