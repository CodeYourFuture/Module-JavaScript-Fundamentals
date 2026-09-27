// Predict and explain first...

// Why will an error occur when this program runs?
// / to calculate the percentage it has used the value from
// convertToPercentage() function so there will be error because
// the variable name for the parameter and const is the same. and console.log is called
// to print decimalNumber which is not known outside the function
// instead of printing the retun value of the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// the error was syntaxError it is stating decimalNumber has already been declared
//the parameter of the function convertToPercentage() and the const variable is the same

// Finally, correct the code to fix the problem
//  There can be two ways to fix the problem
//   1. to change const  variable and the name decimalNumber in line 15.
//      but still need to call the function convertToPercentage() in the consol.log()

//  function convertToPercentage(decimalNumber){
//   const numeral = 0.5;
//    const percentage = `${numeral*100}%`;
//    return percentage;
//   }
//  console.log(convertToPercentage());

//2 .The second one is to call the function with value in it.
//       and to keep the code as it is except change the const variable name/or delet
//       the const numeral with its value because there is no poin of keeping it.
//
//    function convertToPercentage(decimalNumber){
//   const numeral = 0.5;
//    const percentage = `${decimalNumber*100}%`;
//    return percentage;
//   }
//  console.log(convertToPercentage());
