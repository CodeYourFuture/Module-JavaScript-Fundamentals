
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that there will be a syntax error because the parameter name "3" is not a valid
//  identifier.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Function argument name must be a valid identifier

// =============> explain this error message here
// The error occurs because "3" is not a valid identifier for a function parameter. 
// In JavaScript, parameter names must follow the rules for identifiers, which means they 
// cannot be numbers or reserved keywords.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}