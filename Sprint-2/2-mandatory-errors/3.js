const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: I believe slice counts forward from the start when you use positive values, and
// backwards from the end when you use negative. So if you only put in one negative number, it's counts
// backward from the end to the last 4, but can't "turn around" to count up to the end again..?

// After running the code: The actual error was a TypeError, saying that cardNumber.slice is not a function.
// That means you can't put anything in parenthesis after cardNumber.slice. However, when I used slice before
// slice definitely takes parameters. This made me think about the fact that cardNumber is actually a
// number, and slice is probably only for strings or arrays. You can't really count positions in a number.

// I solved it by chaining a toString before slicing. My initial theory was completely wrong, putting a
// negative number in slice is completely fine. Now last4Digits is a string, not a number. But it seems
// easier to work with as a string, if specific digits need to be accessed, so I will keep it as a string.
