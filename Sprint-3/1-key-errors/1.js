// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here decimalNumber has already been declared in the function. const can not redeclare a variable with the same name in the same scope. parameter, so we cannot declare it again with const.
// This will cause a syntax error. To fix this, we should remove the const keyword when assigning the new value to decimalNumber.
// console.log(decimalNumber); only exists inside the function.
// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//const decimalNumber = 0.5;
//const percentage = `${decimalNumber * 100}%`;

//return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
