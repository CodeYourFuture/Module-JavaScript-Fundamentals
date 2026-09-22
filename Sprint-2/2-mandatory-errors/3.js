const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
// alternatively, const last4Digits = (cardNumber + '').slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I thought it was something to do with the slice "-4" (but i turned out i forgot that negative indices start at -1, not 0)
// The actual error indicates that on the 3rd line there is a typeError: "cardNumber.slice is not a function"
// Checked the error reference and decided to look more closely. Noticed that the card number is used as a number,
// so it answers why the function couldn't be called - because they can be only called on Arrays and Strings.
// Therefore, I'll add parentheses to turn the card number into a string (so that the function could be called)

// Fix. 

