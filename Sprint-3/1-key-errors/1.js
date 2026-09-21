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
  //- "decimalNumber" is already provided as a parameter to the function, but I don't need a parameter because I'm creating the value "0.5" inside the function. So I removed the parameter. I also need to call the function with convertToPercentage() instead of console.log(decimalNumber) because "decimalNumber" only exists inside the function.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
