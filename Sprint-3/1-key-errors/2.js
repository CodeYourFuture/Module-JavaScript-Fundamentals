// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error
// =============> write your prediction of the error here
// Prediction: SyntaxError — you cannot use a number literal (3) as a parameter name.
// Parameter names must be valid identifiers (e.g. num), not values.
// The value 3 should be passed when calling the function, not in the definition.

//function square(3) {
//return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number
// (exact wording can vary slightly by Node version, e.g. "Missing formal parameter")

// =============> explain this error message here
// In a function definition, the parentheses list parameter names (placeholders).
// 3 is a value (argument), not a name, so JavaScript rejects it while parsing the file.
// Even if that were fixed, num is not defined in the original code — the parameter
// and the name used inside the function must match.

// Finally, correct the code to fix the problem
// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3)); 

