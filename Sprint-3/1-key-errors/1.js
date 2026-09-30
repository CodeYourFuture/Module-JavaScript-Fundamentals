// Predict and explain first...
// My prediction: Running this code will result in a SyntaxError because 'decimalNumber' is defined as a parameter in the function declaration, and then re-declared on line 2 using 'const'. In JavaScript, an existing parameter or variable cannot be re-declared in the same scope using 'const' or 'let'. Additionally, calling console.log(decimalNumber) on line 8 will trigger a ReferenceError because 'decimalNumber' is scoped locally to the function and cannot be accessed globally.

// Why will an error occur when this program runs?
// =============> write your prediction here
// My prediction: A SyntaxError will occur because 'decimalNumber' is automatically declared as a local variable when passed as a function parameter. Declaring it again inside the function body using 'const decimalNumber = 0.5;' breaks JavaScript's re-declaration rules.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
// 	const decimalNumber = 0.5;
// 	const percentage = `${decimalNumber * 100}%`;

// 	return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// =============> Two errors occurred here:
// 1. SyntaxError: 'decimalNumber' is automatically declared as a local variable when passed as a function parameter. Declaring it again inside the function body using 'const decimalNumber = 0.5;' breaks JavaScript's re-declaration rules.
// 2. ReferenceError: I commented out the 'const decimalNumber = 0.5' and got a ReferenceError, this is because 'decimalNumber' only exists within the block scope of the convertToPercentage function. Trying to log console.log(decimalNumber) in the global scope fails because it is not defined out there.
// Solution: Remove 'const decimalNumber = 0.5;' from inside the function body so the parameter can receive the arguments, and call console.log(convertToPercentage(0.7)) instead of logging the parameter directly.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
	const percentage = `${decimalNumber * 100}%`;

	return percentage;
}

console.log(convertToPercentage(0.7)); // output 70%
console.log(convertToPercentage(0.5)); // output 50%
