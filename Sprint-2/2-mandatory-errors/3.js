const cardNumber = "4533787178994213";
const last4Digits = String(Number(cardNumber.slice(-4)));

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: slice() is a string method. That is why it is not working on numbers.
// Error message: type error
// Convert the number to string 
// If we need to keep number we need to convert it back from string to number using Number() method