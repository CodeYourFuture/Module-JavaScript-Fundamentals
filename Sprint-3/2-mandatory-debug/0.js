// Predict and explain first...

// I predict the code will run normally and print the result of a * b on the first console, but it will return undefined on the
// second console.log

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// The reason for printing undefined is that we didn't define a return value so the js doesn't know what to return and it simply returns undefined
// We can fix the code by replacing the console.log with a return keyword so the js knows what to return when the function is called

// Finally, correct the code to fix the problem
// Here is the fixed code

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
