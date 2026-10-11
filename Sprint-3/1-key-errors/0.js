// Predict and explain first...
//  =============> We will have syntax error because string is the parameter of the function and the next line,it is declared wit let
//so it is declared two times in one part
// call the function capitalise with a string input

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("mother"));
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here     SyntaxError: Identifier 'str' has already been declared
// =============> write your new code here.
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
