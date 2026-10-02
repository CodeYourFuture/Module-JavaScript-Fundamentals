const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

// PREDICTION: This code will result in a TypeError because cardNumber is a number,
// and numbers don't have a .slice() method (it only exists on strings).
//
// ACTUAL ERROR: TypeError: cardNumber.slice is not a function (at 3.js:2:32)
// Was my prediction correct? YES — it was indeed a TypeError caused by calling
// a string method on a number.
//
// Fix: Make cardNumber a string by wrapping it in quotes: "4533787178994213".
// (Card numbers should be strings in real life — they can have leading zeros
// and are too large for the Number type.)

console.log(last4Digits);