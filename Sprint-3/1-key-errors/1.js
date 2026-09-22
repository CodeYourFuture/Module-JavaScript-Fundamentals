// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// If we run the program, I predict we will get an error.
// The first problem is that 'decimalNumber' is already function parameter, but you try to declare another variable with the same name inside the function.
//another problem is that 'decimalNumber' is a local variable inside the function
// and we cannot access to it outside the function.
//------------------------------------------------------
// Try playing computer with the example to work out what is going on
//SyntaxError: Identifier 'decimalNumber' has already been declared

// =============> write your explanation here

// The error occurs because 'decimalNumber' has already been declared
// as a function parameter. we cannot declare it again with 'const'

// Finally, correct the code to fix the problem
// =============> write your new code here
const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
