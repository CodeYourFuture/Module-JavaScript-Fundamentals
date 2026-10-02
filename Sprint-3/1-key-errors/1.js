// Predict and explain first...

// Why will an error occur when this program runs?
// =============> I think when we run the programme it will show the type error because decimal number is reassigning inside the function.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// while running this function is shows SyntaxError because decimal number variable is declared two times which JavaScript does not allow.
// and in step 15 we need call function name not decimal number.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
	const percentage = `${decimalNumber * 100}%`;

	return percentage;
}

console.log(convertToPercentage(0.5));
// After solving this the output is 50%.
