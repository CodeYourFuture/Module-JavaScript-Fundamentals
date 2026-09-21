// Predict and explain first...
//  =============> write your prediction here
  //- we expect a syntaxerror because "str" is already declared as function parameter and again as a variable within the same function scope.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
  //"Error: SyntaxError: Identifier 'str' has already been declared" why: because "str" declared twice.

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
  //- I changed the variable name to "strg" to avoid the error.
// =============> write your new code here
function capitalise(str) {
  let strg = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strg;
}