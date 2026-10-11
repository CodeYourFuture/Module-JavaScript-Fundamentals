// Predict and explain first...
//  =============> This will not work because the a + b statement should have been after return, but return has a semicolon after it which stops the function an returns nothing

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> Because return and a+b are not on the same line, the line after return is never reached, and would be considered dead code and therefore the console logs argument as undefined

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}


console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);