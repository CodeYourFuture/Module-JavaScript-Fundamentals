// Predict and explain first...

// =============> write your prediction here
// My prediction is '320' would be printed first followed by "The result of multiplying 10 and 32 is undefined"
// This occurs because 'multiply()' does not return anything

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The template literal calls 'multiply(10, 32) to build the string
// Inside multiply, 'console.log(a * b)' runs immediately, printing '320'
// This happens before the outer 'console.log' line finishes, because JavaScript has to evaluate 'multiply(10, 32)' first to know what to put in the template
// 'multiply's' function body only contains a 'console.log' statement without a 'return' keyword
// A function with no explicit return statement returns 'undefined' by default.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b){
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
