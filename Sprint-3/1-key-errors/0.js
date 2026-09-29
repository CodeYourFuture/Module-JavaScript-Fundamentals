// Predict and explain first...
//  =============> If the function will be called, it will print the first letter of the string
// in capital with the rest of the word in lowercase

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// =============> A SyntaxError was thrown because the str was used to name both the function parameter
// and a new variable, which cannot happen in the same scope
// =============>
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("mother"));
