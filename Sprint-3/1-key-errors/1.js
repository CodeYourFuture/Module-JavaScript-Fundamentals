// Predict and explain first...
// Why will an error occur when this program runs?
// Prediction: SyntaxError — decimalNumber is a parameter and is redeclared with const inside the function.
// Also, console.log(decimalNumber) outside the function would cause ReferenceError (not in that scope).

// Explanation:
// 1) You cannot declare const decimalNumber when decimalNumber is already a parameter in the same scope.
// 2) decimalNumber only exists inside the function, so logging it outside fails.
// Fix: use the parameter (do not reassign it) and call the function in console.log.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

