
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here:We will have a SyntaxError because we need a valid function parameter. 

function square(3) {
    return num * num;
}

// =============> write the error message here:SyntaxError: Unexpected number

// =============> explain this error message here:function square(3) {
//3 is a number, not a valid variable. Program expects a parameter name there.

// Finally, correct the code to fix the problem

// =============> write your new code here:
function square(num) {
    return num * num;
}

console.log(square(3));

