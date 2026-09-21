const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//slice is for text or array only. Need to change card number from number to text. use toString() to convert cardNumber
//from integer to string.

//error message: TypeError: cardNumber.slice is not a function
//    at Object.<anonymous> (/Users/rogerger1220/Documents/CYF/Module-JavaScript-Fundamentals/Sprint-2/2-mandatory-errors/3.js:2:32)
//    at Module._compile (node:internal/modules/cjs/loader:1929:14)
//    at Object..js (node:internal/modules/cjs/loader:2060:10)
//    at Module.load (node:internal/modules/cjs/loader:1651:32)
//    at Module._load (node:internal/modules/cjs/loader:1443:12)
//    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
//    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//    at node:internal/main/run_main_module:33:47

//Node.js v24.21.0
