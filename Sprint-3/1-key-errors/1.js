// Predict and explain first...

// Why will an error occur when this program runs?
// =============> SyntaxError will occurs

// Try playing computer with the example to work out what is going on

// =============> decimalNumber first declared as parameter, it cannot be reassigned as const.
// Also, console.log try to run decimalNumber as a variable while decimalNumber was assigned as a parameter.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5));
