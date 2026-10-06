// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> // I predict a SyntaxError because 3 is a number, but a function parameter needs to be a name.

/*function square(3) {
    return num * num;
}
*/
// =============> SyntaxError: Unexpected number

// =============> The error happens because 3 is not a name. A parameter needs a name, like num.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3));
