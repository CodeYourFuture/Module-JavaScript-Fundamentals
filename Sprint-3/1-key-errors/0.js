// Predict and explain first...
//  ==============> write your prediction here
// I predict this will throw a SyntaxError, because the parameter 'str' is
// being redeclared with 'let' inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

console.log(capitalise("hello"));

// ==============> write your explanation here
// The parameter 'str' already existed in the function's scope. The original
// code tried to declare another variable with 'let str', which caused a
// naming collision — JavaScript doesn't allow redeclaring a variable with
// 'let' in the same scope. This threw a SyntaxError before the function
// could even run. Renaming the new variable to 'result' fixes the collision.

// ==============> write your new code here
// (the fixed function above already satisfies this)