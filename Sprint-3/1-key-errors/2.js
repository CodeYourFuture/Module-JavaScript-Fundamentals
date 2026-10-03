// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// In the function, 3 hasn't been assigned to num, so num is NaN and should return NaN.
//Also when defining a function, the parameter should have the variable name, not a value
//to pass in, unless you want to default value such as num = 3, which assigns 3 to num if
// no value is passed in

//function square(3) {
//    return num * num;
//}

// =============> write the error message here
//SyntaxError: Unexpected number
// =============> explain this error message here
//syntaxError means there is a mistake in the way the code is written, so javascript can't
// interpret the code. in this case there is a number here when there shouldn't be.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
