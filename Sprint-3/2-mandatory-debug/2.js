// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//getLastDigit will convert a number to a string
// However, since there is no parameter or local variable to the function  we might run into an Error

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// As expected, the function has no parameters, so it relies on the global variable "num" as its only variable.
// Since there are no parameters defined, the function permanently uses the global variable instead.
// This means even if we pass arguments when calling the function, they will be ignored because there are no parameters to receive them.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/* the reason why getLastDigit isn't working properly is that it doesn't accept any arrguments where there isn't any perameters in its difination.
where it uses the golabal varaible 'num' decalred outside the funtion and already set to 103

The correct code includes a parameter 'num' in the difination this allows the function to accept the number passed to it when called*/