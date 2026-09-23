
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I think using 3 will cause an error as parameter
// A parameter must be a valid variable name, not a number 

 /* function square(3){
   return  num * num;

}
   */
 
// =============> write the error message here 
// SyntaxError: Unexpected number

// =============> explain this error message here
// The parser sees the number 3 where it expects a valid parameter name,
// so it cannot understand the structure of the function
// It means we cannot use a number as a parameter name


// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num){
   return  num * num;

}
console.log(square(7));