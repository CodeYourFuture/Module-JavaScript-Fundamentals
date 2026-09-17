// Predict and explain first...
//  =============> It should take a string and capitalise the first letter but i predict it will throw an

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*The error occurs because str is declared twice. The function already receives str as a parameter, and then let str tries to create another variable with the same name inside the same scope. JavaScript does not allow redeclaring a variable with let, so it throws an error.*/

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

/* This function takes a string and capitalise the first letter. It uses `str[0].toUpperCase()` to convert the first character to uppercase and `str.slice(1)` to get the rest of the word unchanged. The function then joins both parts together and returns the new string. When `console.log(capitalise("hello"), capitalise("world"))` is run, the function executes twice and prints `Hello World`.
 */

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("hello"), capitalise("world"));
