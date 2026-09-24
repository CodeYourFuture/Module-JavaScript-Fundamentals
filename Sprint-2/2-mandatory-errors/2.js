// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

//The error is that the variable should be declared as a constant before it is used in the console.log statement.

//This is a ReferenceError.
//In this code, the key word does not need to be constant, it can be let - if this is the case the variable city0fBirth can be reassigned in other lines - instead of constant (which cannot reassign variable).
