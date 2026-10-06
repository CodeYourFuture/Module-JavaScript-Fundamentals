// Predict and explain first...

// Prediction: I predict that the function will print 320,
// but the final message will say undefined because the function
// does not return the result.

// =============> write your prediction here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Explanation: console.log() displays a value on the screen,
// but return sends a value back from the function.
// The original function used console.log() instead of return,
// so the function returned undefined.

// Finally, correct the code to fix the problem
// =============> write your new code here

// The corrected function returns the result of multiplying a and b.