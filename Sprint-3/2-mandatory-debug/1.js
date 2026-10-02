// Predict and explain first...
//  =============> write your prediction here
// The return and a + b are on 2 different lines leading to a syntax error. The sum fuctions does not work like this.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

//The code runs but gives undefined in the console when we call the sum(10, 32). The return function is not defined. We must define it a + b so that when we call it, it give the sum of the 2 values
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);