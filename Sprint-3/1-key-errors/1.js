// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimalNumber declared inside the function, this is the value that must be an arg
// line 17 also fails because it tries to access a var that is declared within the function

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// Remove the local var declaration
// ReferenceError: decimalNumber is not defined | console.log(decimalNumber);
// define decimalNumber in line 17 by passing the function with decimalNumber value
// remove the definition in line 11

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
