// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Prediction: I predict that an error will occur because 3 cannot
// be used as a function parameter name.

// =============> write your prediction of the error here

function square(num) {

    return num * num;

}

// =============> write the error message here

// SyntaxError: Unexpected number

// =============> explain this error message here

// The error happens because 3 is a number, not a valid parameter name.
// A function parameter needs to be a variable name, such as num.

// Finally, correct the code to fix the problem

// =============> write your new code here

console.log(square(3));