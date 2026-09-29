// Predict and explain first...
// Answer below:
// The code needs a value inside the console.log function to multiply, but no value was useed to replace the placeholder parameters
// It should be an error, no value to return

// =============> write your prediction here

// function multiply(a, b) {
//   console.log(a * b);
// }
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// =============> write your explanation here
// Answer below:
// The original logs the product instead of returning it, so the function call inside the template string gives undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
