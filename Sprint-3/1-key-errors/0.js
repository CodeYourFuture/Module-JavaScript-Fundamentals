// Predict and explain first...
//  function parameter and variable inside the function have same name.

// call the function capitalise with a string input
console.log(capitalise("message"));
// interpret the error message and figure out why an error is occurring
/*Identifier 'str' has already been declared . 
This mean that 'str' has already been declared as a function parameter,
so we cannot declare another variable with the same name using 'let'.
 */

// =============> write your explanation here
// The error occurs because 'str' is already declare as a function parameter.
//The 'let str' inside the function tries to declare 'str' again in the same scope.
//I changed the name of new variable to 'result' to fix the error.

// =============> write your new code here
function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
