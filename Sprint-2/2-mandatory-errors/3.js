const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);

// Prediction: the code will not work because cardNumber is a number,
// and the slice() method cannot be used directly on numbers.

// Running the original code gives a TypeError because cardNumber.slice is not a function.
// This happens because slice() is available for strings and arrays, but not for numbers.

// Converting cardNumber to a string first allows slice(-4) to return the last four characters.
// Therefore, last4Digits stores "4213".