// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// A: The function supposed to print the last digit of 42, 105 and 806 which is 2, 5, 6. But the function could not run smooth
// because of the variable "num" has been declared.

//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Now run the code and compare the output to your prediction
// =============> write the output here
//A: The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// A: because num has been declared for 103 so the function could only get the last digit of 42, 105 and 806.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// A: it is because num has been strictly declared as 103 before. and the value is console log could be be applied to function.
// To fix this parameter of getLastDigit should assign for val as a placeholder to allow different value
