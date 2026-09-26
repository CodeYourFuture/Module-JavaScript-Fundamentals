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
  // I moved `const decimalNumber = 0.5` outside the function. The function already has `decimalNumber` as a parameter, so I can pass a number directly when calling it, like `convertToPercentage(7)`. The function then multiplies it by 100 and adds `%`.

// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(7));

