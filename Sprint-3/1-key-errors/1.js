// Predict and explain first...
// Why will an error occur when this program runs?
//  ==============> write your prediction here
// I predict this will throw a SyntaxError, because 'decimalNumber' is being
// redeclared with 'const' inside the function, even though it's already the
// function's parameter.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// ==============> write your explanation here
// 'decimalNumber' was already declared as the function's parameter. The
// original code tried to declare another variable with the same name using
// 'const decimalNumber = 0.5;', which caused a naming collision — JavaScript
// doesn't allow redeclaring a variable in the same scope. This threw a
// SyntaxError before the function could run.
//
// There was also a second issue: the original 'console.log(decimalNumber);'
// was outside the function, so 'decimalNumber' didn't exist there (it's
// scoped only inside 'convertToPercentage'), and the function was never
// actually called. The fix removes the duplicate declaration and calls
// convertToPercentage(0.5) directly, logging its return value instead.

// Finally, correct the code to fix the problem
// ==============> write your new code here
// (the fixed function above already satisfies this)