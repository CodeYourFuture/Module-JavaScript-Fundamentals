// Predict and explain first BEFORE you run any code...
// when we run the code, I predict that we will got the error in function argument
//because it is not a variable

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//

/*function square(3) {
    return num * num;
}*/

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error occurs because 3 is a number, not a valid variable name.

// Finally, correct the code to fix the problem

// =============> write your new code here
const num = 3;
function square(num) {
  return num * num;
}
console.log(square(num));
