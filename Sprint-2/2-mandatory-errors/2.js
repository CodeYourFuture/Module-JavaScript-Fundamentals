// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";

console.log(`I was born in ${cityOfBirth}`);

// return has not been defined before it is used in the console.log statement.
// To fix this, you should declare and assign a value to the variable cityOfBirth before using it in the console.log statement.
// To do this, you can move the line const cityOfBirth = "Bolton"; above the console.log statement.
// This way, the variable will be defined before it is used, and the code will work as expected.
