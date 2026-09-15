// Predict and explain first...
//  =============> write your prediction here
// the function is returned without calculating anything, and as we know after return, the function stops executing and anything after return is not executable. so it will throw undefined.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the function has to also return a value or the output in order to use this same value in the global scope.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
