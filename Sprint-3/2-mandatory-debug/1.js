// Predict and explain first...
//  =============> write your prediction here
//The sum of 10 and 32 is undefined
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

/*The function returns undefined because the return; statement ends the function immediately, so the calculation a + b never runs or gets returned.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
