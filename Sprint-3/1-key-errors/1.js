// Predict and explain first...

// Why will an error occur when this program runs?
// =============> We will get a SyntaxError as decimalNumber has already been declared as a parameter of the function.

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here
// We don't need to redeclare decimalNumber as it's value comes from function parameter,
// also console.log wont work as decimalNumber is only created inside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5));
