// Predict and explain first...
//  on line 8, let declaring with name the same as the parameter

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//It says syntax error Identifier 'str' has already been declared.
// function parameter and let which is inside the funtion can never
// be the same because both variables are in the same scope
// function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;
//}
//console.log(capitalise("error")
//
function capitalise(firstLetter) {
  let str = `${firstLetter[0].toUpperCase()}${firstLetter.slice(1)}`;
  return str;
}
console.log(capitalise("error"));
