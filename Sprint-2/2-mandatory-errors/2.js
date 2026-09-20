// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


// The error is ReferenceError: Cannot access 'cityOfBirth' before initialization
// Answer: I switched the order by declaring the const first before calling /printing 
