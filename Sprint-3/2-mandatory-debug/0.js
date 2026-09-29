// Predict and explain first...

// Prediction: The multiplication itself prints 320, but the template string
// then shows undefined because multiply does not return the result.

function multiplyBeforeFix(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiplyBeforeFix(10, 32)}`);

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Observed before the fix: 320, then "undefined" in the template string.
// Explanation: console.log displays the product but returns undefined. The
// function call inside the template string therefore evaluates to undefined.

// Finally, correct the code to fix the problem
// The corrected function above returns the product for the template string.
