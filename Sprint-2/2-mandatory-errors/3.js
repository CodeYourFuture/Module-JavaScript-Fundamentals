const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// The original code doesn't work because cardNumber is a number and .slice() cannot be used on a number.
// Converting cardNumber to a string allows .slice(-4) to return the last 4 characters.