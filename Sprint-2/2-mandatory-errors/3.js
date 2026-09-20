const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(`${last4Digits}`);
// we get error (cardNumber.slice is not a function) because slice is a String method
