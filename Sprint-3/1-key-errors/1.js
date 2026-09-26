// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// similar problem, the identifier has already been declared in function.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// similar problem, the identifier 'decimalNumber" has already been declared in function and is a parameter.
// we can then remove const decimalNumber, then function can also receive different numbers.
// const percentage = `${decimalNumber * 100} %`;----> this calculates decimalNumber in which case it is 0.5 and multiply it by 100 which = 50 and then we add the % at the end which equals to 50%
// another error is the console.log that exists outside the function and is tryng to log something that exists inside the function.
// we want to print the result of the function we can ---> console.log(convertToPercentage(0.5));

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
