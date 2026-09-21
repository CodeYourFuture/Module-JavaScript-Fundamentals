// Predict and explain first...
// =============> write your prediction here
  //- "a and b" are defined as parameters and receive 10 and 32. The function calculates and logs 320, but it doesn't return the value. Because there is no return, the function call evaluates to undefined.

  // function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
  //- Added a return statement so the function returns the result to the function call. The console.log() is just printing 320 and function doesn't give 320 back and thats why "${multiply(10, 32)}" gets undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
   return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);