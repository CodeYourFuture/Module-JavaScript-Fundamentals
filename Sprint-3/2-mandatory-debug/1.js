// Predict and explain first...
//  =============> return value is written before the expression.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> when the expression evaluates a value it will 
// need a return statment,but the return statment is before the expression
//  which will result in undefined outcome because the function that is passing 
// an argument is not receiving output of the expression.
// Finally, correct the code to fix the problem
//   
// function sum(a, a){
//   return a+b;
//}
// console.log(`the sum of 10 and 32 is ${sum(10,32)}`);
