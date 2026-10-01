// Predict and explain first...

// I predict the multiplication will calculate 320,
// but the final message will show undefined because the function
// logs the result instead of returning it.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The multiply function uses console.log() to display the result,
// but it does not return a value.
// A function without a return statement returns undefined.
// This is why the final message contains undefined.

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);