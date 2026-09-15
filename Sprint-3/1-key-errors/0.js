// Predict and explain first...
//  =============> write your prediction here
// the str is already declared as a parameter of the function, so we cannot declare it again inside the function. This will throw a syntax error as we can't declare a variable with the same name as a parameter in the same scope.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// the error is occurring because we are trying to declare a variable with the same name as a parameter in the same scope. This is not allowed in JavaScript and will throw a syntax error. To fix this, we can simply remove the let keyword and just reassign the value to the str parameter directly, like this:

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
