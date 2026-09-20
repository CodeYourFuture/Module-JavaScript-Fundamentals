// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Prediction:
// 1. decimalNumber is declared twice and it will give syntax error.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// 2. console.log will return undefined as decimalNumber local scope declaration inside the function.
// 3. It's percentage not decimalNumber needs printing.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));

// The function convertToPercentage can be called passing with an argument of the input.