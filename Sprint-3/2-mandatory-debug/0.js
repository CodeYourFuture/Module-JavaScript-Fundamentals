// Predict and explain first...
// Prediction: multiply logs 320 but returns undefined, so the template
// string prints: "The result of multiplying 10 and 32 is undefined"

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Explanation: console.log inside a function only prints; it does not return
// a value. Without return, the function result is undefined. Using return
// gives 320 so the template string shows the correct message.
