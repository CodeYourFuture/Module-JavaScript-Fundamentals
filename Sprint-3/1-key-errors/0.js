// Predict and explain first...
//  =============> write your prediction here
//A: when user input the string. First index will be capitalised.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//A: SyntaxError: Identifier 'str' has already been declared

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}


// =============> write your explanation here
//"str" has been declared in function. In the local scope of original code, str declared again.
//It caused the problem of redeclaration. Delete the "let" in local scope
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise('roger'))


