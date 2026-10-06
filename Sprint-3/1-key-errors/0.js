// Predict and explain first...
//  =============>// I predict JavaScript will give a SyntaxError because str is declared twice in the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello");*/
/* =============>  The error happens because str is already the function's parameter.
   let str tries to use the same name again, so JavaScript gives a SyntaxError.
   The function stops before it can run. */
// =============> write your new code here
function capitalise(str) {
  if (str === "") {
    return "";
  }

  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

console.log(`Result: "${capitalise("")}"`);
