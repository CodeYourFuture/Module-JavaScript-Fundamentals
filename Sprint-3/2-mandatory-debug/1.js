// Predict and explain first....
//  =============> write your prediction here
// I think code will run without an error although not entirely sure what the empty return; will return

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statement was placed before the expression hence the undefined outcome. The parsed argument is not receiving output.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
