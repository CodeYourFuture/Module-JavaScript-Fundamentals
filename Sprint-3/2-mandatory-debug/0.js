// Predict and explain first...

// ===========> I predict the multiplication will print 320, but the final result will show undefined.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// ===========> The function prints the result instead of returning it, so the function returns undefined.

// Finally, correct the code to fix the problem
// ===========> Changed console.log to return so the function returns the multiplication result.
