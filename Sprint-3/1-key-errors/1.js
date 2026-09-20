// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Answer: I will get a Syntax Error, because the variable decimalNumber is a parameter
// of the function, and then it gets re-declared inside the function. Removing the
// "const" would make sure it's not re-declared, just value reassigned on that line.

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// Answer: I got SyntaxError: Identifier 'decimalNumber' has already been declared
// I will make sure it's not re-declared in the function by removing the "const"

// After removing the "const" I got a new error. ReferenceError: decimalNumber is not defined. I realized
// that the console.log at the bottom didn't call the function but just logged decimalNumber which hadn't
// been defined in the global scope. Putting back the "const", I will move the declaration of decimalNumber
// to outside the function to make the scope global. Now the global decimalNumber has nothing to do with the
// local parameter decimalNumber in the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const decimalNumber = 0.5;

console.log(decimalNumber);
