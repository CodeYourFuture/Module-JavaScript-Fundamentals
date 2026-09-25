// Predict and explain first...
//  ==============> write your prediction here
// I predict this will run without an error, but the result will show as
// 'undefined' instead of the actual sum. The 'return' statement is on its
// own line, separate from 'a + b;' on the next line — JavaScript will treat
// these as two separate statements, so the function returns immediately
// with nothing, and 'a + b' never actually gets returned.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// ==============> write your explanation here
// JavaScript has a feature called Automatic Semicolon Insertion (ASI). When
// 'return' appears on its own line with nothing after it, JavaScript
// automatically treats it as 'return;' — ending the function right there and
// returning 'undefined'. The following line, 'a + b;', becomes dead code
// that never runs, because the function has already exited. This is why the
// original code always produced 'undefined' instead of the sum. The fix is
// to put the expression on the same line as 'return', so JavaScript knows
// it's part of the return statement: 'return a + b;'.

// Finally, correct the code to fix the problem
// ==============> write your new code here
// (the fixed function above already satisfies this)