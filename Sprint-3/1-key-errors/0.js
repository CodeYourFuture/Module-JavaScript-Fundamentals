// Predict and explain first...
//  =============> write your prediction here
/*
I predict the function will throw a SyntaxError as the variable str has already been declared in the function parameter  
function capitalise will capitalise the first letter with index 0 
and will append the sliced string from index 1 which is the second letter
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* syntax Error :identifier the variabel has already been declared. 
As we can see the str variable has already been declared in the prameter of the function instead we just return the value */

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
/* syntax Error :identifier the variabel has already been declared. 
As we can see the str variable has already been declared in the prameter of the function instead we just return the value */

// =============> write your new code here
function capitalise(str) {
    return str[0].toUpperCase()+str.slice(1);

}
console.log(capitalise("ebrahim"));
console.log(capitalise('salomi'));
