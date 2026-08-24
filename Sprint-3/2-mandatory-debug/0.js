// Predict and explain first...

// =============> write your prediction here
// Running this code will print 320 and then print "The result of multiplying 10 and 32 is undefined"
// because the multiply function does not return anything, but it logs the result of the multiplication.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// // When I run this script
// [~/CYF/ITP/Module-Structuring-and-Testing-Data/Sprint-2/2-mandatory-debug]: node 0.js
// 320
// The result of multiplying 10 and 32 is undefined

// In our function we log out the result of the multiplication, but we don't return anything.
// So when we call the function in our console.log statement, it places the return value of the function in the string.
// There is no return value, so it prints undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
