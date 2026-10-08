// Predict and explain first...

// =============> write your prediction here
// I predict it will print 320 first (from the console.log inside multiply),
// and then "The result of multiplying 10 and 32 is undefined", because
// multiply does not return a value.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply only logs a * b to the console. It has no return statement, so
// multiply(10, 32) evaluates to undefined. The template string in the console.log
// puts that undefined into the sentence. The 320 appears on its own line
// because console.log runs inside the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here
// I changed console.log(a * b) to return a * b inside multiply, so the
// function hands the result back to the caller instead of only printing it.