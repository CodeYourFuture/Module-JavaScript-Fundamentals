const cardNumber = 4533787178994213;

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// =============> My prediction
// I think the code will throw an error because the cardNumber variable is a Number and not a String data type
// The slice() method is a String method and cannot be used on a Number
// https://www.w3schools.com/js/js_datatypes.asp
// I predict that the error will be a TypeError

// =============> The actual output
// TypeError: cardNumber.slice is not a function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function

// =============> My explanation
// The error is as I predicted. I need to convert the cardNumber variable to a string before using the slice() method
// And then convert the last4Digits variable back to a number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

const last4DigitsString = cardNumber.toString().slice(-4);
const last4DigitsNumber = Number(last4DigitsString);

console.assert(last4DigitsNumber === 4213);
