// Predict and explain first...

// Why will an error occur when this program runs?
// because the decimanlNumber variable has already been declared and you cant declare it twice, also the parameter needs to not be tied to any value so it works as intended

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// decimalNumber creates a variable in the function scope, then const decimalNumber tries to create a variable with the same name in that same scope, then it hits a Syntax error. Then the program stops running

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = (`${decimalNumber * 100}%`);

  return percentage;
}

console.log(convertToPercentage(0.5)); 
