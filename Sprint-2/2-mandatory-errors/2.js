// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError: Cannot access 'cityOfBirth' before initialization
//Trying to use cityOfBirth before it's defined
//To fix, put line 5 before line 4, so it is initialised before use