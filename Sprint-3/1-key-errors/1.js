// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Same thing. We are redeclaring the variable decimalNumber in the function.
// This will throw an error because we are redeclaring the variable. But I think there's also a
// problem with our console.log statement. We are trying to log a variable that is declared inside

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> SyntaxError: Identifier 'decimalNumber' has already been declared
// This error is happening because we are redeclaring the variable decimalNumber in the function.
// I removed the declaration of decimalNumber inside the function and now we get a new error
// ReferenceError: decimalNumber is not defined
// This is because we are trying to log a variable that is declared INSIDE the function and is not
// accessible outside of the function. We need to update our console.log statement to log the return value of convertToPercentage.

// Finally, correct the code to fix the problem
// =============>

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // 50%
