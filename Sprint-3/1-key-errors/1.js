// Predict and explain first...

// Why will an error occur when this program runs?
// Answer below:
// An error will occur for two reasons, first because there variable "decimalNumber" being decleared
// The second reason is because the function "convertToPercentage" placeholder has no value when it was called 

// =============> write your prediction here: 
// Answer below:
// I predicted that the code will not work because of the variable (decimalNumber) inside the function,
// Also because the console.log function is not not calling the function "convertToPercentage" with a value


// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }
// console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(10.5));