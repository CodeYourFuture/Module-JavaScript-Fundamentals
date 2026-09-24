
// Predict and explain first BEFORE you run any code...

// the function square(3) wont work as you cant have a number value for the function.

// =============> write your prediction of the error here
// return num * num; wont work as 

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//  SyntaxError: Unexpected number

// =============> explain this error message here
// in the () is the parameter for the function and that cannot be a number as it has to be a name, following the same rules
// that are used so it can't start with a number.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


console.log(square(3));