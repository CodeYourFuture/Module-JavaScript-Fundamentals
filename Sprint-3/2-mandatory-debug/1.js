// Predict and explain first...
//  =============> I predict a SyntaxError in original code

//function sum(a, b) {
//  return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> Expression a + b is not assigned to return. 
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return (a+b);
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);