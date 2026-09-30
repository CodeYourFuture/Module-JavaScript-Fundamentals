// Predict and explain first...
//This code will throw an error as we haven't passed an argument into str? or str is the function parameter and variable already on line 5 so it may throw an error to declare again  as a variable inside the function?
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// return str;
//}
//console.log(capitalise("mars"));
//SyntaxError: Identifier 'str' has already been declared
// This code threw an error as "str" has already been defined in the function capitalise(str) so let str is causing the error as it cannot be defined twice.
function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
console.log(capitalise("mars"));
// In my new code i'm calling the function capitalise(str) in my code "str" is only the parameter and not the variable aswell. In the variable result it will take any argument and using the toUpperCase method itll make a copy of the the letter at index zero as a capital letter so as i passed in "mars" itll return M and store it in the variable result. The method slice will return a copy of the argument from index 1 onwards so "ars" and because it's in a template literal it will join "M" and "ars" together and this is what will get stored in result and by returning result on line 14 i'm asking the function to return what is stored in result so javascript can print it using console.log or i can use it elsewhere as i'm coding.
