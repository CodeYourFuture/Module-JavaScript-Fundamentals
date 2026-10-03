// Predict and explain first...

// =============> write your prediction here
//The multiply function doesn't return anything, only prints to console so the function call will have value undefined.
//So when line 12 is executed, first it will print "The result of multiplying 10 and 32 is undefined"
//Then on a new line it prints 320

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//It first printed 320, then printed "The result of multiplying 10 and 32 is undefined" on the next line
//I think this is because it goes through the line 12, executes the multiply function call first, then finishes the
//console.log function call.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
