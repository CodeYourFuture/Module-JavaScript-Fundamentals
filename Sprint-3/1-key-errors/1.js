// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here D: Answer => variable decimalNumber is declared twice : one time in the parameter and another time inside the function

// function convertToPercentage(decimalNumber) {
//   //const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }

// console.log(decimalNumber);
// =============> write your explanation here
//  solution :Also in line 15 console.log is trying print a variable which is not defined instead of calling the function convertToPercentage .
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
