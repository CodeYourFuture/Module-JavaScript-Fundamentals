// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//Answer : the error was that CitOfBirth vaiable was declared after the method cosole .log()
//The solution is to declare it before calling it.

const cityOfBirth = "Bolton";

console.log(`I was born in ${cityOfBirth}`);
