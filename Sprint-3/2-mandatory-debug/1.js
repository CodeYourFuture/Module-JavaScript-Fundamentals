// Predict and explain first...
//  =============> write your prediction here
:the return statement sits on its own line, completely separate from a + b below it.JavaScript will treat return; as returning nothing at all, and a + b will just never actually run, since the function exits right at the return line.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here JavaScript automatically inserts a semicolon after return if there's a line break immediately following it, effectively treating it as return; — returning undefined — and then completely ignoring whatever comes after on the next line, since the function has already exited by that point. So a + b becomes dead code that never executes; the function returns before it even gets there.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // "The sum of 10 and 32 is 42"
