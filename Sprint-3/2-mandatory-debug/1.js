// Predict and explain first...
//  =============> write your prediction here
// The result of the function supposed to print 'The sum of 10 and 32 is 42' local scope should be return to sum.

//function sum(a, b) {
//  return;
//  a + b;
//}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the answer is undefined because of local scope code did not return to global (sum). semicolon of return need to be removed.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
