// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// I predict the error will come from the argument because when we write a function we first declare parameters not values

/*function square(3) {
    return num * num;
}*/

// SyntaxError: Unexpected number

// this error tells us javascript expects valid variable identifiers when function is defined not values

// Finally, correct the code to fix the problem

// Here is the fixed code
function square(num) {
  return num * num;
}
console.log(square(3));
