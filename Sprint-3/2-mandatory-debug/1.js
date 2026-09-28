// Predict and explain first...
//  =============> I think the position of return inside the function is wrong
//probably it is show nothing

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); */

// =============> write your explanation here
// After running code it is show "The sum of 10 and 32 is undefined"
// because return has no value so it return undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
