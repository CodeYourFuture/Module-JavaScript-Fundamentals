const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits)

// The variable cardNumber is not a string and the slice() function works with strings or array

// Consider: Why does it give this error? 
// It gave that error "TypeError: cardNumber.slice is not a function" brcause the slice() function tool are not applicable to numbers.     
