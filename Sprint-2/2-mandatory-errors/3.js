const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I am predicting the code wont't work because the slice method does not work for numbers I guess
// when i run the program it is giving an error saying "TypeError: cardNumber.slice is not a function"
// It is giving this error because our var cardNumber is number and numbers don't have slice() method & it is what I predicted
// In order our code to be able to run we need first to change the number type into String so that the slice() method can function
