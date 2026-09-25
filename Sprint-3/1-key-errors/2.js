// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're getting an error
//  ==============> write your prediction of the error here
// I predict this will throw a SyntaxError, because '3' is used as the
// parameter name in 'function square(3)', and a number can't be used as a
// parameter name — parameter names must be valid identifiers (like variable
// names).

function square(num) {
  return num * num;
}

console.log(square(3));

// ==============> write the error message here
// SyntaxError: Unexpected number

// ==============> explain this error message here
// Function parameters must be valid identifiers — the same rules as variable
// names (they must start with a letter, '$', or '_', never a digit). The
// original code used '3' as the parameter name, which isn't a valid
// identifier, so JavaScript couldn't even parse the function definition.
// This error happens before any code runs. There was also a second bug: the
// function body referred to 'num', which didn't match the (invalid)
// parameter name at all — fixing the parameter name to 'num' resolves both
// issues at once.

// Finally, correct the code to fix the problem
// ==============> write your new code here
// (the fixed function above already satisfies this)