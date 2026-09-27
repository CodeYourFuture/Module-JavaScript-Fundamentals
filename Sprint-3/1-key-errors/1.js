// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
: inside the function, decimalNumber is already the parameter name, but then it's redeclared with const decimalNumber = 0.5; inside the function body. console.log(decimalNumber); tries to access decimalNumber completely outside the function. But decimalNumber only exists inside convertToPercentage — it was never declared anywhere in the outer/global scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
: the redundant inner redeclaration is removed entirely — the function just uses the parameter decimalNumber it's given. And instead of trying to log a variable that doesn't exist outside the function, the code calls the function itself, passing in 0.5, and logs whatever it returns — which will correctly print "50%".

// Finally, correct the code to fix the problem
// =============> write your new code here
:function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));