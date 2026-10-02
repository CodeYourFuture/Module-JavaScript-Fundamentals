// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
// const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
//The function has already declared the  decimalNumber variable. The same variable cannot be used or declared twice. 
//The decimalNumber variable is only existing inside the the function. Therefore the console.log() will not have anything to print.
//The decimalNumber must be called outside first.


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5));