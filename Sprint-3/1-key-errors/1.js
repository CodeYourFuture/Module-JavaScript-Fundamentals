// Predict and explain first...

// Why will an error occur when this program runs?
// Answer below:
// A syntax error will occur for two reasons, first because there variable  const "decimalNumber" being redecleared 
// The second reason is because the function "convertToPercentage" is not called correctly.

// =============> write your prediction here: 
// Answer below:
// I predicted that the code will not work because of the variable (decimalNumber) inside the function,
// Also because the console.log(decimalNumber) is just a name that exist inside the function


// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }
// console.log(decimalNumber);

// =============> write your explanation here
// Answer:

// const decimalNumber redeclares the parameter name which causes a SyntaxError. 
// also console.log(decimalNumber) outside fails because the parameter only exists inside the function"

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(10.5));