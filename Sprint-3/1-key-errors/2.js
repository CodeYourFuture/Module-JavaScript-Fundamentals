// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// I predict there will be a syntax error because 3 is a number
// and a function parameter must be a valid variable name.

// function square(3) {
//     return num * num;
// }

// Error message:
// Identifier expected.

// The error occurs because 3 is being used as the function parameter.
// A function parameter must be a valid variable name, such as num.
// The number 3 should be passed into the function as an argument instead.

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

console.log(square(3));