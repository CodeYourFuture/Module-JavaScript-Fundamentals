// Predict and explain first...
//  =============> write your prediction here

// Prediction: the method toUpperCase return the character at index 0 of str as uppercase.
// slice method will return the characters of str starting at index 1 excluding the first character.
// the template literal combines the converted upper case first character and the rest of the string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// Explanation: 1. str declares twice.Hence it gives syntax error.
// Refactor:    2. instead of returning str return can directly send back the template literal expression. 

// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;  
}