// Predict and explain first...
//  =============> write your prediction here
// I predict it will print "The sum of 10 and 32 is undefined", because
// the function returns before it reaches a + b.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statement was on its own line with nothing after it, so the
// function returned undefined straight away. This is caused by automatic 
// semicolon insertion (ASI), where JavaScript treats the line break after 
// 'return' as the end of the statement, so 'a + b' was never reached.
// Finally, correct the code to fix the problem
//  =============> write your new code here
// I moved a + b onto the same line as return: return a + b
