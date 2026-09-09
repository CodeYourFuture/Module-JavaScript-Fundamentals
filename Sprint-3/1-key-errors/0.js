// Predict and explain first...
//  =============> write your prediction here
// I predict this code will produce a SyntaxError because str is declared twice in the same scope using let.

// call the function capitalise with a string input
capitalise("hello");
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error occurs because str is already declared as a parameter
// Inside the function, let str attempts to declare another variable
// with the same name in the same scope.
// We can fix the problem by removing let and assigning the new value
// directly to the existing parameter.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
