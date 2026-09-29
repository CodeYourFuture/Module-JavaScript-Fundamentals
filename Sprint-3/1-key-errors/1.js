// Predict and explain first...

// Why will an error occur when this program runs?
// Prediction: Node will report a SyntaxError because decimalNumber is declared
// as a const inside the function even though it is already a parameter.

// Try playing computer with the example to work out what is going on

// Faulty original lines:
// const decimalNumber = 0.5; // duplicates the parameter inside the function
// console.log(decimalNumber); // refers to the parameter outside its scope

// Error: SyntaxError: Identifier 'decimalNumber' has already been declared
// Explanation: The parameter already declares decimalNumber in the function
// scope. The inner const declaration duplicates that binding. Also, the final
// console.log refers to a name that would not be available outside the function.

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
