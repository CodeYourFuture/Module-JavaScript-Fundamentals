// Predict and explain first...
//  =============> write your prediction here
// The function suppose to return the sum of the two variables but we will encounter an error as the code after return is unreachable.


// function sum(a, b) {
//   return;
//   a + b;
// }
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// As we return nothing by closing the line with a semicolon hence a + b is not returned where we tell the computer to exit and go back to global scope and the computer will not be able to read the lines after that

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);