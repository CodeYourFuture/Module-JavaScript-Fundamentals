// Predict and explain first...

// =============>
// Variables haven't been declared, so it will throw a reference error

/* function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); */
// =============> write your explanation here
// It printed 32 because that particular console function is inside the multiply function (local), whereas the other one
// is outside the scope and when we call the multiply function it comes up as undefined because nothing has been returned
// inside of it.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
