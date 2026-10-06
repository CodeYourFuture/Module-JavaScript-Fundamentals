// Predict and explain first...
// Prediction: I predict that the code will produce an error because
// str is already declared as a function parameter and is declared
// again with let.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// Explanation: The parameter str is already declared when the
// function is created. We cannot declare another variable called
// str with let in the same scope.

// New code:
// The function now uses the existing str parameter and returns
// the capitalised string.

console.log(capitalise("hello"));