// Predict and explain first...
// I predict an error will occur because str is already the name of the function parameter.

// call the function capitalise with a string input
capitalise("hello");

// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error occurs because str is declared twice in the same scope.
// str is already a parameter of the capitalise function, so we cannot declare it again using let.

// New code:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));