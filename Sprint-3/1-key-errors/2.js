
// Predict and explain first BEFORE you run any code...
// it will throw a syntax error because we are trying to put a number in the parameter of the function where it should be only a variable name.
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// this error will occur because a number is being used as a parameter name in the function definition, which is not allowed in JavaScript. Parameter names must be valid variable names, and numbers cannot be used as variable names. Therefore, the code will throw a syntax error when it is run. Another error is that the variable num is not defined in the function, so it will throw a reference error when trying to return num * num.
function square(3) {
    return num * num;
}

// =============> write the error message here
// Uncaught SyntaxError: Illegal return statement
// Uncaught SyntaxError: Unexpected number
// =============> explain this error message here
// This error message indicates that there is a syntax error in the code that entails both an illegal return statement and an unexpected number. The illegal return statement error occurs because the function is trying to return a value from a function that is not properly defined. The unexpected number error occurs because the parameter name of the function is a number, which is not allowed in JavaScript.
// Finally, correct the code to fix the problem

// =============> write your new code here
/* 
function square(num) {
    return num * num;
}
*/


