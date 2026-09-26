// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error?in the original code,line 4 creates it and line 3 uses the createOfBirth,Then I changed console.log to the next line because we need to declare the variable before using it.
//ReferenceError: Cannot access 'cityOfBirth' before initialization

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
