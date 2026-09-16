const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


/*The code would not work because cardNumber variable stores number data type and .slice() method cannot be used on a number,
if we run the code without changing data type to string we will get TypeError displayed
I used .toString() method to convert cardNumber variable to a string and then used .slice(-4) to get the last 4 digits. */