// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* The log is trying to use cityOfBirth before the variable exists.
 JavaScript reads the code in order, so the variable must be declared before it is used.*/
// I logged the message before creating the cityOfBirth variable, so JavaScript couldn't find it yet. I need to declare the variable before using it.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
