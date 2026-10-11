// Predict and explain first...:It doesn't run.We have a syntaxError.

// Why will an error occur when this program runs?because decimalNumber is declared.
// as a parameter and then declared again using const.

// =============> write your prediction here:We will have a SyntaxError because decimalNumber is  a parameter of the function, but it is declared again using const inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here:decimalNumber is inside the function, so we can not use it outside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
 ca
  return percentage;
}

console.log(convertToPercentage(0.5));
