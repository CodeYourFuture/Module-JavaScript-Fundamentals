// Predict and explain first...

// Why will an error occur when this program runs
    // When this program runs there will be an identifier SyntaxError because 'decimalNumber' has already been declared
    // Also the output will print a decimal since it says console.log(decimalNumber);
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// 'decimalNumber' is already declared in two different areas in the same function which JavaScript does not allow.
// 'decimalNumber' is only useful inside the function, so it will give an error of not knowing what decimalNumber is,
//  even if it succeeds it will give the wrong output since what we are looking for is the percentage.

// Finally, correct the code to fix the problem
//  New code: 1. Removed the duplicate `const decimalNumber = 0.5;` line.
//            2. Changed the console.log to call the function and print the result.
