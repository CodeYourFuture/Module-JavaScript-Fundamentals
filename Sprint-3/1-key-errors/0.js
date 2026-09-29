// Predict and explain first...
//  =============> write your prediction here==> SyntaxError because str is declared twice (parameter + let)
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//function capitalise(str) {
// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// return str;
//}
// =============> write your explanation here==> (let str) will make a syntaxerror because str is already declared as parameter in the function: [function capitalise(str) ] and we can not declare an identifier in the same scope
// =============> write your new code here:
function capitalise(str) {
 str = `${str[0].toUpperCase()}${str.slice(1)}`;
 return str;
}
console.log(capitalise("hello world"));
