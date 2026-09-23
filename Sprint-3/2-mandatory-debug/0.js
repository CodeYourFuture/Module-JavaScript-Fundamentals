// Predict and explain first...

// =============> write your prediction here
// local scope code did not return to global.

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The calculation of the a * b should apply the the statement (`The result of multiplying 10 and 32 is ${multiply(10, 32)}`).
// because code on local scope did not return to global. The global cannot apply the result of local.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
