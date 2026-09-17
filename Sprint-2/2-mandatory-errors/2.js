// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// Error: ReferenceError: Cannot access 'cityOfBirth' before initialization
// Why: cityOfBirth is used before it is declared.