// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict a SyntaxError, because 3 is written where a parameter name should be.
// Parameters must be variable names, not values.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// When declaring a function, the brackets hold parameter names: placeholders that
// receive values when the function is called. JavaScript expected a name there and
// found the number 3, which is not a valid name, so it reports an "Unexpected number".
// The body also uses num, which is never declared, so num should be the parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3)); // 9

