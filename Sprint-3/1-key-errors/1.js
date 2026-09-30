// Predict and explain first...

// Why will an error occur when this program runs?
// like the original code in 0.js a syntax error will occur because decimalNumber has already been declared as the parameter in the function so it cannot be redeclared  inside the function with the same name.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//return percentage;
//}

//console.log(decimalNumber);
//Because decimalNumber is declared twice it wont work but when i call the function convertToPercentage and pass in 0.5 it will get assigned to the parameter decimalNumber so i need to update the code to reflect this.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));

//console output: 50%
