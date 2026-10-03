// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//decimalNumber already exists as a parameter, so const decimalNumber is making
//a new variable with the same name. There is also a problem where decimalNumber is being
//assigned 0.5, which won't cause errors, but means that no matter what is passed to the function
//decimalNumber will always be 0.5

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//convertToPercentage(0.6)
//console.log(decimalNumber);

// =============> write your explanation here
//SyntaxError: Identifier 'decimalNumber' has already been declared
//prediction correct, decimalNumber already exists so causes error. Removing the line
//shows another error
//console.log(decimalNumber);
//            ^
//ReferenceError: decimalNumber is not defined
//This is because of scope, decimalNumber is defined in the function, so it only has scope
//in the function

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

let decimalNumber = 0.6;
console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));
