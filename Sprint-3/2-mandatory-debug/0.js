// Predict and explain first...

// =============> write your prediction here
// Answer: I predict the console will log first 320, and then on a new line "The result of multiplying 10 and 32 is ${NaN}"
// This is because the function logs the result in it's body, so it will log it first as it is run, but
// because it's not explicitly returning anything, it will just return NaN into the string literal logged at the end.

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// Answer: In reality, I was almost correct, but the function returned undefined, not NaN, so it logged
// 320, and then The result of multiplying 10 and 32 is undefined. Oh and also of course the string
// interpolation brackets weren't included in the logged string like I had predicted.
// I will fix the problem by returning a * b in the function body, instead of logging it.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
