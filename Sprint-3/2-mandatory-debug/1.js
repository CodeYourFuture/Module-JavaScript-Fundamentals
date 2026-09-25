// Predict and explain first...
// =====> It will not run and will come out as undefined

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =====> There is a semicolon right after return, which tells it to stop there,
// so basically anything that comes after that will not run hence the undefined result.
// Finally, correct the code to fix the problem will be to remove the semicolon.
//  =============> write your new code here
