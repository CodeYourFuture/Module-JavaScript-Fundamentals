// Predict and explain first...
//  By using the semi-colon after the return, this is closing off the function and leaving the parameters as undefined, causing the console.log state that the parameters are undefined.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// by using the semi-colon after the return, and having the parameters put into a separate line, the return can't define the parameters of the function.
// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
