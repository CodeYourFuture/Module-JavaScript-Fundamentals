// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
 //An error will occur because the variable "decimalNumber"
 //is being declared twice in the same scope. 
 //The parameter "decimalNumber" is already defined as a 
 //function argument, and then it is being redeclared 
 //with "const decimalNumber = 0.5;". This causes a 
 //syntax error because we cannot declare a variable 
 //with the same name in the same scope.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

//The error occurs because the variable "decimalNumber" is being 
//declared twice in the same scope. The parameter "decimalNumber" 
//is already defined as a function argument, and then it is being 
//redeclared with "const decimalNumber = 0.5;". This causes a 
//syntax error because we cannot declare a variable with the 
//same name in the same scope. To fix this, we can either rename 
//the parameter or the variable inside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));