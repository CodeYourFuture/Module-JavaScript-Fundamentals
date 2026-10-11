// Predict and explain first...

// =============> The function instructions will work but because there is no return statement it will be undefined 

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> Because a return statement will return that value back to the code, it will send it back to who called the function this does not mean the human will see it in the log, console.log is used to show the result to the reader. 

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); 