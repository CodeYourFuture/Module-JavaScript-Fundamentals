// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// There have the problem of redeclaration of the statement of decimalNumber. Local Scope should return to decimalNumber instead.
// To print the code, the code should be console.log(decimalNumber)

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;

//console.log(decimalNumber);

// =============> write your explanation here
// In the local scope, remove "const decimalNumber = 0.5". for the second line of local scope, 'const percentage' should be change to
//'decimalNumber' to avoid redeclaration and refer the correct variable. and return the function to 'decimalNumber'
//finally console.log(convertToPercentage(0.5)) should be used to print the function.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = `${decimalNumber * 100}%`;

  return decimalNumber;
}

console.log(convertToPercentage(0.5));
