// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

/*An error will occur when the program runs because decimalNumber is declared twice. The function already receives decimalNumber as a parameter, but then const decimalNumber = 0.5 tries to create another variable with the same name inside the same scope. JavaScript does not allow redeclaring variables with const.
Another error will happen at console.log(decimalNumber) because decimalNumber only exists inside the function and cannot be accessed outside of it.*/

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
