// Predict and explain first...
//  =============> write your prediction here
// I predict that the output of the console.log statement will be "The sum of 10 and 32 
// is undefined" because the sum function does not return a value, it only has a return 
// statement without any value.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// The sum function takes two parameters, a and b, and has a return statement without
// any value. This means that when the function is called, it will return undefined. 
// Therefore, when the function is called inside the template literal, it returns 
// undefined, which is why the output of the console.log statement includes "undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
