// Predict and explain first...

// Predict the output of the following code:
// =============> The last digit of 42 is 3 -- it will always be 3 because we have hardcoded the number 103 in the global scope.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is

// =============> write your explanation here .
// We have not defined any parameters in our function, so our function is reaching out to the global scope to find the variable num.
// We have hardcoded the number 103 in the global scope, so the function is always returning the last digit of 103, which is 3.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); //2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); //5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); //6
