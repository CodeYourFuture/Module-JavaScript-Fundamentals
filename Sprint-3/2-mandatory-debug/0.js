// Predict and explain first...

// =============> I couldn't predict until I run the code

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

/* =============> The Terminal gives an answer of 320 but also says "The result of multiplying 10 and 32 is undefined"
which makes me think that the function has no return so it gives back undefined.*/
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
