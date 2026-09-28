// Predict and explain first...

// There is no return in the function, the wrong use of console.log is being used, therefore the function isn't being closed and only is the console.log being logged twice, causing the function's parameters to be defined by the return. 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The instead of console.log being used in the functions expression, there should be a return.

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
