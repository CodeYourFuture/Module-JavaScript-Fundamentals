// Predict and explain first...

// =============> write your prediction here
// I predict that the output of the console.log statement will be "The result of multiplying
//  10 and 32 is undefined" because the multiply function does not return a value, it only 
// logs the result to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The multiply function takes two parameters, a and b, and logs the product of a and b to 
// the console. However, it does not return any value. When the function is called inside 
// the template literal, it returns undefined, which is why the output of the console.log 
// statement includes "undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
