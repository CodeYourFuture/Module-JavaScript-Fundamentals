const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: I expected the code to fail because cardNumber
// is a number, and slice() is a string method.
//
// Actual result: The original code produced a TypeError
// because cardNumber.slice is not a function.
//
// The fix converts cardNumber into a string using toString()
// before calling slice(-4) to extract the last four digits.
//
// The actual error matched my prediction.
