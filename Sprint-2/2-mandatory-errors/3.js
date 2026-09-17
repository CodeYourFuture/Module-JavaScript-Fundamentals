const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//I predict the code will not work because cardNumber is a number and .slice() is used on strings (or arrays), not numbers.
//When you run it, JavaScript gives an error which is TypeError: cardNumber.slice is not a function
//the reason is because creates a number, and numbers do not have a .slice() method.
//the fix is converting the number to a string

console.log(last4Digits);
