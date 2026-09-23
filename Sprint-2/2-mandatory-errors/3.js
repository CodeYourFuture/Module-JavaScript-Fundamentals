const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


console.log(last4Digits);

//I think that Javascript will give an error because .slice() is normally used with strings, and cardNumber is currently a number.
//const cardNumber = 4533787178994213; does not have any quotation marks, so Javascript will treat it as a number. 

//When run with console.log(last4Digits); we get --> TypeError : cardNumber.slice is not a function 

//.slice is a method used with strings and we need to make cardNumber into a string by adding quotation marks.I

//we can change the expression by making it intoa string by doing --> const last4Digits = String(cardnumber).slice(-4);
//String(cardNumber) changes the number into a string and .slice(-4) takes the last 4 characters and stores it in last4Digits.
//const cardNumber = 4533787178994213 to const cardNumber = "4533787178994213";
//Now cardNumber is a string, then we can re run the code with console.log(last4Digits); to get the correct code.