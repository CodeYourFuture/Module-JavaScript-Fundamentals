// Predict and explain first...

// Why will an error occur when this program runs?
// write your prediction here
// This is because the variable name for the parameter and the cont is the same

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

//=============> write your explanation here
//The decimalNumber is declared twice as a result, calling convertToPercentage function and passing a value gets assigned to parameter decimalNumber
//So i had to move it outside of the function scope to remove restrictions

// Finally, correct the code to fix the problem.
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;

console.log(convertToPercentage(0.5));
