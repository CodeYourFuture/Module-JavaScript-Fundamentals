// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> We have put a number in the function call instead of a variable.
// It's going to say
// SyntaxError: Unexpected number
// We should pass the number when we call the function, not when we define it.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here SyntaxError: Unexpected number

// =============> explain this error message here We are passing a number when we define the function instead of a variable.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.assert(square(3) === 9);
