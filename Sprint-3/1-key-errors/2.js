
// Predict and explain first BEFORE you run any code...
// The function won't return be able to return the value to the caller, due to the expression not being assigned.

// this function should square any number but instead we're going to get an error

// The expression will return as unexpected number in the console log

// function square(3) {
//     return num * num;
// }

// SyntaxError: Unexpected number

// The parameter set by the function isn't attached to the num value of the return, so the return doesn't have a value to work with

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

console.log(square(3));



