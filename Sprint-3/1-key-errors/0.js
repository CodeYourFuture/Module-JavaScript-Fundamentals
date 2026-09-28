// Predict and explain first...
//  It will make the first letter in the string input capitalised.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// "SyntaxError: Identifier 'str' has already been declared"

// capitalise("matthaus enjoys foood.")

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// The error is thrown by declaring the 'str' variable again in the function with 'let' which causes it throw the SyntaxError, as it is already been declared.

capitalise("matthaus enjoys food")

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("Matthaus enjoys food"));