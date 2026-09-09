const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// This will result in an error because the slice method is not defined for numbers. To fix this, we need to convert the cardNumber variable to a string before calling the slice method on it.
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//here is the corrected code://
/*const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
*/
