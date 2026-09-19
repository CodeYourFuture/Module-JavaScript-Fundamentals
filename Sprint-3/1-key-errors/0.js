// Predict and explain first...
//  =============> write your prediction here
//Answer: I predict that there will be a Reference Error, because str get's re-declared with let
//inside the function even though it already is declared as it is the parameter. Perhaps it would
// be solved by removing the "let".

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hellllo");
*/

// =============> write your explanation here
// Answer: I got a Syntax Error, Identifier 'str' has already been declared. So 'str' needs to not
// be declared again. I will try to write the code without the let
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hellllo"));