// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/*
cardNumber is giving a number and that can't be used for slice, could not remember the name for that error at this time.
after running the code it shows thats a TypeError. cardNumber.slice is not a function
*/

const cardNumber = 4533787178994213;
let number = cardNumber.toString()
const last4Digits = number.slice(-4);
console.log(last4Digits)



