// Predict and explain first...
//  =============> write your prediction here
// Tha parameter 'str' is declared another time insie the function , this will cause an error to be thrown.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here SyntaxError: Identifier 'str' has already been declared =>  line 10 varibale str should not be declared again.
// =============> write your new code
// function capitalise(str) {
//   str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// console.log(capitalise("hello world"));
