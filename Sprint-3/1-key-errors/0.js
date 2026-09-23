// Predict and explain first...
//  =============> write your prediction here
// capitalise function takes 1 str arg
// let srting will give an error if i try to pass my string.
// remove let 
// str is being put in template literal
// str[0]: 1st index of str becomes uppercase
// str.slice(1): 2nd index slice until end of str
// str = "frankocean"
// return = "Frankocean"


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }


// =============> write your explanation here
// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// I was right, error given is because of let str within the function. 
// SyntaxError: Identifier 'str' has already been declared 
// We cannot have two declarations of the same variable so we remove the let inside .capitalise.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("frankocean"))
