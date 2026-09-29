// Predict and explain first...

// Predict the output of the following code:
// Prediction: Each line reports 103's last digit (3), because getLastDigit
// ignores its arguments and always reads the global num variable.

const num = 103;

function getLastDigitBeforeFix() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigitBeforeFix(42)}`);
console.log(`The last digit of 105 is ${getLastDigitBeforeFix(105)}`);
console.log(`The last digit of 806 is ${getLastDigitBeforeFix(806)}`);

// Now run the code and compare the output to your prediction
// Output: Each line reports 3.
// Explain why the output is the way it is
// Explanation: getLastDigit has no parameter and reads the unchanged global
// num (103), so passing 42, 105, or 806 has no effect.
// Finally, correct the code to fix the problem
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
