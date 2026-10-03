// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//The error occurs because the variable "str" is being 
//declared twice in the same scope. The parameter "str" 
//is already defined as a function argument, and then it 
//is being redeclared with "let str =". This causes 
//a syntax error because we cannot declare a variable 
//with the same name in the same scope. To fix this, we 
//can either rename the parameter or the variable inside 
//the function.

// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
