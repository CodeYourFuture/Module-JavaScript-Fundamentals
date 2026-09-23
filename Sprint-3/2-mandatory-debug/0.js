// Predict and explain first...
// =============> write your prediction here
//when we run the code, I predict that the function  just execute but doesn't return any thing.
// function just print the result of multiply
// I am not sure what going to be show in the second console.log

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> write your explanation here
// After running the code, the multiply function display the result (320)
// but it does not return result back to the code
// therefore, multiply(10, 32) evaluate undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
