// Predict and explain first...
//  =============> We are declaring str as a parameter and then redeclaring it in the function.
// This will throw an error because we are redeclaring the variable.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> SyntaxError: Identifier 'str' has already been declared
// =============> This error is happening because we are redeclaring the variable str in the function.
// =============> We can fix this by removing the let keyword from the variable declaration in the function.

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.assert(capitalise("hello") === "Hello");
