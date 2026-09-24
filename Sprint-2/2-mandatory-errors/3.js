// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// Expectation about the error : cardNumber is assigned a number value, a .slice function does not work on number
// The constant last4Digits should be assigned to a String (cardNumber) to perform .slice function.
// The code would result a TypeError. It matches my prediction.
const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits);
