// Predict and explain first...

// =============> write your prediction here
/*The code will print a correct multiplication inside the function*/

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/*The result shows undefined because the function prints the answer with console.log instead of returning it, so nothing is passed back into the template string.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
