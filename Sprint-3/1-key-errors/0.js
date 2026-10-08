// Predict and explain first...
// str is a parameter in the function capitalise, so there will likely be a syntax error when trying to declare a second variable (let str) with the same name in the same scope. 


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// Error message: SyntaxError: Identifier 'str' has already been declared
// A parameter is already a variable declared inside the function's scope.
// let cannot declare a second variable with the same name in the same scope, so
// JavaScript rejects the whole file before running anything. That is why the
// error appears even before capitalise is called.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello")); // Hello
