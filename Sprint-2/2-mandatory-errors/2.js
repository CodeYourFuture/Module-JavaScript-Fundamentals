// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// The error is a ReferenceError: Cannot access 'cityOfBirth' before initialization 
// In JavaScript variables declared with 'const' or 'let' cannot be accessed before they are declared or initialized


//SOLUTION
// move the variable declaration above the 'console.log()'
const cityOfBirth = "Bolton";

console.log(`I was born in ${cityOfBirth}`);
