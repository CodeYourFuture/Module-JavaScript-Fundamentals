// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Answer: I got the error message ReferenceError: Cannot access 'cityOfBirth' before initialization
// This is because the program tries to access cityOfBirth before it has been initialized.
// I switched the lines around, so cityOfBirth gets declared before it is referenced.
