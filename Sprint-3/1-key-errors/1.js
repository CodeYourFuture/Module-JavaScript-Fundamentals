// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimalNumber is part of the function so it cant be set with const decimalNumber, the name needs to be different.
// console.log(decimalNumber) causes an issue as well, decimalNumber is part of the function, it should request convertToPercentage for it to work.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// console.log(decimalNumber) will not work as decimalNumber is inside the function,
// and "const devimalNumber = 0.5" has already been called from teh function. You need to change the name or apply the value in the call on consol.log()


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));