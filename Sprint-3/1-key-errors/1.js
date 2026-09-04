// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

//1- The function is trying to declare the decimalNumber twice in the perameter and later as a new variable
//2-console.log() is printing a variable in the local scope where it can't be accessed as it is inside the function

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// =============> write your explanation here
/* The variable decimal Number has already been declared in the parameter 
 and already is a local variable which can't be declared again causing a SyntaxError  
As the decimalNumber inside the function we can't print it using the console.log() as it has no power to the local scope
instead we can delete the second declaration and just leave the parameter as an input for the user 
 Finally, correct the code to fix the problem */

// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));