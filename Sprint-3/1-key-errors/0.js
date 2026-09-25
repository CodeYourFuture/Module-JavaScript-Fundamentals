// Predict and explain first...
// I believe this will cause an error because str is declared twice

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/

// The error happens because str is declared twice, once as a parameter & again with let
// If I give the new variable a different name, I hope it should work :)

function capitalise(str) {
  let newString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newString;
}

console.log(capitalise("frumentius"));
