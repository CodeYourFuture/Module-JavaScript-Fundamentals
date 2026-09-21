// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

//The error we see it's a ReferenceError which tells us that we cannot access variable before initialization.

/*JavaScript reads the code from top to bottom, order is wrong.
Task cannot be executed as variable cannot be access before being created. */
