// Predict and explain first...
//  I am predicting the code will generate error because the variable str is declared twice

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello World"));*/

// After we run the code, it generated this error SyntaxError: Identifier str has already been declared
// This happened because we tried to declare again using the keyword let the variable str
// which was declared before in the parameter of the function

//Here is the fixed code
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello World"));
