// Predict and explain first...
//  =============> write your prediction here :there is a syntax error because string is decleared two tiimes.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//while calling a function capitalise occured a error. The error is occured due to declared of Str two  times.

// /*function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// capitalise("Ramesh");*/

// =============> write your explanation here
// to resolve this error we need to declared a new variable in step 9. after declaring a new variable it runs and give outputs.
//which first letter is capital and other are remain same.
// =============> write your new code here
function capitalise(str) {
	let ab = `${str[0].toUpperCase()}${str.slice(1)}`;
	return ab;
}
capitalise('ramesh');
// The correct code is  given above i pass a value ramesh after running this function the output become Ramesh.
