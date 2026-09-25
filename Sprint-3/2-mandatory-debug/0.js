// Predict and explain first...
//  ==============> write your prediction here
// I predict this will run without an error, but print the wrong result at
// the end. The 'multiply' function uses console.log internally instead of
// returning a value, so when it's used inside the template literal, it will
// show as 'undefined' instead of the actual multiplication result.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// ==============> write your explanation here
// The original 'multiply' function printed the result with console.log
// instead of returning it. A function that doesn't explicitly return a value
// returns 'undefined' by default. When the outer console.log tried to use
// multiply(10, 32) inside the template literal, it inserted 'undefined'
// instead of the actual number, because it was using the function's return
// value, not what it printed internally. Changing console.log to return
// inside the function fixes this, since now the function actually hands
// back the calculated value.

// Finally, correct the code to fix the problem
// ==============> write your new code here
// (the fixed function above already satisfies this)