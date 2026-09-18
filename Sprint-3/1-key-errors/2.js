
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> SyntaxError because function parameter must be a name not a number or value. The error occurs because 3 is a number.

/*
function square(3) {
    return num * num;
} */

// =============> SyntaxError: Unexpected number

// =============> This error message is cause by trying to assign a number as a parameter, a parameter needs to be identifier such as num.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(5))

