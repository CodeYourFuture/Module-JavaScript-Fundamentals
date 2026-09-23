// Predict and explain first...
//  =============> write your prediction here
// I dont think the code will run at all since the return is separated from the sum that should happen
// the console.log() oustide the function will say the sum is undefined.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The sum of 10 and 32 is undefined
// I was wrong, I thought that the code would not run.
// The output says the sum is undefined because the return statement and the "a + b" are separated by ; 
// To fix it, I just need to remove the ; next to return on line 7.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);