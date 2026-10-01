// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// It's shows the reference error because variables should be declared first then the console.log().
// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";
/*we need to put declare variables(const cityOfBirth = "Bolton";) in first line in second line we use used console.log to print the output*/
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);