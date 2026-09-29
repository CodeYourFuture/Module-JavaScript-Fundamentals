// Predict and explain first...
// There will be another syntax error, because the same name is used for both the parameter and the variable
// (decimalNumber)

// Why will an error occur when this program runs?
// =============>
// We cannot redeclare a variable with the same name in the same scope.

// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
*/
// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.8));
