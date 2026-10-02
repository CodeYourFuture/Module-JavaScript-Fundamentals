
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The will be no output printed on the console because there is no code to instructing printing.
// The num variable is not defined and 3 is used instead of num

function square(3) {
    return num * num;
}

// =============> write the error message here
SyntaxError: Unexpected number

// =============> explain this error message here
// This error illustrates that a number was used instead of a variable name. 

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    squareNum = num * num;
    return squareNum;
}
console.log(square(3));