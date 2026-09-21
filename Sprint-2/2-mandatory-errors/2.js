// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

// an error in line 4, "ReferenceError: Cannot access 'cityOfBirth' before initialization", which proves my assumption that
// the value of cityOfBirth should have been assigned prior to trying to print the string

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
