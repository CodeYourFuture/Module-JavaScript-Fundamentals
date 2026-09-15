// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// the num is declared in the global scope and the function will use it despite when it is called with different argruments and thus will bring the result to become only 3.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// 3 in all the 3 function calls
// Explain why the output is the way it is
// =============> write your explanation here
// because it is the global scope declaration of num the function will use it as it doesn't have its own num declared inside.
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// the num can be declared as a parameter so as the function can work for any argument passed to it.
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
