// Predict and explain first...
//  =============> write your prediction here
// Prediction
// A SyntaxError is thrown with message: Identifier 'str' has already been declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("moses");
// =============> write your explanation here
// =============> write your new code here
