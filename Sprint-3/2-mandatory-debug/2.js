// Predict and explain first...

// Predict the output of the following code:
// =============> I predict the result will be wrong because the num is set set on 103.

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
/* =============> the output:
The last digit of 42 is 3 
The last digit of 105 is 3
The last digit of 806 is 3*/
// Explain why the output is the way it is
/* =============> The problem is that the function ignores the numbers passed to it, 
 it always uses num, which is 103, so it returns 3 every time.*/
// Finally, correct the code to fix the problem
// =============> write your new code here
/*function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// In this case getLastDigit is not working because it's parameter is empty and not declared.
// Here's the right code:
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
