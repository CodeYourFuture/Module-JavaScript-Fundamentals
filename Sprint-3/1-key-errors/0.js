// Predict and explain first...
/*  =============> I predict that the function would make 1st character uppercase and 
then adds the rest of the string using slice. */

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//We cannot declare str again because it has already been declared as a parameter of the function.

/* OLD CODE

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
  */

// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
