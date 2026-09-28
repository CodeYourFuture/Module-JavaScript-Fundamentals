// Predict and explain first...

// Why will an error occur when this program runs?
//- variable name "decimalNumber" declared twice in the same function. one as function parameter and again as a const in the same function.
// =============> write your prediction here
//- SyntaxError because "decimalNumber" declared twice.
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber= 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// I removed the separate decimalNumber variable because the function already accepts decimalNumber as a parameter. I can now pass a number directly when calling the function, such as convertToPercentage(7). The function multiplies the value by 100 and appends % to return the percentage.

// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(7));
