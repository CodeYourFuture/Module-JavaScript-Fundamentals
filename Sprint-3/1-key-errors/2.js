
// Predict and explain first BEFORE you run any code...
// Prediction: We will get an error definitely but i'm not sure if it's going to be a ReferenceError or a SyntaxError

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// console.log(square(2));

// =============> write the error message here

// =============> ERROR MESSAGE: SyntaxError: Unexpected number

// =============> explain this error message here

// =============> EXPLANATION: The SyntaxError: Unexpected number happened because the function was expecting an identifier in the  parameter ('num') and not a number ('3') which triggered the error 

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(2));
