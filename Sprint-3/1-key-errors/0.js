// Predict and explain first...
// ===========> I predict there will be an error when the function is called.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello");
// ===========> The error happens because str has already been declared as a function parameter.
// ===========> Removed let because str is already declared as a function parameter.
