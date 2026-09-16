const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//Solution 
//Prediction - The code would not run because 'cardNumber' is declared as numbers instead of a string.
//             The '.slice()' method belongs to strings and arrays, it could only work by treating it's subject as a sequence of characters.

console.log(last4Digits);