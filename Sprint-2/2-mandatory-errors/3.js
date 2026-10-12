const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
//the output is 4213
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
//it won't work because cardNumber is not a string
// Then run the code and see what error it gives.
//TypeError: cardNumber.slice is not a function so a string method can't br used with it
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// The error is caused because card number is a number not a string and toString is a string method so its a different type of data
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
