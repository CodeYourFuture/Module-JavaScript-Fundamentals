// Predict and explain first...

// =============> write your prediction here
// It will print 2 lines:
// (10*32=320) line 1: 320
// line 2: The result of multiplying 10 and 32 is undefined

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// There are two console.log() being called.
// The one inside the funtion prints the result of the multiplication
// The one outside the function prints the desired result of the whole string but there is no return from the function so it is undefined
// The result of multiplying 10 and 32 is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
