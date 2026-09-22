const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Prediction was the code would run successfully without error although with the wrong results due to absence of syntax errors in the file
// Error returned: TypeError: cardNumber.slice is not a function
// Lesson learnt here; slice method is only available for strings or arrays not numbers
// So converted the cardNumber into a string first