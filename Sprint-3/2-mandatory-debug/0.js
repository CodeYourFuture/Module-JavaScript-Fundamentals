// Predict and explain first...

// =============> write your prediction here
:The function multiply uses console.log to print the result inside itself, but it doesn't have a return statement

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
: console.log() and return do two completely different jobs. console.log() just prints something to the console for you to see — it doesn't hand any value back to the code that called the function. return is what actually sends a value back out of the function so it can be used elsewhere, like inside another expression or template literal.

// Finally, correct the code to fix the problem
//  =============> write your new code here
:function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);