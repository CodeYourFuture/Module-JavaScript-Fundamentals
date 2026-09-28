
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Error because 3 is a value, functions take parameters(like num). 
// It wont work 3 is a number literal and not a name/identifier.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The code was expecting the parameter name but found the number literal =3
// This is why we get the syntax error.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));