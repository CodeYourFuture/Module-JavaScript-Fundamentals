// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//I predict the funciton will throw a SyntaxEror as the perametters sould be valid variables like names or identifiers with upholding to the variable naming convention and in this case a number found

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//the Error is a syntax error: Unexpected number

// =============> explain this error message here
/* The function was givin a number as its perameter where in JS only allows varaible names and usnig a number causes a SyntaxError
 Also, the function was returning num*num where num is undefined causing a syntax error 
 */

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(25));