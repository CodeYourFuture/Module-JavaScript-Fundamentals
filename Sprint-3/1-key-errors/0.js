// Predict and explain first...
//  =============> write your prediction here
// the function has a parameter str, but then tries to make a new
// variable also called str. so maybe cause error because str already exists

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

// =============> write your explanation here
// SyntaxError: Identifier 'str' has already been declared
// Prediction was correct, str already exists
// =============> write your new code here

function capitalise(str) {
  const capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitaliseStr;
}
