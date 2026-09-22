/*const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//This won’t work because cardNumber is a number, and numbers don’t have the slice method.
//console.log(`${last4Digits}`);
// when I run it I see: TypeError: cardNumber.slice is not a function because slice() only works on strings or arrays.
// To fix it, I need to turn the number into a string first, then slice the last 4 characters.
const cardNumber = 453787178094213;
const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits);
