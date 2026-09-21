// Predict and explain first...
//  =============> write your prediction here
// Prediction
// A SyntaxError is thrown with message: Identifier 'str' has already been declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// Error message interpreted ====> The error message simply means the name 'str' was declared twice in the same scope

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// capitalise("moses");
// =============> write your explanation here
// The error here is because the parameter 'str' and the variable 'let str' share the same name in he same scope, thus the SyntaxError.
// To fix this error, I could either give the variable a different name or reassign the parameter 'str' without 'let', since no new declaration is made

// =============> write your new code here
// function capitalise(str) {
//   let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return capitalised;
// }
// console.log(capitalise("moses"));
// |
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("moses"));