const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

The code is not working because the "slice" method is being used incorrectly. The "slice" 
method should be called on the string "cardNumber" to extract the last 4 digits. However, 
if there is a syntax error or if the variable "cardNumber" is not defined correctly, it could lead to an error.

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
It gives an error because the "slice" method is being called on a string, but if the string is not defined correctly or 
if there is a typo in the variable name, it will result in an error. This is what I predicted, as 
I anticipated that the issue would be related to how the "slice" method is being used on the string.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

I updated the expression to correctly use the "slice" method on the "cardNumber" string. I converted the cardNumber to a 
string with the ("") and then used the slice method to extract the last 4 digits. 