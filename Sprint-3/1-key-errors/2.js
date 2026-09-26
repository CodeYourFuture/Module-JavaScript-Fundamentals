// Predict and explain first BEFORE you run any code...
// i am guessing this function wants us to find the square root of 3 and whatever value we get we have to multiply it
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here

// function square(3) {
//                 ^

// SyntaxError: Unexpected number

// =============> explain this error message here
// we input a number as the parameter name, if we give the parameter a name it acts as a placeholder for the number we wish to give the function.
// we then write our number in console.log so it can send a message back to function what number we would want to square.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3));
