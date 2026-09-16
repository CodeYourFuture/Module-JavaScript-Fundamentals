// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


//ReferenceError: Cannot access 'cityOfBirth' before initialization.
//console.log tries to use cityOfBirth inside the template literal, but cityOfBirth has not been declared yet at that point in the code.
