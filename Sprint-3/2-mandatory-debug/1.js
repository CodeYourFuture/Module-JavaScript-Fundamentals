// Predict and explain first...
// The function will not return the expected result because whilst sum takes in two arguments it cannot add a+b together because it hasn't been stored in a variable before return so when we call sum it will be undefined?

//function sum(a, b) {
//  return;
// a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
//console output: The sum of 10 and 32 is undefined
//The return statement was placed before the calculation the code on line 6 doesn't get executed as return ends the function on line 5. The function would need to return a+b in order for it to return the result.
//Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
