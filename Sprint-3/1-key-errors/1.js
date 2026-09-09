// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because `decimalNumber` is declared twice
// inside the function: once as a parameter and again using `const`.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function already has a parameter called decimalNumber.
// The line const decimalNumber = 0.5 tries to declare another variable with the same name in the same scope.
// JavaScript does not allow this, so a SyntaxError occurs.
// There is also another problem: decimalNumber only exists inside the function, so console.log(decimalNumber) outside the function would cause a ReferenceError.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
