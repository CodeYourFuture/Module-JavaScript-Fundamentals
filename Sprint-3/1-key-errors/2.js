
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*An error will occur because a number was used as a function parameter instead of a variable name.*/

function square(3) {
    return num * num;
}

// =============> write the error message here
//SyntaxError: Unexpected number

// =============> explain this error message here
/*The error happens because JavaScript expects a variable name inside the function brackets, but it found a number instead.*/

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num 
}
console.log(square(3));

