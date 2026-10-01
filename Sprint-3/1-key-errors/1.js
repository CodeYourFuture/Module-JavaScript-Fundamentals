// Predict and explain first...

// Why will an error occur when this program runs?
// ===========> I predict there will be an error because decimalNumber is declared more than once.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// ===========> The error happens because decimalNumber is already declared as a function parameter.

// Finally, correct the code to fix the problem
// ===========> Removed the duplicate declaration and called the function with 0.5.
