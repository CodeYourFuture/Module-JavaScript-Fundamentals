// Predict and explain first...

// Predict the output of the following code:
// I predict that all three console.log statements will show 3
// because the function uses the global variable num, which is 103.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction

// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// The getLastDigit function does not have a parameter.
// It always uses the global variable num, which has the value 103.
// Therefore, the arguments 42, 105 and 806 are ignored.
// The last digit of 103 is 3, so the function returns 3 every time.

// Finally, correct the code to fix the problem

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);