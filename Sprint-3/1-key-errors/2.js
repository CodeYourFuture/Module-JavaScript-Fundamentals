
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict a SyntaxError, because 3 is a number, not a parameter name.
// Function parameters must be identifiers (variable names).

function square(num) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The original code was function square(3) { ... }. A function definition
// expects a parameter name inside the brackets, but I gave it the value 3.
// JavaScript found a number where it expected a name, so it says
// "Unexpected number".

// Finally, correct the code to fix the problem

// =============> write your new code here
console.log(square(3));

