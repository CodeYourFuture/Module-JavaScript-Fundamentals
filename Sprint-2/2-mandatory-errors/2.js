// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError is happening as the const is after the console.log request for it, so the order is wrong.

// const cityOfBirth = "Bolton";
// console.log(`I was born in ${cityOfBirth}`);
