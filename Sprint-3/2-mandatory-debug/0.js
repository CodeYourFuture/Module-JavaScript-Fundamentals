// Predict and explain first...

// =============> write your prediction here

// 'The result of multiplying 10 and 32 is 10 * 32' is printed.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// the function prints a * b. When presented with multiply(10, 32) it prints 10 * 32.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);