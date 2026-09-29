// Predict and explain first...
// Prediction: Node will report a SyntaxError because str is declared twice in
// the same function scope: once as a parameter and again with let.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Faulty line from the original: let str = `${str[0].toUpperCase()}${str.slice(1)}`;

// Error: SyntaxError: Identifier 'str' has already been declared
// Explanation: A function parameter is already a binding in the function body.
// Declaring another let binding with the same name is not allowed.
// Corrected code:
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello"));
