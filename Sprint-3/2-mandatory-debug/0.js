// Predict and explain first...

// =============> We will log the result in a console but function won't return it as a value.
// console.log only displays the result, it does not return it from the function.

/*
function multiply(a, b) {
  console.log(a * b);
}
  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/


// =============> write your explanation here

//We need to return a * b so the result can be used where the function is called.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
