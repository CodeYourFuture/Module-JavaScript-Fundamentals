// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here:I predict the output will be 3 every time, because the function uses the global constant num = 103 instead of using the numbers passed into getLastDigit().

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here:
// The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here:there is no parameter in the function.
//So when we call the function:
//getLastDigit(42)
//the 42 is passed to the function, but the function has no parameter to receive it.
//Instead, it uses the global variable (const num = 103)
//so every call converts 103 to a string and gets its last digit: 3.
// Finally, correct the code to fix the problem
// =============> write your new code here:
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
