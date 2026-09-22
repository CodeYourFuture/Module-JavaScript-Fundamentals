// Predict and explain first...
// My prediction is the program would throw a SyntaxError, because 'decimalNumber' has already been declared as a parameter and also has been declared as a new variable in the same scope

// Why will an error occur when this program runs?
// =============> write your prediction here
//An error will occur because 'const decimalNumber = 0.5' clashes with the parameter of the same name. 

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   // The parameter 'decimalNumber' is created as a variable inside the function's scope.
//   const decimalNumber = 0.5;
//   // tries to declare new variable called 'decimalNumber' in the same scope, where one already exists as a parameter
//   // cannot declare same name twice in one scope with 'const'
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }
// // As a result of the conflict nothing runs.
// console.log(decimalNumber);
// // This line is outside the function and would not parse, as 'decimalNumber' only exists inside 'convertToPercentage' as a parameter.

// =============> write your explanation here
// Parameters and variables declared inside a function cannot be accessed outside it.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));