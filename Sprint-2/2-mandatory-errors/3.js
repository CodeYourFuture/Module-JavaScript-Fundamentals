const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits)

// The variable cardNumber is not a string and the slice() function works with strings or array

// Consider: Why does it give this error? 
// It gave that error brcause the slice() tool are not applicable to numbers.     
// I wasn't sure what error to expect because I'm just starting to learn the slice() tool
