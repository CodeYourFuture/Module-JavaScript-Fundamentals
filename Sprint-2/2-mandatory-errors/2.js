// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// Answer: because javascript runs from top to bottom, by declaring the const after running console.log the function throws an error because the decleration is done ater console.log

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

