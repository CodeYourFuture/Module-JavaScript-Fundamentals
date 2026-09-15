// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// the error will occur because we are trying to declare a variable with the same name as a parameter in the same scope. Another error is that we are trying to log a variable that is not defined in outer scope, but only in the function scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// the first step is the function is defined and reads the function as it appears.
// the second step is to run the function if it is called, but it is not called in this case, only the console.log is called, which is trying to log a variable that is not defined in the global scope, and hence this will throw a reference error first. But because the function is not called, the syntax error of declaring a variable with the same name as a parameter will not be thrown until the function is called.
// Finally, correct the code to fix the problem
// =============> write your new code here
/* function convertToPercentage(decimalNumber) {
   decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
*/
