// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 return str;
}

// =============> write your explanation here
// The function parameter declares the variable string in the first line and then the variable is declared again using let. This will not run because you cannot declare a variable with the same name twice.
// The return returns the same variable making the funtion useless.
// The is no console.log() to print anything.
// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
let  result = capitalise("str")
console.log(result);