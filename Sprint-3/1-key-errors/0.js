// Predict and explain first...
//  =============> write your prediction here
// fixing errors in the code to get the right result

// call the function capitalise with a string input
//console.log(capitalise("hello"));

// interpret the error message and figure out why an error is occurring
// str has already been declared in function as a parameter, so we need to change str in let declaration and change names of the identifier in let declaration.

//  function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//  }

// =============> write your explanation here

//The function is to capitalise a word or sentence to a uppercase.
// when i tested the code it didn't work and i received a Syntexerror message which said that the identifier `str`has already been declared
//it was declared in the function and repeatedly twice and tried to create a variable with let when this is already a parameter.
//

// =============> write your new code here

function capitalise(str) {
  let string = `${str[0].toUpperCase()}${str.slice(1)}`;
  return string;
}

console.log(capitalise("hello"));
