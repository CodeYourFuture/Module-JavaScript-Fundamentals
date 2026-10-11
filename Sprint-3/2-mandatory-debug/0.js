// Predict and explain first...

// =============> write your prediction here:
//The code will run, but the output won't be what we expect because the multiply function logs the result instead of returning it.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here:console.log(a * b);
//The result is 320, but the function doesn't return a value. It shows us undefined because we don't have return in the function.
//320
//The result of multiplying 10 and 32 is undefined
// Finally, correct the code to fix the problem
//  =============> write your new code here:
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
