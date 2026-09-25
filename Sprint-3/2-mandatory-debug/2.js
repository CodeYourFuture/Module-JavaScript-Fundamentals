// Predict and explain first...

// Predict the output of the following code:
// =============> I think the result prints will always be 3 as num will always be 103.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//                The last digit of 105 is 3
//                The last digit of 806 is 3
// Explain why the output is the way it is
// =============> because the code is using the outer variable num which is always 103.
//                so every call is returning the last digit of 103.
// Finally, correct the code to fix the problem
// =============> 
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// because there was no parameter so the function has no way of receiving the numbers. so adding a parameter fixes it.