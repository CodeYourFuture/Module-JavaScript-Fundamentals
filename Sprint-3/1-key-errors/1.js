// Predict and explain first...

// Why will an error occur when this program runs?
// I predict the code will generate 2 errors because one the variable decimalNumber is declared twice and two
// the function is not called instead the variable decimalNumber is called and it can't be accessed because
// it was declared locally as a parameter of the function

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// After we run the code, it generated an error SyntaxError: Identifier 'decimalNumber' has already been declared
// because we tried to declare decimalNumber again. After fixing this error again we got another error ReferenceError: decimalNumber is not defined
// because the decimalNumber is locally scoped, javascript can't access it when the function is called
// additionally the function was not called  console.log(decimalNumber) this simply means print the value of decimalNumber

// Finally, correct the code to fix the problem
// Here is the fixed code
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
