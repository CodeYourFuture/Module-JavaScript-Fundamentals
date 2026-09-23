// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The original code tried to use cityOfBirth before it was initialized.
// This caused a ReferenceError because variables declared with const
// cannot be accessed before their declaration.
// Moving the declaration before console.log fixes the problem.
