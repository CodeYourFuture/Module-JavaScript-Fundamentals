// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict a SyntaxError, because decimalNumber is the parameter and is declared
// again inside the function with const.
// Even after fixing that, console.log(decimalNumber) is outside the function, where
// decimalNumber does not exist, so it would cause a ReferenceError.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//
//   return percentage;
// }
//
// console.log(decimalNumber);

// =============> write your explanation here
// First error: SyntaxError: Identifier 'decimalNumber' has already been declared.
// The parameter already declares decimalNumber in the function's scope, so const
// cannot declare it again. The hardcoded 0.5 would also ignore whatever value was passed in.
//
// Second error (after removing the const line): ReferenceError: decimalNumber is not defined.
// Parameters only exist inside the function's local scope. Outside the function we
// should call the function and log its return value instead.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // 50%
