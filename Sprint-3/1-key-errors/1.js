// Predict and explain first...
// It will give you a percentage of 50% using the function by multiplying the 'decimalNumber' by 100 for the 'percentage' variables.  

// Why will an error occur when this program runs?
// It will be a syntaxError because the 'decimalNumber' is already called in the function parameter.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// decimalNumber in console.log isn't a defined number in the functions parameter now so it will return back as NaN "Not a Number", by adding '0.05'  to the console.log it now has a number to calculate the percentage to

// Finally, correct the code to fix the problem


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;

}

  console.log(convertToPercentage(0.5))
