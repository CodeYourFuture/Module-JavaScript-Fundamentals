// Predict and explain first...
 
// Predict the output of the following code:
// =============> Write your prediction here : Even though the function calls pass in different numbers (42, 105, 806), the getLastDigit function doesn't take an input at all all three lines will print the same result: the last digit of 103, which is 3 — regardless of what number is passed in. 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
:The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
: the arguments 42, 105, and 806 are being passed into getLastDigit(42) etc., but since the function is defined as function getLastDigit() — with empty parentheses — it has no parameters to receive those values. The passed-in arguments are simply discarded. inside the function isn't a parameter at all — it's referring to the completely separate outer num variable (103) via closure/scope, which is why every call gives the same answer regardless of input.
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
