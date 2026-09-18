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
const cardNumber = '4533787178994213';
const last4Digits = cardNumber.slice(-4);

// console.log(last4Digits);
