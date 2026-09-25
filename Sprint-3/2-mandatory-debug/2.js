// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: This code will throw an error because the function getLastDigit does not take any parameters but we are passing a parameter to it in the console.log statements.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here  :output
/* The last digit of 42 is 3
   The last digit of 105 is 3
   The last digit of 806 is 3
*/
// Explain why the output is the way it is
// =============> write your explanation here: The funtion return on single value (3) no matter what parameter is passed to it because the function does not take any parameters and it is using the gobal variable num which is set to 103. So the last digit of 103 is always 3.
// Finally, correct the code to fix the problem
// =============> write your new code here

// function getLastDigit(num) {
//   return num.toString().slice(-1);
// }
// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem : The first declaration of num as constent should be removed and the function getLastDigit should take a parameter num to return the last digit of the number passed to it.
