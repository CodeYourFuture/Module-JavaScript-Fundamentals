// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// the error is ReferenceError: Cannot access 'cityOfBirth' before initialization,
// reason is the console.log was entered before the variable declaration.
//  Console.log cannot run something that is not there yet.
// To fix it , move the const declaration above the console.log

