// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The str has already been called so when its been set to the "let = str" it wont work as its already part of the function, so the name needs to change.
// =============> write your new code here
function capitalise(str) {
  let capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}