// Predict and explain first...
//  =============> write your prediction here
//- we expect a syntaxerror because "str" is already declared as function parameter and again as a variable within the same function scope.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//"Error: SyntaxError: Identifier 'str' has already been declared" why: because "str" declared twice.

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
//  Instead of storing the formatted string in a new variable and then returning it, I return the expression directly since the variable was only used once.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("abakar"));
