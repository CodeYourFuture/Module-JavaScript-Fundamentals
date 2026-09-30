// Predict and explain first...
//  =============> write your prediction here
// My prediction is that the first letter of the string will be capitalized at position 0 because arrays start counting at 0 and slice(1) creates a new string slice starting at position '1' because of the template literals.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// console.log(capitalise('rahana'));

// =============> write your explanation here
// =============> PREDICTION EXPLANATION: In JavaScript strings are zero-indexed, meaning the first character starts counting at position zero. 'str[0].toUpperCase() aims for the 'r' at position '0' and transforms it to 'R'. The .slice(1) method removes everything from '1' to to the end of the string. By starting at '1', it skips '0' ('r') and gives ('ahana'). the template literals combines 'R' and 'ahana' and adds them together to get('Rahana')
// =============> The SyntaxError: Identifier 'str' has already been declared is occurring because 'str' has already been declared in the function parameter so let has to be named a different.  variable(example 'message') so it can return the value of capitalise. 
// =============> Alternatively we can remove the let completely and return what is in the template literals.
// =============> write your new code here

// function capitalise(str) {
//   let message = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return message;
// }

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise('rahana'));
