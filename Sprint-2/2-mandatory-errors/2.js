// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?


const cityOfBirth = "Bolton";
// The error is that the const declation and initialization came after console.log so no access for cityOfBirth.
console.log(`I was born in ${cityOfBirth}`);