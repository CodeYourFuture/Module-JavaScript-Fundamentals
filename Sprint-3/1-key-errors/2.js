// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code in local scope could not refer to variable. function square should attach with a variable instead of value.

//function square(3) {
//    return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// =============> the error caused by the wrong input for the variable "square(3)".

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3));
