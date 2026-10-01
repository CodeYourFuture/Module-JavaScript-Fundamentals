// Predict and explain first...

// Why will an error occur when this program runs?
// I predict an error will occur because decimalNumber is already the name
// of the function parameter and it is declared again using const.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// The error occurs because decimalNumber is declared twice in the same scope.
// It is already a parameter of the function, so it cannot be declared again using const.

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));