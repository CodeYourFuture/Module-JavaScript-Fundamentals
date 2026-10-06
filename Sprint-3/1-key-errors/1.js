// Predict and explain first...

// Why will an error occur when this program runs?
// Prediction: An error will occur because decimalNumber is already
// declared as a function parameter and is declared again with const.
// Also, decimalNumber is being used outside the function where it
// is not available.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// Explanation: The function parameter decimalNumber already contains
// the value we give to the function. We cannot declare another
// decimalNumber inside the function with const. The original code
// also tried to use decimalNumber outside the function, where it
// does not exist.

// Finally, correct the code to fix the problem

// New code: The function uses the decimalNumber parameter and returns
// the percentage. We call the function with 0.5 and log the result.