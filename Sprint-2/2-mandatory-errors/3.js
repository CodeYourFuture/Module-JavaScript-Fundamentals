const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/*
Prediction : The slice method is used with String data type. here we have cardNumber varible with type Number.
Running the code will give a TypeError : cardNumber.slice is not a function
The solution is to convert numbe to string, There are three posibility:
String(cardNumber)
cardNumber.toString()
`${cardNumber}`

*/

console.log(last4Digits);
