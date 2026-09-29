// Predict and explain first...
//  ======> write your prediction here:
// Answer below:

// I predict that the code should make the first letter of the string an uppercase letter,
//  then add every letters that comes after

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


// =============> write your explanation here:
// Answer below:

// The error read "SyntaxError: Identifier 'str' has already been declared",
// This is as a result of having two variables with same name "str". 
// The error occoured in this code because the variable "str" has been declared twice

// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("money"));