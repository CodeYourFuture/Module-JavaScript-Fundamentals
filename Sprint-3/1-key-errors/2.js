
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Prediction: there is going to be an error because there is a number in the parameter

function square(num) {
    return num * num;
}
console.log(square(5));
// it showed SyntaxError: Unexpected number

// the parameter of a function must be a name /identifier, not a number.
// JavaScript expected a word as a parameter but fond a number instead hence the SyntaxError.

// Finally, correct the code to fix the problem

// New code : replaced  the parameter with a valid identifier


