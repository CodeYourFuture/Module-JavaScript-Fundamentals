
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// A SyntaxError will occur because 3 cannot be used as a function parameter.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Invalid or unexpected token

// =============> explain this error message here

// Function parameters must be variable names and not a number, 
// hence this is a syntaxError

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

