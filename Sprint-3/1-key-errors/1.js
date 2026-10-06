// Predict and explain first...

// Why will an error occur when this program runs?
// =============>// I predict a SyntaxError because decimalNumber is declared as a parameter and then declared again with const.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

/* =============>  decimalNumber is already the function parameter.
   const decimalNumber tries to declare the same name again inside the function,
   so JavaScript gives a SyntaxError. */

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
