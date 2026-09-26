// Predict and explain first...
//  ======> write your prediction here: I predict that the code should cut out, and make the first letter of the string an uppercase letter,
//  then add every letters that comes after

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//  let str= `${str[0].toUpperCase()}${str.slice(1)}`
//   return str;
// }


// =============> write your explanation here: The error read "SyntaxError: Identifier 'str' has already been declared",
//  this is as a result of having two variables with same name. The error occoured in this code because the variable "str" has been decleared twice

// =============> write your new code here

function capitalise(str) {
//  let str2= `${str[0].toUpperCase()}${str.slice(1)}`
// return str2
  return str2= `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("money"))