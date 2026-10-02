// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

//Prediction: The code won't work because cardNumber is stored as a Number and not a string, this is because '.slice()' is a string method 
// Numbers in JavaScript don't work with '.slice()'


// Then run the code and see what error it gives.
//This is the error it gives: TypeError: cardNumber.slice is not a function


// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

//Explanation: Yes, my prediction was accurate. JavaScript threw a TypeError because '.slice()' is a string method 
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// Keep the original number value untouched
const cardNumber = 4533787178994213;
// Convert to string dynamically before slicing
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits); // output 4213
