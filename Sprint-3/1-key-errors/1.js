// Predict and explain first...

// Why will an error occur when this program runs?
// Because decimalNumber is declared twice, once as a parameter and again with const

// Try playing computer with the example to work out what is going on

/*

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber)); */

// decimalNumber is already a parameter, so declaring it again with const causes an error
// decimalNumber has already been declared as a parameter in the same function scope
// console.log(decimalNumber) is wrong because decimalNumber is not defined outside the function,
// so we need to call the function with a value

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage("26"));