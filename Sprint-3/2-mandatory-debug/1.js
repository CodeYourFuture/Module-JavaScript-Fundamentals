// Predict and explain first...
//  =============> write your prediction here
// The code seems like it would log 'The sum of 10 and 32 is 42' since function 'sum(10, 32)' seems to add two numbers 


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// When the code was run it logged 'The sum of 10 and 32 is undefined'
// The bug is in line 7
// 'return' is automatically assigned a semi-colon if it is followed by a line break, making line 8 unreachable
// Finally, correct the code to fix the problem
//  =============> write your new code here
