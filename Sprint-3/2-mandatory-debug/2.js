// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
  //getting the last digit of 103
// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  //-The last digit of 42 is 3
  //-The last digit of 105 is 3
  //-The last digit of 806 is 3

// Explain why the output is the way it is
  // -Every time the function calls 103
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
  //The function was looking at the outside "num" but Now there are two (num) one outside the scope "const num= 103" and i added another inside the function scope.
  //The function calculates something and returns it then console.log outside receives that returned value and prints. it.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);

// console.log(getLastDigit(42));
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


